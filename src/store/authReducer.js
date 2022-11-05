const initState ={
    authError: null
} 


const authReducer = (state = initState, action) =>{
    
    switch(action.type){
        case'LOGIN_SUCCESS':
            console.log('login success')
            return{
                ...state,
                authError: null
            }
        case'LOGIN_ERROR':
            console.log('login error')
            return{
                ...state,
                authError: 'Login failed'
            }
        case 'SIGN_OUT':
            console.log('signout success')
            return state;

        case 'SIGNUP_SUCCESS':
            console.log('sign up')
            alert('success')
            return {
                ...state,
                AuthError: null
            };

        case 'SIGNUP_ERROR': 
            console.log(action.error)
            return{
                ...state,
                authError: action.error.message
            }
          
        default: 
            return state
    }
}



export default authReducer