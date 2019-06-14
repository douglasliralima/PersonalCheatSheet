import axios from 'axios';

//Nos conectamos com o nosso servidor REST a partir dessa biblioteca axios
const api = axios.create({
    baseURL : 'http://localhost:3333'
});

export default api;