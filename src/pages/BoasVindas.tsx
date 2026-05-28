import { useNavigate } from 'react-router-dom'

import logo from '../assets/acolheEdu-logo.png'
import background from '../assets/acolheEdu-background.png'

export function BoasVindas() {

  const navigate = useNavigate()

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-12">

        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* Texto */}
          <div>

            {/* Logo + Título */}
            <div className="mb-8 flex items-center gap-4">

              <img
                src={logo}
                alt="Logo AcolheEdu"
                className="h-20 w-20 object-contain"
              />

              <h1 className="text-6xl font-extrabold tracking-tight text-purple-700">
                AcolheEdu
              </h1>

            </div>

            {/* Texto principal */}
            <p className="mb-6 max-w-2xl text-xl leading-relaxed text-gray-800">

              Uma plataforma de acolhimento, escuta e proteção emocional,
              criada para apoiar pessoas que enfrentam situações como
              ansiedade, depressão, burnout e violência física ou psicológica.

            </p>

            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-700">

              Aqui, cada história importa. Com empatia, cuidado e sigilo,
              o AcolheEdu oferece um espaço seguro para buscar ajuda,
              apoio emocional e orientação — inclusive de forma anônima.

            </p>

            {/* Frase */}
            <div className="mb-10 border-l-4 border-purple-600 pl-5">

              <p className="text-2xl font-bold italic text-purple-700">
                “Toda história merece ser ouvida.”
              </p>

            </div>

            {/* Botões */}
            <div className="flex flex-wrap gap-4">

              <button
                onClick={() => navigate('/login')}
                className="rounded-xl bg-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-purple-700"
              >
                Entrar como Aluno
              </button>

              <button
                onClick={() => navigate('/login')}
                className="rounded-xl border-2 border-purple-600 bg-white/80 px-8 py-4 text-lg font-semibold text-purple-700 transition hover:bg-purple-50"
              >
                Entrar como Psicólogo
              </button>

              <button
                onClick={() => navigate('/')}
                className="rounded-xl bg-gray-900 px-8 py-4 text-lg font-semibold text-white transition hover:bg-black"
              >
                Criar Conta
              </button>

            </div>

          </div>

         
        </div>

      </div>

    </section>
  )
}