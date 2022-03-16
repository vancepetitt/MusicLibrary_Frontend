import React, {useState, useEffect} from "react";

const NewSongForm = (props) => {

    const [title, setTitle] = useState(''); //hook functions to use in creation of the form function
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    function addNewSong(event) {
        event.preventDefault(); //prevents page refresh.
        let song = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre,
        };
        props.createSong(song);
        console.log(song);
        // setTitle(''); //allows the form to clear text that had been entered
        // setArtist('');
        // setAlbum('');
        // setReleaseDate('');
        // setGenre('');
    }

    return ( 
        <form onSubmit={addNewSong}>
            <h2>Add Song to Library</h2>
            <label>Title: </label> {/*labels the input box */}
            <br></br>
            <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}/>
            <br></br>
            <label>Artist: </label>
            <br></br>
            <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            <br></br>
            <label>Album: </label>
            <br></br>
            <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            <br></br>
            <label>Release Date: </label>
            <br></br>
            <input type='date' value={release_date} onChange={(event) => setReleaseDate(event.target.value)}/>
            <br></br>
            <label>Genre: </label>
            <br></br>
            <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)}/>
            <br></br>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default NewSongForm