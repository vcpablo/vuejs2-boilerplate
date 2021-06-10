import { merge } from 'lodash/fp'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './languages'
import core from '@core/i18n'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'en-GB',
  fallbackLocale: 'en-GB',
  messages: merge(messages, core.messages),
  dateTimeFormats: core.dateTimeFormats,
  silentTranslationWarn: true
})
