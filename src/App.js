import React, { useState, useEffect } from "react";
import axios from 'axios';
import NewSongForm from "./Components/NewSongForm/NewSongForm";
import GetAllSongs from "./Components/GetAllSongs/GetAllSongs";


function App() {
    
  const [songs, setSongs] = useState([]);
  //{title:'', artist:'', album:'', releaseDate:'', genre:''}

  useEffect(() => {
    getAllSongs();
  }, [])

  async function addNewSong(prop){
    let response = await axios.post('http://127.0.0.1:8000/api/music/', prop);
    console.log(response.data);
    }
  
  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
    console.log(response.data);
  };
  
  return (
    <div>
      <h1>Music Library</h1>
      <NewSongForm addNewSong={addNewSong}/>
    </div>
  );
}

export default App;
