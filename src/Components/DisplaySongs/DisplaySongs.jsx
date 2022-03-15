import React, {useState, useEffect} from 'react';

const DisplaySongs = (props) => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>    
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {props.ParentEntries.map((entry) => {
                        return(
                            <tr>
                                <td>{entry.title}</td>
                                <td>{entry.artist}</td>
                                <td>{entry.album}</td>
                                <td>{entry.releaseDate}</td>
                                <td>{entry.genre}</td>
                            </tr>
                        )
                        })}
                </tbody>
            </table>
        </div>
    );
}

export default DisplaySongs