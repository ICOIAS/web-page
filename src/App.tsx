import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { Menu, X } from 'lucide-react'
import { Logo } from './components/assets/logos/svgs/Logo'
import { LanguageSwitcher } from './components'
import { useTranslation } from 'react-i18next'
import {
  HomePage,
  TeamPage,
  ContactPage,
  ProgramsPage,
  ProjectsPage,
} from './pages'
import './i18n'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const navigation = [
    { name: t('nav.home'), href: '/' },
    // { name: t('nav.archive'), href: '/archive' },
    { name: t('nav.team'), href: '/team' },
    // { name: t('nav.contact'), href: '/contact' },
  ]

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#e6e6e6]">
        <header className="bg-white text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2 gap-3">
              <Logo width={40} height={40} />
              <span className="text-xl font-bold text-aiscol-primary">
                {t('header.title')}
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-aiscol-primary hover:text-aiscol-tertiary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <LanguageSwitcher />
              {/*<Link
                to="/contact#volunteer"
                className="bg-[#3999bf] text-white px-4 py-2 rounded-md hover:bg-[#3182a0] transition-colors"
              >
                {t('nav.getInvolved')}
              </Link>*/}
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
        {/*isMenuOpen && (
          <div className="md:hidden bg-[#022856] text-white">
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
                className="bg-[#3999bf] text-white px-4 py-2 rounded-md hover:bg-[#3182a0] transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.getInvolved')}
              </Link>
            </nav>
          </div>
        )}*/}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
        <footer className="bg-[#022856] text-white p-8 mt-auto">
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
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-aiscol-light"
                  />
                  <p>comunicaciones@aiscol.org</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-aiscol-light"
                  />
                  <p>+57 316 491 7357</p>
                  <p>+57 302 840 5507</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold mb-4">
                {t('footer.social')}
              </h3>
              <div className="flex flex-row gap-5">
                <a
                  href="https://www.linkedin.com/company/ai-safety-col/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-aiscol-light transition-colors"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a
                  href="https://chat.whatsapp.com/KwE8cciX48TAVhAOHnrLaZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-aiscol-light transition-colors"
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                </a>
                <a
                  href="https://www.instagram.com/aisafetyco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-aiscol-light transition-colors"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a
                  href="https://github.com/ICOIAS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-aiscol-light transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </div>
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
