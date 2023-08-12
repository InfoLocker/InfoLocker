import React from 'react'
import './login.css'
import LoginForm from './LoginForm'
import Navbar from '../Navbar';
import Footer from '../footer/Footer';

function Login() {
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