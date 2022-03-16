import { useEffect, useState } from "react";
import DisplaySongs from "../DisplaySongs/DisplaySongs";

const SearchBarArtist = (props) => {
    const [searchArtist, setSearchArtist] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log(searchArtist);
        props.filterbyArtist(searchArtist);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={searchArtist} onChange={(e) => setSearchArtist(e.target.value)} type='text' placeholder='search by Artist...'></input>
                <button type='submit'>Search</button>
            </form>
        </div>
    )

}

export default SearchBarArtist