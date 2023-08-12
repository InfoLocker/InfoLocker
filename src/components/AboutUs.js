// import { Container, Typography } from '@mui/material'
// import React from 'react'
// import Navbar from './Navbar'

// function AboutUs() {
//   return (
//     <Container>
//         <Navbar />
//         <Typography>We're A group of Passionate Developers Trying to create projects tht benefit the society.</Typography>
//         <Typography>Rutwik Waghmare:- Github</Typography>
//         <Typography>Shubham Rajput:- Github</Typography>
//     </Container>
//   )
// }

// export default AboutUs
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
                {/* <Typography fontSize={40} sx={{color:"#36365F"}}>
                    Trying to create projects that benefit the Society.
                </Typography> */}
                <Typography fontSize={30} sx={{marginTop:"30px",color:'#3C3D5C'}}>
                Trying to create projects that benefit the Society.
                </Typography>
                {/* <Typography fontSize={20} sx={{color:'#3C3D5C'}}>
                   with InfoLocker.
                </Typography> */}
            </Container>
        {/* <img src={background} style={{position:"absolute",right:-40,top:-80,height:"140vh"}} /> */}
        <Footer />
    </div>
  )
}

export default AboutUs