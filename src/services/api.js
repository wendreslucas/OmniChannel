import axios from 'axios';

export const apiAtendimentos = axios.create({
  baseURL: 'http://localhost:8080',
});
