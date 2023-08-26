import React, { useState } from 'react';
import { UserPage } from '../modules/user/pages/UserPage';
import { SearchPage } from './SearchPage';

export const FinalPage = () => {
    const [flags, setflags]= useState(false);
    const showMainPage=(flag)=>{
        setflags(flag);
    }
  return (<>
    {flags?<SearchPage/>:<UserPage sn={showMainPage}/>}
    </>
  );
}

