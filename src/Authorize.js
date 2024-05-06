import getAccessToken from "./AccessToken";

const urlToFetch = 'https://accounts.spotify.com/authorize?';
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUrl = 'http://localhost:3000/logged/';

const login = () => {
    //Called on first visit to website
    const scopes = 'user-read-private user-read-email playlist-modify-public'
    
    let url = urlToFetch
    + "client_id=" + clientId
    + "&response_type=code"
    + "&redirect_uri=" + encodeURI(redirectUrl)
    + "&show_dialog=true"
    + `&scope=${scopes}`;
    window.location.assign(url);
}

const getToken = async () => {
    //Called when redirected from Spotify
    const params = new URLSearchParams(window.location.search);
    if (params.has('code')) {
        const authCode = params.get('code');
        const accessTokenResponse = await getAccessToken(authCode);
        if (typeof accessTokenResponse !== 'object') {
            console.log(accessTokenResponse);
        } else {
            console.log(accessTokenResponse);
            return accessTokenResponse.access_token;
        }
    } else {
        console.error('No Access code was found. Please reload the page and try allowing access agian.')
    }
}


export {login, getToken,};