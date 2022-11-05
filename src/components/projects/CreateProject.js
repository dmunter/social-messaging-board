import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux'
//imort action creator that will dispatch action
import  createProject  from '../../store/actions/projectActions'
import Dashboard from '../dashboard/dashboard'
import {Navigate} from 'react-router-dom' //gaurd route


function CreateProject(props) {
    const [message, setMessage] = useState({subject: '', content: ''});
    const [confirm, useConfirm] = useState(false)

    const Toggle=()=>{
        useConfirm(!confirm)      
    }
    
    const change= (e)=>{ 
        setMessage({...message,[e.target.id]: e.target.value})
    }

    const submit =(e)=>{
        e.preventDefault()    
        console.log(isEmpty)
        if(message.subject && message.content && !isEmpty){  
            props.createProject(message)   
            Toggle();                  
        } 
        if(isEmpty){
            alert('Log in to create a new post')
        }   
    }

   
   
    const {isEmpty} = props.auth.auth
    if(confirm) return <Navigate  to = '/'/>
    if(isEmpty) return <Navigate to ='/signin'/>
    
  return (
    <div className='section'>
        <form onSubmit={submit} className= 'white' style={{padding: '20px', marginTop:'35px', margin: 'auto', width: '80%' }}>
            <h3 className='7887grey-text text-darken-3'> Create New Post</h3>
            <div className='input-field'>
                <textarea class="materialize-textarea" id="subject" type="text"  data-length="120" onChange={change}></textarea>
                <label for="input_text">Subject</label>
            </div>

            <div className='input-field'>   
                <label for="input-field">Message</label>         
                <textarea id="content" class="materialize-textarea" onChange={change}></textarea>              
                </div>
            <div className=''>
                <button className = 'btn' type='submit' onSubmit={submit}>Post </button>
            </div>
            
        </form>
      
    </div>
  )
}
const mapStateToProps=(state)=>{
    return{
        auth: state.firebase,

    }
}


// for dispatching actions to the store
const matchDispatchToProps= (dispatch)=>{
    return {
    createProject: (project)=> dispatch(createProject(project))
        //now we will be able to call props.createProject(props)
        //the project that is passed in will then be passed to creeteProject
    }    
}
export default connect(mapStateToProps,matchDispatchToProps)(CreateProject);

