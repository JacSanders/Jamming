import { useState } from 'react';
import PickedSongs from './PickedSongs';
import Track from './Track';
import './styles/Playlist.css';

const Playlist = ({playlist, setPlaylist, results}) => {

    const [playlistName, setPlaylistName] = useState('');

    const handleChange = ({target}) => {
        setPlaylistName(target.value);
    }

    const addPlaylist = (event) => {
        event.preventDefault();
        if (!playlistName) {
            alert('A name is required for your playlist.');
        } else {
            const newPlaylist = playlist.map((track) => track.uri);
            console.log(`${playlistName} -- ${newPlaylist}`);
        }
    }


    return (
        <form onSubmit={addPlaylist} className="playlist">
            <input type="text" onChange={handleChange} value={playlistName} className='playlist-name' placeholder='Playlist Name'/>
            <PickedSongs playlist={playlist} setPlaylist={setPlaylist} track={Track} results={results} />
            <button type='submit' className='create-playlist'>Add playlist to Spotify</button>
        </form>
    );
}
 
export default Playlist;