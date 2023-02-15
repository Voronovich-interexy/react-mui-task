import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
export const API_URL = `${BASE_URL}/api/`;

const $api = axios.create({
  baseURL: API_URL,
});

export default $api;
