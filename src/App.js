
import './App.css';
import { Route, Routes } from "react-router";
import { BrowserRouter, Router , Outlet , useParams  }from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/dashboard';

import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'

import CreateProject from './components/projects/CreateProject';
import Projectdetails from './components/projects/Projectdetails'
 
function App() {
const params = useParams();

  const Header = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  return (
    
    <BrowserRouter> 
       <Routes>
        <Route path ="/" element= {<Header/> }>
          <Route exact path='/' element={<Dashboard />} />   
          <Route path = "/project/:id" element={<Projectdetails/> }/>
          <Route path = "/hello"/>

          {/* Authenticate user by promting sign in */}
          <Route path = "/Signin" element = {<Signin/>}/>
          <Route path = "/Signup" element= {<Signup/>}/>
          {/* <Route element = {<Signin/>} />
          <Route element = {<Signup/>} /> */}
          <Route path = "/Createpost" element= {<CreateProject/>}/>
          {/* <Route element = {<Logout/>} /> */}
         
          
        </Route>   
      </Routes>

    </BrowserRouter>
      );
}

export default App;
