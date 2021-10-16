var initialState = {
    users:[
        {
         name: "ous" ,
         email: "man@gmail.com" ,
         id: "7263316361" ,
        },
        { name: "iss", email: "iota@gmail.com", id: "3767389388"
         },
         {
             name:"lala", email: "iss@gmail.com", id: "7477747474747"
         },




    ]
}





 
 const usersReducer=(state=initialState, action)=>{
     switch (action.type) {
         case "ADD_USER":
          return {...state,users: [...state.users,action.payload]}
          default:
        return state
     }
 }
 
 
 
 
 
 export default usersReducer;