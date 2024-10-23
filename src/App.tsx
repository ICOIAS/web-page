import React, { useState } from 'react'
import './App.css'
import { Menu, X } from 'lucide-react'

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-[#e6e6e6]">
      <header className="bg-[#3d84a8] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="/api/placeholder/40/40"
              alt="Logo"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold">AI Safety Colombia</span>
          </div>
          {/*<nav className="hidden md:flex space-x-4">
            {[
              'Aprende Más',
              'Eventos',
              'Investigación',
              'Sobre Nosotros',
              'Contacto',
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-[#7cb3cf] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>*/}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Menú móvil */}
      {/*isMenuOpen && (
        <div className="md:hidden bg-[#569ec2] text-white">
          {[
            'Aprende Más',
            'Eventos',
            'Investigación',
            'Sobre Nosotros',
            'Contacto',
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="block py-2 px-4 hover:bg-[#2f6783]"
            >
              {item}
            </a>
          ))}
        </div>
      )*/}

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#3d84a8]">
            Impulsando el Futuro Seguro de la IA en Colombia
          </h2>
          <p className="text-lg text-[#2f6783]">
            En AI Safety Colombia, nos dedicamos a construir un futuro donde la
            IA beneficie a todos de manera segura y ética. Nuestra misión es
            formar líderes, fomentar la investigación crítica y crear conciencia
            sobre la importancia de la seguridad en IA.
          </p>
        </section>

        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#3d84a8]">
            Nuestras Actividades
          </h2>
          <ul className="list-disc list-inside text-lg text-[#2f6783] space-y-4">
            <li>
              <strong>AI Safety Fundamentals:</strong> Facilitamos los cursos
              desarrollados por BlueDot Impact, ofreciendo una formación sólida
              en los fundamentos de la seguridad en IA.
            </li>
            <li>
              <strong>Charlas y Cenas con Expertos:</strong> Organizamos eventos
              exclusivos con líderes en el campo de la IA, brindando
              oportunidades únicas de networking y aprendizaje.
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#3d84a8]">
            Próximos Eventos
          </h2>
          <p className="text-lg text-[#2f6783] mb-4">
            Mantente atento a nuestros próximos cursos de AI Safety Fundamentals
            y eventos con expertos. Síguenos en nuestras redes sociales para no
            perderte ninguna oportunidad.
          </p>
          <a
            href="https://linktr.ee/aisafetyco" // Enlace a la página de eventos o redes sociales
            className="inline-block bg-[#3d84a8] text-white font-bold py-2 px-4 rounded hover:bg-[#2f6783] transition-colors duration-200"
          >
            Ver Próximos Eventos
          </a>
        </section>

        {/*<section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#3d84a8]">
            Participa en Nuestros Programas
          </h2>
          <p className="text-lg text-[#2f6783] mb-4">
            ¿Quieres profundizar tus conocimientos en seguridad de IA? Nuestros
            cursos de AI Safety Fundamentals son el punto de partida perfecto.
            Aprende de expertos y conéctate con otros apasionados por la IA
            segura.
          </p>
          <a
            href="https://forms.gle/5555555555555555" // Enlace a información sobre los cursos o formulario de inscripción
            className="inline-block bg-[#3d84a8] text-white font-bold py-2 px-4 rounded hover:bg-[#2f6783] transition-colors duration-200"
          >
            Inscríbete en AI Safety Fundamentals
          </a>
        </section>*/}

        <section className="mb-8 bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4 text-[#3d84a8]">
            Únete a Nuestra Comunidad
          </h2>
          <p className="text-lg text-[#2f6783] mb-4">
            Sé parte de una red de innovadores comprometidos con el desarrollo
            responsable de la IA en Colombia. Únete a nuestro grupo de WhatsApp
            para estar al día con nuestras actividades y conectar con otros
            entusiastas de la IA segura.
          </p>
          <a
            href="https://chat.whatsapp.com/KwE8cciX48TAVhAOHnrLaZ" // Reemplazar con el enlace real del grupo de WhatsApp
            className="inline-block bg-[#25D366] text-white font-bold py-2 px-4 rounded hover:bg-[#128C7E] transition-colors duration-200"
          >
            Unirse al Grupo de WhatsApp
          </a>
        </section>
      </main>

      <footer className="bg-[#3d84a8] text-white p-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; 2024 AI Safety Colombia. Construyendo un futuro seguro e
            innovador.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
