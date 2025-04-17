import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8008',
  timeout: 5000,
  header: { 'Content-Type': 'application/json' }
})

export default instance 