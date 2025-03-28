import React from 'react'
import { useTranslation } from 'react-i18next'

export const TeamPage: React.FC = () => {
  const { t } = useTranslation()

  const teamMembers = [
    {
      name: 'Jose Gelves',
      role: t('team.roles.founder'),
      area: t('team.areas.governance'),
      bio: t('team.bios.jose'),
      image: '/team/jose.jpeg',
    },
    {
      name: 'Fernando',
      role: t('team.roles.founder'),
      area: t('team.areas.alignment'),
      bio: t('team.bios.fernando'),
      image: '/team/fernando.jpeg',
    },
    {
      name: 'Gabriela',
      role: t('team.roles.volunteerF'),
      area: t('team.areas.alignment'),
      bio: t('team.bios.gabriela'),
      image: '/team/gabriela.jpeg',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-aiscol-primary">
        {t('team.title')}
      </h1>
      <p className="text-xl text-aiscol-tertiary mb-12">
        {t('team.description')}
      </p>
      <div className="flex flex-row justify-center items-center gap-8">
        {teamMembers.map(({ name, image, role, area, bio }) => (
          <div
            key={name}
            className="bg-white rounded-lg shadow-md flex flex-col max-w-96 min-h-[750px]"
          >
            <img src={image} alt={name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-aiscol-primary mb-2">
                {name}
              </h2>
              <p className="text-[#ff6b6b] font-medium mb-2">{role}</p>
              <p className="text-aiscol-tertiary font-medium mb-4">{area}</p>
              <p className="text-gray-600">{bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
