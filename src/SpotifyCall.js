import axios from 'axios';

const getUser = async (token) => {
    const baseURL = 'https://api.spotify.com/v1/me';
    const header = {
        Authorization: `Bearer ${token}`
    };

    try {
        const response = await axios.get(baseURL, {
            headers: header
        });
        return response.data;
    } catch (err) {
        console.log(err.message);
    }
}

const getTracks = async (query, token) => {
    const baseURL = `https://api.spotify.com/v1/search`;
    const params = {
        q: query,
        type: 'track',
        limit: 10
    };
    const header = {
        Authorization: `Bearer ${token}`
    };

    try {
        const response = await axios.get(baseURL, {
            params: params,
            headers: header
        });
        return response.data;
    } catch (err) {
        throw err;
    }
}

export {getUser, getTracks};