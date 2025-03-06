import React from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, MessageCircle, MapPin } from 'lucide-react'

export const Contact: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-[#3d84a8]">
        {t('contact.title')}
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6 text-[#3d84a8]">
            {t('contact.getInTouch')}
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="text-[#3d84a8] w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#2f6783]">Email</h3>
                <p className="text-gray-600">comunicaciones@aiscol.org</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MessageCircle className="text-[#25D366] w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#2f6783]">WhatsApp</h3>
                <a
                  href="https://chat.whatsapp.com/KwE8cciX48TAVhAOHnrLaZ"
                  className="text-[#25D366] hover:underline"
                >
                  {t('contact.joinGroup')}
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="text-[#3d84a8] w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#2f6783]">
                  {t('contact.location')}
                </h3>
                <p className="text-gray-600">Bogotá, Colombia</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-500 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#3d84a8]">
            {t('contact.volunteer')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('contact.volunteerDescription')}
          </p>
          <a
            href="https://google.com" // TODO: Añadir enlace al formulario de voluntarios
            className="inline-block bg-[#2DD4BF] text-white px-6 py-3 rounded-md hover:bg-[#14B8A6] transition-colors font-semibold"
          >
            {t('contact.volunteerCTA')}
          </a>
        </div>
      </div>
    </div>
  )
}
