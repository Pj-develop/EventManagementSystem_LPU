// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.proverstos.site'
});

export default api;
