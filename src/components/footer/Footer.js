import { Container, Typography,Box } from '@mui/material'
import React from 'react'
import LOGO from "../../assets/logo-white.svg"
import { Link } from 'react-router-dom'
function Footer() {
  const userId=localStorage.getItem("userId")
  const isLoggedIn=userId?true:false;
  return (
    <Box sx={{display:"flex",flexDirection:{xs:"column",md:"row"},backgroundColor:"#0F172A",color:"#F0F4F8",padding:"40px 30px",alignItems:"center"}}>
        <Container sx={{textAlign:"center"}}>
          <Link to={isLoggedIn===true?"/profile":"/"}>
          <img src={LOGO} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}  style={{height:"120px",width:"120px"}} />

          </Link>     
             </Container>
        <Container sx={{textAlign:"center"}}>
            <Typography sx={{marginBottom:"10px"}}>
              <Link to={userId?"/profile/aboutus":"/aboutus"} style={{textDecoration:'none',color:"inherit"}}>
              About Us
              </Link>
              </Typography>
            <Typography  sx={{marginBottom:"10px"}} style={{textDecoration:'none',color:"inherit"}}> <Link to={userId?"/profile/contactus":"/contactus"} style={{textDecoration:'none',color:"inherit"}}>Contact Us</Link></Typography>
            
            
        </Container>
        <Container sx={{textAlign:"center"}}>
        <Typography sx={{marginBottom:"10px"}}>
              <Link to={userId?"/profile/tnc":"/tnc"} style={{textDecoration:'none ',color:"inherit"}}>
              Terms And Conditions
              </Link>
              </Typography>
              <Typography sx={{marginBottom:"10px"}}>
              <Link to={userId?"/profile/privacy":"/privacy"} style={{textDecoration:'none',color:"inherit"}}>
              Privacy Policy
              </Link>
              </Typography>
        </Container>
    </Box>
  )
}

export default Footer