import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import {getUser, getTracks} from "./SpotifyCall";
import Account from "./components/Account"
import './App.css';
import {login, getToken} from "./Authorize";


function App() {

  const [search, setSearch] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [results, setResults] = useState([]);
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState('');

  const handleLogout = () => {
    window.location.href = 'http://localhost:3000'
  }

  let currentUrl = window.location.href;

  useEffect(() => {
    console.log(currentUrl);
    let isLogged = false; // Variable to track if handleLogin has been called
  
    const handleLogin = async () => {
      if (!isLogged) { // Check if handleLogin has been called already
        isLogged = true; // Set isLogged to true to prevent subsequent calls
        const tokenResponse = await getToken();
        setToken(tokenResponse);
      }
    };
  
    if (currentUrl.includes('logged')) {
      handleLogin();
    } else {
      return;
    }
  }, [currentUrl]);
  
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     if (token) {
  //       const userResponseData = await getUser(token);
  //       setCurrentUser(userResponseData);
  //     }
  //   };
  
  //   fetchUserData();
  // }, [token]);
  
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
