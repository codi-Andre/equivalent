import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000 * 10, // 10 seconds before request expiration
})

export default api
