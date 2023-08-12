import React from 'react'
import Navbar from './Navbar'
import { Typography,Container } from '@mui/material';
import Footer from './footer/Footer';
function LandingPage() {
  return (
    <div className='container'>
            <Navbar isLoggedIn={false}/>
            <Container sx={{display:'flex', marginTop:"50px",flexDirection:'column',justifyContent:"center",alignItems:'center',textAlign:'center',minHeight:"80vh",backgroundColor:"white",borderTopRightRadius:"300px",borderTopLeftRadius:"300px",boxShadow:"-3px 5px 10px 5px rgba(0,0,0,0.1)"}}>
             <ul style={{padding:"40px",marginTop:"100px"}}>
             <li style={{textAlign:"left"}}> <Typography  fontSize={20} sx={{color:"#36365F",display:"inline"}}>
                A single storage space for files links and details you use frequently for completing a job application, editing your resume, sending your portfolio links and much more....
                </Typography></li>
                <li style={{marginTop:"30px",textAlign:"left"}}><Typography fontSize={20} sx={{color:'#3C3D5C',display:"inline"}}>
                Sign In using email and Password or the good old Google auth.
                </Typography></li>
                <li style={{marginTop:"30px",textAlign:"left"}}><Typography fontSize={20} sx={{color:'#3C3D5C',display:"inline"}}>
                Edit Your Existing Details, Add New Details ,Links and Files like Resume, Identification Docs and much more with InfoLocker!!!
                </Typography></li>
               <li style={{marginTop:"30px",textAlign:"left"}}> <Typography fontSize={20} sx={{color:'#3C3D5C',display:"inline"}}>
                Copy Your Details in a jiffy with a Single Click and download files whenever necessary. Beat The Hassle, Use InfoLocker.
                </Typography></li>
             </ul>
            </Container>
        <Footer />
    </div>
  )
}

export default LandingPage