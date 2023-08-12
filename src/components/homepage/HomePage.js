import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { Box, Grid } from '@mui/material'
import Header from './Header'
import DataComponent from './DataComponent';
import { useDispatch } from 'react-redux';
import { deleteData, getUserData } from '../../asyncFunctions';
import AlertComponent from '../alert/AlertComponent';
import { alertSliceActions } from '../../store/alertSlice';
import Loader from '../loader/Loader';
import Footer from '../footer/Footer';

function HomePage() {
  const [isLoading,setIsLoading]=useState(false)
  const dispatch=useDispatch()
const [detailsData,setDetailsData]=useState([])
const [linksData,setLinksData]=useState([])
const [filesData,setFilesData]=useState([])
  const userId=localStorage.getItem("userId")

  const getData=async()=>{
    const resultObject= await getUserData(userId);
    setLinksData(resultObject.links)
    setDetailsData(resultObject.details)
    setFilesData(resultObject.files)
  }
   const handleDelete=async (uid,type,docId,value)=>{
     deleteData(uid,type,docId,value);
     dispatch(alertSliceActions.fireTrue({flag:true,alertMessage:` ${type.substring(0,type.length-1).toUpperCase()} Deleted Successfully`}))
     getData();
   }
  useEffect( ()=>{
    setIsLoading(true)
 getData()
 setIsLoading(false)
  },[])
  return (
    <div>
      {isLoading?<Loader />:
    <div style={{minHeight:"100vh"}}>
        <Navbar isLoggedIn={true}/>
        <div style={{padding:"30px",display:"flex",justifyContent:"center"}} >
        <Box sx={{background:'none',width:{sx:"100%",md:"60%"},boxShadow:"1px 2px 8px rgba(0,0,0,0.4)",padding:4,backgroundColor:"#ffffff",borderRadius:"8px"}}>
          <Grid>
            <Header type="details"/>
            <Grid container spacing={2} sx={{marginTop:3}}>
              {detailsData.length>0 ?detailsData.map((dataa)=>{
                    return(
                    <DataComponent label={dataa.label} value={dataa.value} type="details" docId={dataa.docId} handleDelete={handleDelete}/>
                   ); }
              ):<div>No Details at the moment</div>}
            </Grid>
            </Grid>
          <Grid sx={{marginTop:5,marginBottom:5}}>
          <Header type="links" />
          <Grid container spacing={2} sx={{marginTop:3}}>
          {linksData.length>0 ? linksData.map((dataa)=>{
                    return(
                    <DataComponent  label={dataa.label} handleDelete={handleDelete} value={dataa.value} type="links" docId={dataa.docId} />
                   ); }
              ):<div>No links at the moment</div>}
            </Grid>
          </Grid>
          <Grid>
          <Header type="files" />
          <Grid container spacing={2} sx={{marginTop:3}}>
          {filesData.length>0 ? filesData.map((dataa)=>{
                    return(
                    <DataComponent label={dataa.label} handleDelete={handleDelete} value={dataa.value} url={dataa.url} type="files" docId={dataa.docId} />
                   ); }
              ):<div>No Files at the moment</div>}
            </Grid>
          </Grid>
        </Box>
        </div>
        <AlertComponent />
    </div>}
    <Footer />
    </div>
  )
}

export default HomePage