import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { alertSliceActions } from '../../store/alertSlice';
export default function AlertComponent() {
  const disaptch=useDispatch()
const alertData=useSelector((state)=>state.alertData.data)
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    // setOpen(false)
    disaptch(alertSliceActions.fireFalse({flag:false,alertMessage:""}))
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={alertData.flag}
        autoHideDuration={6000}
        onClose={handleClose}
        message={alertData.alertMessage}
        action={action}
      />
    </div>
  );
}
