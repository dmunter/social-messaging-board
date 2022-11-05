import authReducer from "./authReducer"
import projectReducer from "./projectReducer"
import { combineReducers } from "redux"
import {firestoreReducer} from 'redux-firestore'
import { firebaseReducer } from "react-redux-firebase"

const rootReducer= combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer, //data is now synce from. in the background the firestore reducer will auto sync this state.
    firebase: firebaseReducer
})




export default rootReducer