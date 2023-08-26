import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { apiClient } from '../../../services/api-client.js';
export const Register = () => {
    const [message, setMessage] = useState('');
    const emailRef = useRef();
    const pwdRef = useRef();
    const nameRef = useRef();
    const phoneRef = useRef();
    const doRegister = async ()=>{
        const userInfo = {
            'email': emailRef.current.value,
            'password': pwdRef.current.value,
            'name': nameRef.current.value,
            'phone': phoneRef.current.value,
        }
        try{
        const response = await apiClient.post(process.env.REACT_APP_REGISTER, userInfo);
        setMessage(response.data.message);
        console.log("register is ",response);
        }
        catch(err){
            setMessage('Register Fail...');
            console.log('Error is ', err);
        }
    }
  return (
   <Container>
    <center>
    <h1 style={{color:"white"}}>User Registration</h1>
    <p id='mess' >{message}</p>
    <br/>
    <TextField width='50px' sx={{ input: { color: 'white' } }} inputRef = {nameRef} id="outlined-basic" placeholder="Name" variant="outlined" />
    <br/>
    <TextField  sx={{ input: { color: 'white' } }} inputRef = {emailRef} id="outlined-basic" placeholder="Email" variant="outlined" />
    <br/>
    <TextField sx={{ input: { color: 'white' } }} inputRef = {pwdRef} id="outlined-basic" type="password" placeholder="Password" variant="outlined" />
    <br/>
   
    <TextField sx={{ input: { color: 'white' } }} inputRef = {phoneRef} id="outlined-basic" placeholder="Phone" variant="outlined" />
    <br/> <br/>
    <Button onClick={doRegister} variant="contained">Register</Button>
    </center>

   </Container>
  )
}
/*<TextField inputRef = {emailRef} id="outlined-basic" label="Email" variant="outlined" />
    <TextField inputRef = {pwdRef} id="outlined-basic" type="password" label="Password" variant="outlined" />
    <TextField inputRef = {nameRef} id="outlined-basic" label="Name" variant="outlined" />
    <TextField inputRef = {phoneRef} id="outlined-basic" label="Phone" variant="outlined" />
    <Button onClick={doRegister} variant="contained">Register</Button>*/