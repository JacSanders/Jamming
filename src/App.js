import { useState, useEffect, useRef} from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import {getTracks, getUser} from "./SpotifyCall";
import Account from "./components/Account"
import './App.css';
import {login, getToken} from "./Authorize";


function App() {

  const [search, setSearch] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [results, setResults] = useState([]);
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState('');
  const logRef = useRef(0);

  const handleLogout = () => {
    window.location.href = 'http://localhost:3000'
  }

  let currentUrl = window.location.href;

  useEffect(() => {
    const handleLogin = async () => {
      if (logRef.current === 0) { // Check if handleLogin has been called already
        logRef.current++;
        const tokenResponse = await getToken();
        setToken(tokenResponse);
      }
    };
  
    if (currentUrl.includes('logged')) {
      handleLogin();
    }
  }, [currentUrl]);

  useEffect(() => {
    const handleNewUser = async () => {
      const newUser = await getUser();
      setCurrentUser(newUser);
    }

    if (token) {
      handleNewUser();
    }
  }, [token])
  
  
  if (currentUrl.includes('logged')) {
    return (
      <div className="App">
        <header>
          <h1>JAMMIN</h1>
          <Account currentUser={currentUser} />
          <SearchBar search={search} setSearch={setSearch} setResults={setResults} getTracks={getTracks} token={token}/>
        </header>
        <main>
          <SearchResults results={results} setPlaylist={setPlaylist} />
          <Playlist playlist={playlist} setPlaylist={setPlaylist} results={results} />
        </main>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header>
          <h1>JAMMIN</h1>
        </header>
        <div className="loggin">
          <h2>Welcome to the Playlist Creater!</h2>
          <p>Please login on Spotify to begin!</p>
          <button type='button' onClick={login}>Log in</button>
        </div>
      </div>
      
    )
  }

}

export default App;
