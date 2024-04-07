import axios from 'axios';

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const redirectUri = 'http://localhost:3000/logged/'

const headers = {
  'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
  'Content-Type': 'application/x-www-form-urlencoded',
};


const getAccessToken = async (code) => {
  const data = {
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirectUri
  };

  console.log(headers, data);

  try {
    const response = await axios.post("https://accounts.spotify.com/api/token", new URLSearchParams(data), { headers });
    if (response.status !== 200) {
      return "There was an error in retrieving your access token to Spotify's Api. Please try agian in a moment."
    } else {
      console.log(response);
      return response.data;
    }
  } catch (error) {
    console.log("Error fetching access token:", error.message);
  }
};

export default getAccessToken;
