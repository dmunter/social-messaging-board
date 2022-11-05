import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'
import {Navigate} from 'react-router-dom' //gaurd route
import moment from 'moment'

const Projectdetails= (props) =>{
    //get the ID from a URL React Router
    //returs obkect of key-value paris of the dynamic params from the current URL matche by 'route' path
    const params = useParams();
    const [project, setProject] = useState();

    useEffect(()=>{
        setProject(props.props.find(obj=>{
          return obj.id === params.id
      }))
    }, props.props
    )
    
   
  
  const {isEmpty} = props.auth
  if(isEmpty) return <Navigate to ='/signin'/>
     
  
  if(project){
  return (
    <div className='container section project-details' >
        <div className='card z-depth-0' style = {{padding: '20px'}}>
            <div className='card-contenet'>
                <span className='card-title'> {project ? project.subject : '--'} - {project ? project.id : '--' } </span>
                <p> {project ? project.content : '--' }</p>
            </div>
            <div className='card-action gret light-4 grey-text'>
                <div>Posted by {project ? project.authorFirstName + " "+ project.authorLastName : '--' }</div>
                <div >{project ? moment(project.Date.toDate()).calendar() : '--'}</div>
            </div>
        </div>
    </div>
  )
} else {
  return (
    <div className='container section center'>
      <p>Loading Page...</p>
    </div>
  )
}
}
const mapStateToProps=(state, ownProps)=>{
  const project = state.firestore.ordered.projects || state.project.projects
  //console.log(id)
  return {
    props: project,
    auth: state.firebase.auth
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      {collection: 'projects'}
  ])
)(Projectdetails)