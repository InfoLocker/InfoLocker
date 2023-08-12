import * as React from 'react';
import {useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography , Grid, Container } from '@mui/material';
import Navbar from "../Navbar"
import { postUserEnteredData, uploadFileData , postMessage } from '../../asyncFunctions';
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import AlertComponent from '../alert/AlertComponent';
import { alertSliceActions } from '../../store/alertSlice';
import Loader from '../loader/Loader';
import Footer from '../footer/Footer';

export default function ContactUs() {
    const dispatch=useDispatch()
  const [nameError,setNameError]=useState("")
  const [emailError,setEmailError]=useState("")
  const [messageError , setMessageError] = useState("")
  const [isLoading,setIsLoading]=useState(false)


const receivedData = {label:"label" , value:"value"};
const [nameData , setNameData] = useState("");
const [emailData , setEmailData] = useState("");
const [messageData , setMessageData] = useState("")

const handleClick=async ()=>{
  if(!nameData){
    setNameError("Please enter valid name")
    return;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailData.match(emailPattern)) {
    setEmailError('Invalid email address');
    return;
  }
    if(!messageData)
    {
        setMessageError("Please enter valid message");
        return;
    }
    postMessage(nameData,emailData,messageData)
  
  const messageString="Message Sent Successfully";
 
  dispatch(alertSliceActions.fireTrue({flag:true,alertMessage:messageString}));
  setNameData("");
  setEmailData("");
  setMessageData("");
  
 
}

  return (
    <div>
         <div style={{minHeight:"100vh"}}>
    {isLoading?<Loader />:  <div>
    <Navbar isLoggedIn={true}/>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Container
    component="form"
    sx={{
      width:{xs:"100%",md:"50%"},
      boxShadow:"1px 2px 8px rgba(0,0,0,0.4)",
      paddingTop:4,
      marginTop:6,
      display:'flex',
      flexDirection:'column',
      backgroundColor:"white",
      padding:"30px 0",
      textAlign:'center' ,
      zIndex:1 , 
     
     
    }}
    noValidate
    autoComplete="off"
  >
    <Typography variant='h4' sx={{mt:2  , zIndex:1}}>Contact-Us</Typography>
   
    

    <Grid container > 
    <Grid item xs={10} md={7} sx={{  width: '100%', margin: 'auto', mt: 2, mb: 2  }}>

      <TextField
      helperText={nameError}
        onChange={(e)=>{setNameData(e.target.value)
        
        }}
        label="Name"
        variant="outlined"
        sx={{width:'100%' }}
        value={nameData}
      />
    </Grid>
  </Grid>

 <Grid container>
    <Grid item xs={10} md={7}  sx={{ width: '100%', margin: 'auto', mt: 2, mb: 2 }}>
      <TextField
        onChange={(e)=>{setEmailData(e.target.value)}}
        helperText={emailError}
        label="Email"
        variant="outlined"
        sx={{width:'100%' }}
        value = {emailData}
      />
    </Grid>
  </Grid>
  <Grid container>
    <Grid item xs={10} md={7}  sx={{ width: '100%', margin: 'auto', mt: 2, mb: 2 }}>
      <TextField
      helperText={messageError}
     rows={5}
     multiline
        onChange={(e)=>{setMessageData(e.target.value)}}
        label="Message"
        variant="outlined"
        sx={{width:'100%' }}
        value = {messageData}
      />
    </Grid>
  </Grid>
 

  <Grid container>
    <Grid item xs={10} md={7}  sx={{ width: '100%', margin: 'auto', mt: 2, mb: 2 }}>
    <Button onClick={handleClick} variant='contained' sx={{width:"100%" , margin:'auto' ,  backgroundColor:"#AF7EEB !important",color:"white"  }} >Send Message</Button>
    </Grid>
  </Grid>

  </Container>
    </div>

  </div>}
  </div>

  <AlertComponent />

<Footer />
    </div>

  );
}
