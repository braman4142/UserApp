

export const addUser =(user) => {
     
    return (dispatch, state, {getFirestore}) => {
       getFirestore().collection("users").add(user).then(
            () => {},
            () => {},
            )
     };
    };
   // console.log("addUser", user);
   // return{
   //  type: "ADD_USER",
   // payload: user



export const deleteUser =(userId) =>{
    return{
        type :"DELETE_USER",
        payload: userId,
    };
};

export const editUser =(userId,updatedUser) =>{
    return{
        type :"EDIT_USER",
        payload: {userId,updatedUser}
    }
};

export const getAllUsers = () => {
	return (dispatch, state, { getFirestore }) => {
		getFirestore()
			.collection("users")
			.onSnapshot(
				(snapshot) => {
					let users = [];
					snapshot.forEach((doc) => {
						users.push(doc.data());
					});
					console.log(users);
					dispatch({ type: "SET_ALL_USERS", payload: users });
				},
				(error) => {}
			);
	};
};