import React from 'react'
import './login.css'
import LoginForm from './LoginForm'
import BackgroundWrapper from '../backgroundWrapper/BackgroundWrapper'
import { Grid, Box , Container  } from '@mui/material';
import Navbar from '../Navbar';
import Footer from '../footer/Footer';

function Login() {
  console.log("Login is Redirected");
  return (
   <div>
    <Navbar />
    <div  style={{minHeight:"90vh",marginTop:"40px"}}>
      <LoginForm  />
    </div>
  <Footer />
    </div>
    
   
  )
}

export default Login