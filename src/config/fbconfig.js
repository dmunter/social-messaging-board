// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY ,//"AIzaSyBO1jcLvpfx3j3SAEq50f3Mnw_nF-0Pucg",
  authDomain: process.env.REACT_APP_AUTHDOMAIN,  //"back-end-test-93720.firebaseapp.com",
  projectId: process.env.REACT_APP_PROJECTID,// "back-end-test-93720",
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,//  "back-end-test-93720.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGINSENDERID,// "31559047016",
  appId: process.env.REACT_APP_APPID ,//"1:31559047016:web:4c58c869d76f43554ee8dd",
  measurementId: process.env.REACT_APP_MEASUREMENTID //"G-7VVSTVRWFS"

};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;