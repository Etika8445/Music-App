import React from 'react'
import { Login } from '../components/Login'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
export const LoginPage = ({sn,fn}) => {
    const goToRegistration=()=>{
        fn(true);
    }
  return (
    <>
    <center>
    <Typography variant='h4' style={{color:"white"}}>LOGIN</Typography>
    <Login sn={sn}/>
    <br/>
    <br/>
    <Button onClick={goToRegistration} variant="contained">create account</Button>
    </center>
    </>
  )
}
