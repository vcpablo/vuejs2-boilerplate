import axios from 'axios'
import store from '@/store'

import { API_TIMEOUT_MILLISECONDS } from '@/constants/application'

const apiInstance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: API_TIMEOUT_MILLISECONDS
})

apiInstance.interceptors.request.use(config => {
  const token = store.state.application.userToken
  config.headers['Cache-Control'] = 'no-cache'
  config.headers['Pragma'] = 'no-cache'

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return config
})

apiInstance.interceptors.response.use(error => {
  // eslint-disable-next-line no-console
  console.error('API error:', error)
  return Promise.reject(error)
})

export default apiInstance
