import React, { useRef } from 'react'
//import SearchIcon from '@mui/icons-material/Search';
export const Search=({fn})=>{
    const artist=useRef();
   
    return (
        <>
        <h2 style={{fontFamily:"Helvetica", color:"#ffffff", fontWeight:'bolder'}}>Search</h2>
       
        <center>
           
        <div className="container" id='searchRow'>
        <input ref={artist} type='text' className="form-control me-2" placeholder="Artists, songs, or podcasts" />
     
        <button className="btn btn-success " onClick={()=>{
            fn(artist.current.value);
        }}> Search</button>
       
        </div>
        </center>
        </>
       
        );
}










/*export const Search = ({fn}) => {
    const artist=useRef();
  return (
    <>
    <label>Artist Name</label>
    <input ref={artist} type='text' className='form-control' placeholder='search here'/>
    <button className='btn btn-success' onClick={()=>{
        fn(artist.current.value);
    }}>Search It</button>
    </>
  );
}*/
