import React, { useState, useEffect } from "react";
import axios from 'axios';
import NewSongForm from "./Components/NewSongForm/NewSongForm";
import DisplaySongs from "./Components/DisplaySongs/DisplaySongs";
import { getByTitle } from "@testing-library/react";
import SearchBarTitle from "./Components/SearchBar/SearchBarTitle";


function App() {
    
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])


  //creates a POST request to add new song to the library
  async function createSong(prop){
    let response = await axios.post('http://localhost:8000/api/music/', prop);
    console.log(response.data);
  }
  //function to gather all songs in the music library. displayed via 'DisplaySongs' component
  async function getAllSongs(prop){
    let response = await axios.get('http://localhost:8000/api/music/');
    setSongs(response.data);
    console.log(response.data);
  };
  
  const filterByTitle = (searchTerm) => {
    let matchingSongs = songs.filter((song) => {
      if(song.title.toLowerCase().includes(searchTerm.toLowerCase())){
        return true;
      }
      else return false;
    });
    console.log(matchingSongs) 
  };


  return (
    <div>
      <h1>Music Library</h1>
      <SearchBarTitle filterByTitle={filterByTitle}/>
      <DisplaySongs parentEntries = {songs}/>
      <NewSongForm createSong={createSong}/>
    </div>
  )
}

export default App;
