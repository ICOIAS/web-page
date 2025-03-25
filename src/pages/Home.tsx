import React from 'react'
import { useTranslation } from 'react-i18next'

export const HomePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="flex-grow">
      {/* Hero Section con gradiente y texto grande */}
      <section className="bg-white text-white py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-4xl text-aiscol-primary">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl opacity-90 text-aiscol-tertiary">
            {t('hero.description')}
          </p>
          {/*<div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#volunteer"
              className="bg-aiscol-primary text-white px-8 py-4 rounded-md hover:bg-[#3182a0] transition-colors text-lg font-semibold text-center"
            >
              {t('hero.volunteerCTA')}
            </a>
            <a
              href="#learn-more"
              className="bg-aiscol-secondary text-white px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-lg font-semibold text-center"
            >
              {t('hero.learnMoreCTA')}
            </a>
          </div>*/}
        </div>
      </section>

      {/* Resto del contenido */}
      <div className="container mx-auto px-4 py-16">
        <section className="mb-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-aiscol-tertiary">
              {t('areas.alignment.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('areas.alignment.description')}
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-aiscol-tertiary">
              {t('areas.governance.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('areas.governance.description')}
            </p>
          </div>
        </section>

        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-aiscol-tertiary">
            {t('activities.title')}
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-4">
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

        {/*<section
          id="volunteer"
          className="mb-8 bg-white p-6 rounded-lg shadow-md text-center"
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#3d84a8]">
            {t('volunteer.title')}
          </h2>
          <p className="text-lg text-[#2f6783] mb-6">
            {t('volunteer.description')}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="https://chat.whatsapp.com/KwE8cciX48TAVhAOHnrLaZ"
              className="bg-[#25D366] text-white font-bold py-3 px-6 rounded hover:bg-[#128C7E] transition-colors duration-200"
            >
              {t('volunteer.whatsappButton')}
            </a>
            <a
              href="mailto:comunicaciones@aiscol.org"
              className="bg-[#3d84a8] text-white font-bold py-3 px-6 rounded hover:bg-[#2f6783] transition-colors duration-200"
            >
              {t('volunteer.emailButton')}
            </a>
          </div>
        </section>*/}
      </div>
    </div>
  )
}
