import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useRef } from 'react';
import { apiClient } from '../../../services/api-client.js';


export const Login = ({sn}) => {
    const [message, setMessage] = useState('');
    const emailRef = useRef();
    const pwdRef = useRef();
    let getResponse;
    const doLogin = async ()=>{
        const userInfo = {
            'email': emailRef.current.value,
            'password':pwdRef.current.value
        }
        try{
            const response = await apiClient.post(process.env.REACT_APP_LOGIN, userInfo);
            console.log(userInfo);
            console.log(response);
            getResponse=response.data.message;
            setMessage(response.data.message);
        }
        catch(err){
          setMessage('Login Fails');
          console.log('Error Login ', err);
        }
        if(getResponse!=='Invalid userid or password'){
          sn(true);
        }
    }
  return (
    <Container>
      <center>
    <p id='mes'>{message}</p>
    <br/>
    <TextField sx={{ input: { color: 'white' } }} inputRef = {emailRef} id="outlined-basic" placeholder="Email" variant="outlined" />
    <br/>
    <TextField sx={{ input: { color: 'white' } }} inputRef = {pwdRef} id="outlined-basic" type="password" placeholder="Password" variant="outlined" />
    <br/><br/>

    <Button type="submit" onClick={doLogin} variant="contained">Login</Button>
    </center>
    </Container>
  )
}
/*<TextField inputRef = {emailRef} id="outlined-basic" label="Email" variant="outlined" />
    <TextField inputRef = {pwdRef} id="outlined-basic" type="password" label="Password" variant="outlined" />
    <Button onMouseDown={goSearch} onClick={doLogin} variant="contained">Login</Button>*/