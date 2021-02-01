require('dotenv').config()

export default {
  REACT_APP_API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT || 'http://localhost:8000/api',
  REACT_APP_TOKEN_KEY: process.env.TOKEN_KEY
}