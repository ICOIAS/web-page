import React from 'react'
import { useTranslation } from 'react-i18next'

export const Home = () => {
  const { t } = useTranslation()

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-[#3d84a8]">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-[#2f6783] mb-6">
              {t('hero.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#volunteer"
                className="bg-[#2DD4BF] text-white px-6 py-3 rounded-md hover:bg-[#14B8A6] transition-colors text-lg font-semibold"
              >
                {t('hero.volunteerCTA')}
              </a>
              <a
                href="#learn-more"
                className="bg-[#3d84a8] text-white px-6 py-3 rounded-md hover:bg-[#2f6783] transition-colors text-lg font-semibold"
              >
                {t('hero.learnMoreCTA')}
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            {/* Aquí podríamos añadir una ilustración o imagen representativa */}
          </div>
        </div>
      </section>

      <section className="mb-8 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#3d84a8]">
            {t('areas.alignment.title')}
          </h2>
          <p className="text-lg text-[#2f6783]">
            {t('areas.alignment.description')}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#3d84a8]">
            {t('areas.governance.title')}
          </h2>
          <p className="text-lg text-[#2f6783]">
            {t('areas.governance.description')}
          </p>
        </div>
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

      <section
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
      </section>
    </main>
  )
}
