import React from 'react'
import Navbar from './Navbar'
import { Typography,Container,Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './footer/Footer';
function LandingPage() {
  const navigate=useNavigate()
  return (
    <div className='container'>
            <Navbar isLoggedIn={false}/>
            <Container sx={{display:'flex',marginTop:"50px",flexDirection:'column',justifyContent:"center",alignItems:'center',textAlign:'center',minHeight:"80vh",backgroundColor:"white",borderTopRightRadius:"300px",borderTopLeftRadius:"300px",boxShadow:"-3px 5px 10px 5px rgba(0,0,0,0.1)"}}>
                <Typography  fontSize={40} sx={{color:"#36365F"}}>
                    Beat The Hassle,
                </Typography>
                <Typography fontSize={40} sx={{color:"#36365F"}}>
                    All Your Information In a Single Place.
                </Typography>
                <Typography fontSize={20} sx={{marginTop:"30px",color:'#3C3D5C'}}>
                    Save all your documents,details and links in a single place 
                </Typography>
                <Typography fontSize={20} sx={{color:'#3C3D5C'}}>
                   with InfoLocker.
                </Typography>
                <Button onClick={()=>{navigate("/login")}}  variant='outlined' sx={{width:"35%",marginTop:6, backgroundColor:"#AF7EEB !important",borderColor:"#AF7EEB",color:"white",letterSpacing:2}}>
             Get Started
            </Button>
            </Container>
        {/* <img src={background} style={{position:"absolute",right:-40,top:-80,height:"140vh"}} /> */}
        <Footer />
    </div>
  )
}

export default LandingPage