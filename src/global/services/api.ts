import axios from 'axios'

const APP_URL = process.env.REACT_APP_API_URL_DEVELOPMENT

const axiosInstance = axios.create({
  baseURL: APP_URL
})

export default axiosInstance
