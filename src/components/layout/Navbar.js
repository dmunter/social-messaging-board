import { Link } from "react-router-dom"
import SignInLinks from './Signin'
import SignOutLinks from './Signout'
import {connect} from 'react-redux'


function Navbar(props){
    
    const {isEmpty} = props.auth
    const {profile } = props
    //console.log(profile)

    return(
    <>
  
         <nav className="nav-wrapper dark-2" style={{backgroundColor: '#587498'}}>
            <div className="container nav-wrapper">
            <Link  to = '/' className="brand-logo left"> ChatSnap</Link> 
      
            {isEmpty ? <SignOutLinks/> : <SignInLinks profile = {profile}/>}
            </div>
        </nav> 
       

 
    </>     
    )
}
const mapStateToProps= (state) =>{
    //console.log(state.firebase.profile)
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)