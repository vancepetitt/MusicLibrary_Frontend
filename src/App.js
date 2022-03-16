import React, { useState, useEffect } from "react";
import axios from 'axios';
import NewSongForm from "./Components/NewSongForm/NewSongForm";
import DisplaySongs from "./Components/DisplaySongs/DisplaySongs";


function App() {
    
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function createSong(prop){
    let response = await axios.post('http://localhost:8000/api/music/', prop);
    console.log(response.data);
  }
  
  async function getAllSongs(prop){
    let response = await axios.get('http://localhost:8000/api/music/');
    setSongs(response.data);
    console.log(response.data);
  };
  
  return (
    <div>
      <h1>Music Library</h1>
      <NewSongForm createSong={createSong}/>
      <DisplaySongs parentEntries = {songs}/>
    </div>
  );
}

export default App;
