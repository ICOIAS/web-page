import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { Menu, X } from 'lucide-react'
import Logo from './components/assets/logos/svgs/Logo'
import { LanguageSwitcher } from './components'
import { useTranslation } from 'react-i18next'
import { Home, Team, Contact } from './pages'
import './i18n'

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.team'), href: '/team' },
    { name: t('nav.contact'), href: '/contact' },
  ]

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#e6e6e6]">
        <header className="bg-[#3d84a8] text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2 gap-3">
              <Logo width={40} height={40} />
              <span className="text-xl font-bold">{t('header.title')}</span>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <LanguageSwitcher />
              <Link
                to="/contact#volunteer"
                className="bg-[#2DD4BF] text-white px-4 py-2 rounded-md hover:bg-[#14B8A6] transition-colors"
              >
                {t('nav.getInvolved')}
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#3d84a8] text-white">
            <nav className="container mx-auto py-4 px-4 flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white hover:text-gray-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact#volunteer"
                className="bg-[#2DD4BF] text-white px-4 py-2 rounded-md hover:bg-[#14B8A6] transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.getInvolved')}
              </Link>
            </nav>
          </div>
        )}

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <footer className="bg-[#3d84a8] text-white p-8 mt-auto">
          <div className="container mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t('footer.about')}
              </h3>
              <p>{t('footer.description')}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t('footer.contact')}
              </h3>
              <p>E-mail: comunicaciones@aiscol.org</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t('footer.social')}
              </h3>
              {/* Aquí podrían ir los enlaces a redes sociales */}
            </div>
            <div className="md:col-span-3 text-center mt-8">
              <p>{t('footer.copyright')}</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
