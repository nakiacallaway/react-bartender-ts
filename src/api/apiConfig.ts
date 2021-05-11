import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    headers: {
        'Content-type': 'application/json',
    }
});

export default instance;