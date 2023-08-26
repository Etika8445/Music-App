import React, { useEffect, useState } from 'react'
import { Search } from '../components/Search'
import { Songs } from '../components/Songs';
import { getSongs } from '../services/api-client';
import { Player } from '../components/Player';
import HeadphonesIcon from '@mui/icons-material/Headphones';
export const SearchPage =  () => {
    const [allSongs,setSongs]= useState([]);
    const[flag, setFlag]=useState(false);
    const[song, setPlayerSong]=useState(null);
    const loadSongs=async ()=>{
        setSongs(await getSongs('Latest Songs')); 
    }
    useEffect(()=>{
       loadSongs(); 
    },[])
    const togglePlayer=(flag, songarg)=>{
        setPlayerSong(songarg);
        setFlag(flag);
    }
    const getArtistName= async (artistName)=>{
        console.log("rec artist name",artistName);
        setSongs(await getSongs(artistName));
    }
    const jsx=<>
    <Search fn={getArtistName}/>
    <Songs fn={togglePlayer} allsongs={allSongs}/>
    </>
  return (
    <div className='container' style={{backgroundColor:'#000000'}}>
        <h1 className='alert alert-success text-center'><HeadphonesIcon sx={{color:'#1db954', fontSize:40}}/>JukeBops</h1>
    {flag?<Player fn={togglePlayer} song={song}/>:jsx}
    </div>
  );
}

