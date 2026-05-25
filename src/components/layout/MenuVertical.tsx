import { useNavigate } from "react-router-dom";

export default function MenuVertical() {

  const navigate = useNavigate()

  return (
    <aside className="w-64 min-h-screen border-r border-gray-200 bg-white p-4">

      <h2 className="mb-8 text-2xl font-bold text-purple-700">
        AcolheEdu
      </h2>

      <ul className="space-y-2">

        <li>
          <a
            href="#"
            className="block rounded-lg bg-purple-100 px-4 py-3 text-sm font-medium text-purple-700"
          >
            Início
          </a>
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
          <a
            href="#"
            className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-purple-50 hover:text-purple-700"
          >
            Bem-estar
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-purple-50 hover:text-purple-700"
          >
            Conversar
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-purple-50 hover:text-purple-700"
          >
            Denúncias
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-purple-50 hover:text-purple-700"
          >
            Atendimento à mulher
          </a>
        </li>

        <li>
          <button
            onClick={() => navigate('/apoio_psicologico')}
            className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-purple-50 hover:text-purple-700"
          >
            Apoio psicológico
          </button>
        </li>

      </ul>
    </aside>
  )
}