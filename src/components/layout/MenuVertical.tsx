import { useNavigate } from "react-router-dom";

export default function MenuVertical() {

  const navigate = useNavigate()

  return (
    <aside className="w-64 min-h-screen border-r border-gray-200 bg-white p-4">

      <ul className="space-y-2">

        <li>
          <button
            onClick={() => navigate('/inicio')}
            className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-purple-50 hover:text-purple-700"
          >
            Início
          </button>
        </li>

         <li>
          <button
            onClick={() => navigate('/apoio_psicologico')}
            className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-purple-50 hover:text-purple-700"
          >
            Apoio psicológico
          </button>
        </li>

        <li>
          <button
            onClick={() => navigate('/diario_emocional')}
            className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-purple-50 hover:text-purple-700"
          >
            Diário Emocional
          </button>
        </li>


        <li>
          <button
            onClick={() => navigate('/conversar')}
            className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-purple-50 hover:text-purple-700"
          >
            Conversar
          </button>
        </li>

        <li>
          <button
            onClick={() => navigate('/denuncia')}
            className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-purple-50 hover:text-purple-700"
          >
            Denúncias
          </button>
        </li>

        <li>
          <button
            onClick={() => navigate('/atendimento_mulher')}
            className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-purple-50 hover:text-purple-700"
          >
            Atendimento à mulher
          </button>
        </li>

        <li>
          <button
            onClick={() => navigate('/bem_estar')}
            className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-purple-50 hover:text-purple-700"
          >
            Bem estar
          </button>
        </li>

      </ul>
    </aside>
  )
}