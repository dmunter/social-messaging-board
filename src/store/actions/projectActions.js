
//action creator

const createProject=(project)=>{
    //when we use thunk we can return a function instead of an action object
    //dispatch -> dispatches is a function that dispatches action to reducer
        //extra 2 arguements because of the middleware
    return (dispatch, getState, {getFirebase, getFirestore})=>{
    //NOT RETURNING ACTION ANYMORE JUST FUNTION
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorUID = getState().firebase.auth.uid
    firestore.collection('projects').add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorInitials: profile.initials,
        authorId: authorUID,
        Date: new Date(),
    }).then(()=>{
        //Make async call to database
        dispatch({type: 'CREATE_POST', project})
    }).catch((err)=>{
        dispatch({type: 'CREATE_PROJECT_ERROR', err})
    })
    
   
    
    }

}

export default createProject