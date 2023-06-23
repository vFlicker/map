import axios from 'axios';

const BACKEND_URL = 'https://test.alg777.com/bus/';
const TIMEOUT = 5000;

export const httpClient = axios.create({
  baseURL: BACKEND_URL,
  timeout: TIMEOUT,
});
