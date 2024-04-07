import './styles/Track.css';

const Track = ({ track }) => {
    const artists = track.artists.map(artist => artist.name).join(', ');
    return (
        <div className="track">
            <h3>{track.name}</h3>
            <p>{artists} - {track.album.name}</p>
        </div>
    );
};
 
export default Track;