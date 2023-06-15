import axios from 'axios';

const API_URL: string = 'https://swapi.dev/api'

export const api = axios.create({
  baseURL: API_URL
})
