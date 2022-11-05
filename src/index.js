import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import fbconfig from './config/fbconfig'

import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './store/rootReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore, createFirestoreInstance} from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase, reactReduxFirebase} from 'react-redux-firebase';
import firebase from 'firebase/compat/app';

import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';

//root reducer holds multiple reducers that will hold different sets of actions
//multiple reducers to handle different parts of the app
//the reducers are they combined rootReducer and passed into the store
const store = createStore(rootReducer, 
  //compose allows use to pass multiple store enhancers
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore( firebase, fbconfig), //pass in the config authentication 
    // reactReduxFirebase(rbconfig, {attachAuthIsReady: true}),
  
  )
); 


const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  attachAuthIsReady: true,
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,

};
const AuthIsLoaded=({children})=>{
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
      return children
}


const root = ReactDOM.createRoot(document.getElementById('root'));


  root.render(
    <Provider store = {store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <AuthIsLoaded>
            <App />
          </AuthIsLoaded>        
        </ReactReduxFirebaseProvider>
    </Provider>
    )


