import { Button, Grid, Typography } from '@mui/material'
import {useNavigate} from 'react-router-dom';
import React from 'react'

function Header({type}) {
  const navigate = useNavigate();
const handleAdd = ()=>{
  navigate("/dataForm" , {state:{data:{label:'' , value:'' ,type,edit:false}}});
}


  return (
    <Grid sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Typography fontSize={24} sx={{letterSpacing:2,color:"#36365F !important"}}>{type.substr(0,1).toUpperCase() + type.substr(1)}</Typography>
        <Button variant='contained' sx={{width:"150px",backgroundColor:"#AF7EEB !important"}}  onClick={handleAdd}>+ Add {type}</Button>
    </Grid>
  )
}

export default Header