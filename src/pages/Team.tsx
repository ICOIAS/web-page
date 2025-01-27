import React from 'react'
import { useTranslation } from 'react-i18next'

export const Team: React.FC = () => {
  const { t } = useTranslation()

  const teamMembers = [
    {
      name: 'Jose Gelves',
      role: t('team.roles.founder'),
      area: t('team.areas.governance'),
      bio: t('team.bios.jose'),
      image: '/team/jose.jpg', // Asegúrate de tener estas imágenes
    },
    {
      name: 'Fernando',
      role: t('team.roles.founder'),
      area: t('team.areas.alignment'),
      bio: t('team.bios.fernando'),
      image: '/team/fernando.jpg',
    },
    // Añadir más miembros según sea necesario
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-[#3d84a8]">
        {t('team.title')}
      </h1>

      <p className="text-xl text-[#2f6783] mb-12">{t('team.description')}</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#3d84a8] mb-2">
                {member.name}
              </h2>
              <p className="text-[#ff6b6b] font-medium mb-2">{member.role}</p>
              <p className="text-[#2f6783] font-medium mb-4">{member.area}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
