
import React from 'react'
import Navbar from './Navbar'
import { Typography,Container } from '@mui/material';
import Footer from './footer/Footer';
function AboutUs() {
  return (
    <div className='container'>
            <Navbar isLoggedIn={false}/>
            <Container sx={{display:'flex',marginTop:"50px",flexDirection:'column',justifyContent:"center",alignItems:'center',textAlign:'center',minHeight:"80vh",backgroundColor:"white",borderTopRightRadius:"300px",borderTopLeftRadius:"300px",boxShadow:"-3px 5px 10px 5px rgba(0,0,0,0.1)"}}>
                <Typography  fontSize={40} sx={{color:"#36365F"}}>
                    We're A group of Passionate Developers,
                </Typography>

                <Typography fontSize={30} sx={{marginTop:"30px",color:'#3C3D5C'}}>
                Trying to create projects that benefit the Society.
                </Typography>

            </Container>
        <Footer />
    </div>
  )
}

export default AboutUs