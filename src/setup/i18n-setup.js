import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from '@/lang/en'

Vue.use(VueI18n)

const messages = {
  'en': en
}

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export const availableLanguages = [
  { name: 'English', code: 'en' },
  { name: '日本語', code: 'jp' },
  { name: 'Português (Brasil)', code: 'pt-BR' }
]

const loadedLanguages = ['en']

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
