import React from 'react'
import { useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import {signUp} from '../../store/actions/authActions'

function Signup(props) {
    const [user, setUser] = useState({email: '', firstname: '', lastname: '',password: ''});
   
    const change= (e)=>{ 
        setUser({...user,[e.target.id]: e.target.value})
        //console.log(user)
    }
    const submit=(e)=>{  
        e.preventDefault()
       // console.log(props.authError)
        props.signUp(user)
    }


    const {isEmpty} = props.auth
    const { authError }= props
    console.log(authError)
    if(!isEmpty) return <Navigate to='/'/>

  return (
    <div className='container' >
        <form onSubmit={submit} className= 'white' style={{padding: '20px', margin: '20px'}}>
            <h2 className='grey0text text-darken-3'> Sign Up</h2>
            <div className='input-field'>
                <label htmlFor='email'>Email</label>
                <input class="validate" type= 'email' id = 'email' onChange={change}></input>
            </div>
            <div className='input-field'>
                <label htmlFor='firstname'>First Name</label>
                <input type= 'text' id = 'firstname' onChange={change}></input>
            </div>
            <div className='input-field'>
                <label htmlFor='last'>Last Name</label>
                <input type= 'text' id = 'lastname' onChange={change}></input>
            </div>
            <div className='input-field'>
                <label htmlFor='password'>Password</label>
                <input type= 'password' id = 'password' onChange={change}></input>
            </div>
            <div className='input-field'>
                <button className='btn pink lighten-1 z-depth-0'> Submit</button>
            </div>
            <div className='red-text center'>  { authError ? authError: null }</div>
        </form>
       
    </div>
  )
}

const mapStateToProps=(state)=>{
    console.log(state.auth)
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        signUp: (user)=>{dispatch(signUp(user))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup)