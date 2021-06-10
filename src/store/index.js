import Vue from 'vue'
import Vuex from 'vuex'

import application from './modules/application'

Vue.use(Vuex)

export const store = {
  modules: {
    application
  }
}

export default new Vuex.Store(store)
