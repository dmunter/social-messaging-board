import { Link , NavLink } from "react-router-dom"
import Signin from "../auth/Signin"
const SignOutLinks=()=>{


    return(
         
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to='/SignIn'>Login</NavLink></li>
            <li><NavLink to='/Signup'>Create Account</NavLink></li>
        </ul>
         
        
    )
}
export default SignOutLinks