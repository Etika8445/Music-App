import React from 'react'
import { Song } from './Song'

export const Songs=({fn,allsongs})=>{
  return (
      <>
      <br/>
      <br/>
   
      <h2 style={{fontFamily:"Helvetica", color:"#ffffff"}}>Start listening</h2>
      {allsongs.map((currentSong, index)=><Song fn={fn} key={index} song={currentSong}/>)}
      </>
  );
}





/*export const Songs = ({fn,allsongs}) => {
  return (
    <>
    {allsongs.map((currentSong,index)=><Song fn={fn} key={index} song={currentSong}/>)}
    </>
  )
}*/
