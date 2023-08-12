import * as React from 'react';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from "../assets/logo.svg"
import { landingPageNavbarData, loginNavbarData } from '../utils/data';


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [pages,setPages]=useState([]);
  const userId=localStorage.getItem("userId")
  const isLoggedIn=userId?true:false;
React.useEffect(()=>{
  userId?setPages(loginNavbarData):setPages(landingPageNavbarData);
},[])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick=()=>{
    localStorage.clear()
  }

  return (
    <AppBar position="static" sx={{background:'none',boxShadow:'none'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{justifyContent:"space-between"}} >
          <Link to={pages.length!==0 && pages[0].link}>
          <img src={Logo} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} style={{height:"120px",width:"120px"}}/>
          </Link>
          <Box sx={{  display: { xs: 'block', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color:"black"}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem  key={page.name} onClick={handleCloseNavMenu} >
                  <Link to={page.link} style={{textDecoration:'none',color:"inherit"}}>
                  <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
                              <MenuItem  onClick={handleCloseNavMenu} >
                  <Typography textAlign="center">{isLoggedIn?"Log Out":"Log In"}</Typography>
                </MenuItem>
                        {/* <Box sx={{ flexGrow: 0 }}>
            <Button onClick={handleClick} variant='outlined' sx={{color:'#9E465B',borderColor:'#9E465B',letterSpacing:2}}>
              <Link style={{textDecoration:'none',color:'inherit'}} to='/login'>{isLoggedIn?"Log Out":"Log In"}</Link>
            </Button>
          </Box> */}
            </Menu>
          </Box>
          {/* <img src={Logo} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} style={{height:"120px",width:"120px"}}/> */}
          <Box sx={{ flexGrow: 1, display:{xs:'none',md:'flex'},justifyContent:'center',fontFamily: 'Roboto' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#6F6C84', display: 'block' ,marginLeft:6,letterSpacing:2}}
              >
                <Link to={page.link} style={{textDecoration:'none',color:"inherit"}}>
                {page.name}
                </Link>
                
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none !important', md: 'block !important' } ,flexGrow: 0 }}>
            <Button onClick={handleClick} variant='contained' sx={{width:"100%" , margin:'auto' , backgroundColor:"#AF7EEB !important",color:"white",letterSpacing:2}}>
              <Link style={{textDecoration:'none',color:'inherit'}} to='/login'>{isLoggedIn?"Log Out":"Log In"}</Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
