import axios from 'axios';

const api = axios.create({
    baseURL: 'https://appadriantolfo.herokuapp.com/App/recibos'
});

export default api;