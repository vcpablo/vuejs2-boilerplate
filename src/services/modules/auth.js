import api from '@/services/api'

export default {
  authenticate({ username, password }) {
    return api.post('/authenticate', { username, password })
  }
}
