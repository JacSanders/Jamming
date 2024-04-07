import Track from "./Track";
import './styles/Tracklist.css';

const Tracklist = ({results, setPlaylist}) => {

    const addSong = (resultId) => {
        setPlaylist((prev) => {
            // results.forEach(result => {
            //     console.log(result.name);
            // });
            const selectedSong = results.find((result) => result.id === resultId);
            return [selectedSong, ...prev];
        })
        }

    return (
        <div className="song-list">
            {results.map((result) => (
                <div className="song" key={result.id}>
                    <Track track={result} />
                    <button
                        type='button'
                        className='toggle-button'
                        onClick={() => addSong(result.id)}
                    >+</button>
                </div>
            ))}
        </div>
    );
}
 
export default Tracklist;