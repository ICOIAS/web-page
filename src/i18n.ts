import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEN from './i18n/locales/en.json'
import translationES from './i18n/locales/es.json'

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    detection: {
      order: ['navigator'],
      caches: [],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18next
