import React, { useState } from "react";
import NewSongForm from "./Components/NewSongForm/NewSongForm";


function App() {
    
  const [songs, setSongs] = useState([{title:'', artist:'', album:'', releaseDate:'', genre:''}])
  
  //the following function allows the child class to pass information up to the parent class 
  function addNewSong(song) {
    let tempSongs = [song, ...songs]
    setSongs(tempSongs)
  }
  
  
  
  return (
  <div>
    <h1>Music Library</h1>
    <NewSongForm addNewSongProperty={addNewSong}/>
  </div>
  );
}

export default App;
