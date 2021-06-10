import apiModules from '@/services'

async function authenticate({ dispatch }, { username, password }) {
  try {
    await dispatch('clearUserToken')
    const { data } = await apiModules.auth.authenticate({
      username,
      password
    })
    await dispatch('setUserToken', data.accessToken)
    return data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error authenticating user', error)
    await dispatch('clearUserToken')
    return Promise.reject(error)
  }
}

function clearUserToken({ commit }) {
  commit('setUserToken', null)
}

function setUserToken({ commit }, token) {
  commit('setUserToken', token)
}

export default {
  authenticate,
  clearUserToken,
  setUserToken
}
