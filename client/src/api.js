// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.provertos.site'
});

export default api;
