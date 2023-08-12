import React from 'react'
import DownloadIcon from '@mui/icons-material/DownloadForOfflineRounded';
import { Grid, TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/FileCopyTwoTone';
import EditIcon from '@mui/icons-material/EditTwoTone';
import DeleteIcon from '@mui/icons-material/DeleteTwoTone';
import { useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { alertSliceActions } from '../../store/alertSlice';
function DataComponent({label,value,type,docId,handleDelete,url}) {
    const dispatch=useDispatch();
    const userId=localStorage.getItem("userId")
    const navigate = useNavigate();
    const handleClick=()=>{
        if(type==="files"){
            window.open(url)
        }else{
            navigator.clipboard.writeText(value)
            dispatch(alertSliceActions.fireTrue({flag:true,alertMessage:`Copied to Clipboard`}));
        }
    }
    const handleEditClick = (e)=>{
       navigate("/dataForm" , { state: { data: {label , value,type,docId,edit:true} } });
    }
    const handleDeleteClick=()=>{
     handleDelete(userId,type,docId,value)
    }
   
  return (
    <Grid  item xs={12} sm={6}>
    <TextField 
      
         sx={{boxShadow:"0px 1px 5px rgba(0,0,0,0.1)",backgroundColor:"white",color:"#B9C1D4 !important"}}
              id="outlined-read-only-input"
              label={label}
              defaultValue={value}
InputProps={{
readOnly:true,
endAdornment: (
    <div style={{display:"flex"}}>
<IconButton sx={{color:"#0F172A"}} onClick={handleEditClick}>
    <EditIcon docId={docId} />
</IconButton>
<IconButton sx={{color:"#0F172A"}} onClick={handleDeleteClick}>
    <DeleteIcon />
</IconButton>
<IconButton sx={{color:"#0F172A"}} onClick={handleClick}>
    {type==="files"?<DownloadIcon />:<ContentCopyIcon />}
</IconButton>
    </div>

),
}}
/>           
 </Grid>
  )
}

export default DataComponent