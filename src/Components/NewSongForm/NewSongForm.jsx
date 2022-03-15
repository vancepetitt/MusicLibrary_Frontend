import React, {useState, useEffect} from "react";

const NewSongForm = (props) => {

    const [title, setTitle] = useState(''); //hook functions to use in creation of the form function
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    //listener function to take the form data and create a new song when even (submit). Listing the hook variables gathers the input data for use.
    function addNewSong(event) {
        event.preventDefault(); //prevents page refresh.
        let song = {
            title: title,
            artist: artist,
            album: album,
            releaseDate: releaseDate,
            genre: genre,
        };
        props.addNewSong(event);
        console.log(song);
        setTitle(''); //allows the form to clear text that had been entered
        setArtist('');
        setAlbum('');
        setReleaseDate('');
        setGenre('');
    }

    return ( 
        <form onSubmit={addNewSong}>
            <label for='title'>Title: </label> {/*labels the input box */}
            <br></br>
            <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}/>
            <br></br>
            <label for='postText'>Artist: </label>
            <br></br>
            <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            <br></br>
            <label for='title'>Album: </label>
            <br></br>
            <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            <br></br>
            <label for='title'>Release Date: </label>
            <br></br>
            <input type='date' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
            <br></br>
            <label for='title'>Genre: </label>
            <br></br>
            <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)}/>
            <br></br>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default NewSongForm