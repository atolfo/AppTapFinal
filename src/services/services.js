import axios from 'axios';

const api = axios.create({
    baseURL: 'https://appadriantolfo.herokuapp.com/App'
});

export default api;