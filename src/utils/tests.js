import { merge } from 'lodash/fp'
import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueContentPlaceholders from 'vue-content-placeholders'
import BootstrapVue from 'bootstrap-vue'

import routes from '@/router/routes'
import { store } from '@/store'

const localVue = createLocalVue()

localVue.use(BootstrapVue)
localVue.use(VueContentPlaceholders)
localVue.use(Vuex)
localVue.use(VueRouter)

jest.spyOn(global.console, 'error').mockImplementation(str => {
  if (
    typeof str === 'string' &&
    !str.includes(
      'The .native modifier for v-on is only valid on components but it was used on <a>.'
    )
  ) {
    // eslint-disable-next-line no-console
    console.log(str)
  }
})

const buildRender = ({ store, routes }) => {
  return (component, options = {}, callback) => {
    const { mocks = {}, ...rest } = options

    return render(
      component,
      {
        localVue,
        routes,
        mocks: {
          $store: createStore(store, mocks.store),
          ...createI18n(mocks.i18n),
          ...createEventBus(mocks.eventBus),
          ...mocks
        },
        ...rest
      },
      callback
    )
  }
}

const createEventBus = overrides => {
  return merge(
    { $eventBus: { $emit: jest.fn(), $on: jest.fn(), $off: jest.fn() } },
    overrides
  )
}

const createI18n = overrides => {
  return merge(
    {
      $t: key => key,
      $d: key => key,
      $tc: (key, counter) => `${key},${counter}`
    },
    overrides
  )
}

const createStore = (store, overrides) => {
  return new Vuex.Store(merge(store, overrides))
}

const customRender = buildRender({ store, routes })

export { customRender as render }

export * from '@testing-library/vue'
