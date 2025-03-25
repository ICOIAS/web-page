import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language

  const [selectedLang, setSelectedLang] = useState(currentLanguage)

  const handleLanguageChange = (lang: string) => {
    setSelectedLang(lang)
    i18n.changeLanguage(lang)
  }

  const languages = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
  ]

  return (
    <div className="flex gap-2 bg-gray-100 p-2 rounded-full">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
            selectedLang === lang.code
              ? 'bg-white text-blue-500 shadow-sm'
              : 'text-gray-500 hover:bg-gray-200'
          }`}
        >
          <span className="text-lg">{lang.flag}</span>
        </button>
      ))}
    </div>
  )
}
