import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bell } from 'lucide-react'
import AvatarUsuario from '../UI/AvatarIcon'

export default function MenuNavegacao() {
  const navigate = useNavigate()
  const [abrirNotificacoes, setAbrirNotificacoes] = useState(false)

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto flex flex-col items-center p-5 md:flex-row">

        <button 
          type="button"
          onClick={() => navigate('/inicio')}
          className="mb-4 flex items-center font-medium text-purple-700 md:mb-0">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-10 w-10 rounded-full bg-purple-600 p-2 text-white"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>

          <span className="ml-3 text-2xl font-bold">
            AcolheEdu
          </span>

        </button>

        <nav className="flex flex-wrap items-center justify-center text-base md:ml-6">

          <button 
            type="button"
            className="mr-5 cursor-pointer text-gray-600 hover:text-purple-700"
            onClick={() => navigate('/sobre_nos')}
            >
            Sobre nós
          </button>

          <button 
            type="button"
            className="mr-5 cursor-pointer text-gray-600 hover:text-purple-700"
            onClick={() => navigate('/ajuda')}
            >
            Ajuda
          </button>

          <button
            type="button"
            onClick={() => navigate('/contato')}
            className="mr-5 cursor-pointer text-gray-600 hover:text-purple-700">
            Contato
          </button>

          <button
            type="button"
            onClick={() => navigate('/configuracoes')} 
            className="mr-5 cursor-pointer text-gray-600 hover:text-purple-700"
          >
            Configurações
          </button>

        </nav>

        <div className="relative mt-4 flex items-center gap-4 md:mt-0 md:ml-auto">

        {/* Notificações */}
        <button
          type="button"
          onClick={() => setAbrirNotificacoes(!abrirNotificacoes)}
          className="relative rounded-full p-2 text-gray-600 transition hover:bg-purple-50 hover:text-purple-700"
        >
          <Bell size={24} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* Caixa de notificações */}
        {abrirNotificacoes && (
          <div className="absolute right-0 top-14 z-50 w-80 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">

            <h3 className="mb-3 font-bold text-purple-700">
              Notificações
            </h3>

            <div className="space-y-2 text-sm text-gray-600">

              <div className="rounded-lg bg-purple-50 p-3">
                Bem-vindo ao AcolheEdu! 💜
              </div>

              <div className="rounded-lg bg-purple-50 p-3">
                Lembre-se de registrar suas emoções no Diário Emocional.
              </div>

            </div>

          </div>
        )}

 

        <button
          onClick={() => navigate('/perfil')} 
          type="button"
          className="mt-4 inline-flex items-center rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 md:mt-0 md:ml-auto"
        >
          Perfil

          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="ml-2 h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>

        </button>

        <AvatarUsuario nome="Lucas" />

        </div>

      </div>
    </header>
  )
}