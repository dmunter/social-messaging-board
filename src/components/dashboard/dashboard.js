import Notifications from './Notifications'
import ProjectList from '../projects/Projectlist'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'
import {Navigate } from 'react-router-dom'//route gaurds 

import Signin from '../auth/Signin'



function Dashboard(props){
    // console.log(props.projects[2].title)
    const {projects, auth, notifications} = props
    //console.log(props.projects.Date.seconds.fromDate(new Date()))
    if(!auth.uid) return <Navigate to ='/signin'/>
    return(
        <div className="dashboard container">
               
            <div className="row">           
                <div className="col s12 m6">  
                    <ProjectList props = {projects}/> 
                </div> 
                <div className="col s12 m5 offest-m1">
                    <Notifications props = {notifications}/>
                </div>
                
            </div>
        </div>
    )
}
//this proper represents which properties is connected dashboard
const mapStateToProps = (state)=>{
   //console.log(state.firestore.ordered)
    return{
        //The firestore reducer holds our firebase objects
        projects: state.firestore.ordered.projects || state.project.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

//export default connect(mapStateToProps)(Dashboard) <- a single higher order function 
//that allow us to pass in props to Dashboard from mapStateToProps
//The connect() function connects a React component to a Redux store.

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects', limit: 10, orderBy: ['Date', 'desc']},
        {collection: 'notifications', limit: 4, orderBy: ['time', 'desc']}
    ])
)(Dashboard)