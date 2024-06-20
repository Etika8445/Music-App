import React from 'react'
import { Typography } from '@mui/material';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const Player = ({fn, song}) => {
  return (
    <div>
      <center>
        <div className="card" id="play">
          <img src={song.artworkUrl100} height={200} alt='img'/>
          <br/>
          <Typography fontFamily={'Helvetica'} fontSize={20} color={'#ffffff'} fontWeight={'bold'}>{song?.trackName} </Typography>
          <Typography color={'#ecebe8'} fontWeight={'light'} fontStyle={'italic'}>{song?.artistName}</Typography>
        </div>
        <br/>
        <br/>
        <audio controls>
          <source src={song?.previewUrl} type="audio/mp4"/>
        </audio>
        <br/>
        <br/>
        <button className="btn btn-success" onClick={()=>{fn(false, null);}}><ArrowBackIosNewIcon/></button>
      </center>
    </div>
   );
  
}

      
      
      
      
