import { useEffect, useState } from "react";
import DisplaySongs from "../DisplaySongs/DisplaySongs";

const SearchBarTitle = (props) => {
    const [searchTitle, setSearchTitle] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log(searchTitle);
        props.filterByTitle(searchTitle);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} type='text' placeholder='search by Title...'></input>
                <button type='submit'>Search</button>
            </form>
        </div>
    )

}

export default SearchBarTitle