import React, { useTransition } from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import  {signIn}  from '../../store/actions/authActions'
import dashboard from '../dashboard/dashboard'

import {Navigate} from 'react-router-dom' //gaurd route

function Signin(props) {
    const [user, setUser] = useState({email: '', password: ''});
    const change= (e)=>{ 
        setUser({...user,[e.target.id]: e.target.value})

    }
  

    const submit=(e)=>{
    e.preventDefault()
    props.signIn(user)
    }
    const { authError} = props
    const { isEmpty } = props.auth 

  if(!isEmpty) return <Navigate to = '/' /> 
  return (
    <div className='container' >
        <form onSubmit={submit} className= 'white' style={{padding: '20px', margin: '20px'}}>
            <h2 className='grey0text text-darken-3'> Sign in</h2>
            <div className='input-field'>
                <label htmlFor='email'>Email</label>
                <input type= 'email' id = "email" onChange={change}></input>
            </div>
            <div className='input-field'>
                <label htmlFor='password'>Password</label>
                <input type= 'password' id = 'password' onChange={change}></input>
            </div>
            <div className='input-field'>
                <button id = 'submit' className='btn pink lighten-1 z-depth-0'> Submit</button>
            </div>
            <div className='container center red-text'>
                { authError  }
            </div>
        </form>
        <div className='container' style={{textAlign: 'center', textDecoration: 'underline'}}>
            <NavLink style={{color: 'black'}} to = '/Signup'><p>Don't have an account?</p></NavLink>
        </div>
    </div>
  )
}

const mapStateToProps= (state)=>{
    // console.log(state.firebase)
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }

}


const mapDispatchToProps=(dispatch)=>{
    return {
        signIn: (credentials)=> dispatch(signIn(credentials))
            //now we will be able to call props.signIn(props)
            //the project that is passed in will then be passed to creeteProject
        }    
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)