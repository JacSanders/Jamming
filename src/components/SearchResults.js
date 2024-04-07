import Tracklist from "./Tracklist";
import './styles/SearchResults.css';

const SearchResults = ({results, setPlaylist}) => {
    return (
        <div className="results-container">
            <h2>Results</h2>
            <hr />
            <Tracklist results={results} setPlaylist={setPlaylist} />
        </div>
    );
}
 
export default SearchResults;