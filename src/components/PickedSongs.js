import Track from "./Track";

const PickedSongs = ({playlist, setPlaylist, track}) => {


    const removeSong = (trackId) => {
        setPlaylist((prev) => (
            prev.filter((song) => song.id !== trackId)
        ))
    }

    if (playlist.length !== 0) {
        return (
            <div className="picked-songs">
                {playlist.map((track) => (
                    <div className="song" key={track.id}>
                        <Track track={track} />
                        <button
                            type='button'
                            className="toggle-button"
                            onClick={() => removeSong(track.id)}
                        >x</button>
                    </div>
                ))}
            </div>
        )
    } else {
        return (
            <div className="empty-playlist">
                <h2>Add songs to your Playlist!</h2>
            </div>
        )
    }
}
 
export default PickedSongs;