import {createStore,compose,applyMiddleware} from "redux"
import UsersReducer from "../reducers/usersReducer"
import firebase from "../firebase/Config"
import {getFirebase, reduxReactFirebase} from "react-redux-firebase";
import {getFirestore, reduxFirestore} from "redux-firestore";
import thunk from "redux-thunk";


var store = createStore
(UsersReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
        reduxReactFirebase(firebase),
        reduxFirestore(firebase)
    )
    );




export default store;