import React, { useState } from 'react'
import './App.css'
import { Menu, X } from 'lucide-react'
import Logo from './components/assets/logos/svgs/Logo'
import { LanguageSwitcher } from './components'
import { useTranslation } from 'react-i18next'
import './i18n'

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <div className="flex flex-col min-h-screen bg-[#e6e6e6]">
      <header className="bg-[#3d84a8] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 gap-3">
            <Logo width={40} height={40} />
            <span className="text-xl font-bold">{t('header.title')}</span>
          </div>
          <LanguageSwitcher />
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#3d84a8]">
            {t('hero.title')}
          </h2>
          <p className="text-lg text-[#2f6783]">{t('hero.description')}</p>
        </section>
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#3d84a8]">
            {t('activities.title')}
          </h2>
          <ul className="list-disc list-inside text-lg text-[#2f6783] space-y-4">
            <li>
              <strong>{t('activities.aiFundamentals.title')}:</strong>{' '}
              {t('activities.aiFundamentals.description')}
            </li>
            <li>
              <strong>{t('activities.expertTalks.title')}:</strong>{' '}
              {t('activities.expertTalks.description')}
            </li>
          </ul>
        </section>
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#3d84a8]">
            {t('events.title')}
          </h2>
          <p className="text-lg text-[#2f6783] mb-4">
            {t('events.description')}
          </p>
          <a
            href="https://linktr.ee/aisafetyco"
            className="inline-block bg-[#3d84a8] text-white font-bold py-2 px-4 rounded hover:bg-[#2f6783] transition-colors duration-200"
          >
            {t('events.viewEventsButton')}
          </a>
        </section>
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4 text-[#3d84a8]">
            {t('community.title')}
          </h2>
          <p className="text-lg text-[#2f6783] mb-4">
            {t('community.description')}
          </p>
          <a
            href="https://chat.whatsapp.com/KwE8cciX48TAVhAOHnrLaZ"
            className="inline-block bg-[#25D366] text-white font-bold py-2 px-4 rounded hover:bg-[#128C7E] transition-colors duration-200"
          >
            {t('community.joinButton')}
          </a>
        </section>
      </main>
      <footer className="bg-[#3d84a8] text-white p-4">
        <div className="container mx-auto text-center">
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
