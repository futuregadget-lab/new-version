import Vue from 'vue'
import VueI18n from 'vue-i18n'

import enUS from '@/lang/en-US'

Vue.use(VueI18n)

const messages = {
  'en-US': enUS
}

const numberFormats = {
  'ja-JP': {
    currency: {
      style: 'currency', currency: 'JPY', currencyDisplay: 'symbol'
    }
  }
}

const dateTimeFormats = {
  'en-US': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    }
  },
  'ja-JP': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    }
  },
  'pt-BR': {
    short: {
      year: 'numeric', month: 'long', day: 'numeric'
    }
  }
}

export const i18n = new VueI18n({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages,
  numberFormats,
  dateTimeFormats
})

export const availableLanguages = [
  { name: 'English', code: 'en-US' },
  { name: '日本語', code: 'ja-JP' },
  { name: 'Português (Brasil)', code: 'pt-BR' }
]

const loadedLanguages = ['en-US']

function setI18nLanguage (lang) {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  document.title = i18n.t('general.title')
  return lang
}

export function loadLanguageAsync (lang) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}`).then(msgs => {
        i18n.setLocaleMessage(lang, msgs.default)
        loadedLanguages.push(lang)
        return setI18nLanguage(lang)
      })
    }
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
}
