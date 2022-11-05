import { Link, NavLink } from "react-router-dom"
import './layoutstyles.css'

import {connect} from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { useState } from "react"

//import the action creator to dispatch logout
const SignInLinks=(props)=>{
  
    return(
   
           <ul id="nav-mobile " className="right "style={{backgroundColor: '#587498'}}>
                <li><NavLink to = "/Createpost"> New posts</NavLink></li>
                <li><a onClick={props.signOut} > Logout </a></li>
                <li><NavLink to = "/"><button className="btn-floating grey darken-2" style={{backgroundColor: '#587498'}}>{props.profile.initials}</button></NavLink></li>
            </ul >
       
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signOut: ()=> dispatch(signOut())
    }
}
// const mapStateToProps=(state)=>{
//     //console.log(ownProps)
//     return{
//         initials: state
//     }
// }

export default connect(null, mapDispatchToProps)(SignInLinks)