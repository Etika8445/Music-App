import React from 'react'
import { Register } from '../components/Register'
import Button from '@mui/material/Button';
export const RegisterPage = ({fn}) => {
  return (
    <div>
    <Register/>
    <br/>
    <br/>
    <Button className='btn btn-success' onClick={()=>{fn(false);}} variant="contained">Login now</Button>
    </div>
  )
}

