import React, { useState } from 'react';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';

export const UserPage = ({sn}) => {
    const [flag , setFlags]=useState(false);
    const showRegister=(flag)=>{
        setFlags(flag);
    }
  return (
    <div className='container'>
        {flag?<RegisterPage fn={showRegister}/>:<LoginPage sn={sn} fn={showRegister}/>}
    </div>

  );
}
