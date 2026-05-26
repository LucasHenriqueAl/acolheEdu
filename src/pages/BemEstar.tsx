import { useState } from 'react'

import MenuNavegacao from '../components/layout/MenuNavegacao'
import MenuVertical from '../components/layout/MenuVertical'
import Footer from '../components/layout/Footer'
import BarraProgresso from '../components/UI/BarraProgresso'

export function BemEstar() {
  const perguntas = [
    'Você está se sentindos bem hoje?',
    'Você conseguiu dormir bem esta noite?',
    'Você se sentiu motivado para realizar suas atividades?',
    'Você teve alguém com quem conversar quando precisou?'
  ]

  const [perguntaAtual, setPerguntaAtual] = useState(0)

  const progresso =
    (perguntaAtual / perguntas.length) * 100

  const responder = () => {
    if (perguntaAtual < perguntas.length) {
      setPerguntaAtual(perguntaAtual + 1)
    }
  }

  return (
    <>
      <MenuNavegacao />

      <div className="flex min-h-screen bg-gray-50">

        <MenuVertical />

        <main className="flex-1 p-8">

          <h1 className="mb-8 text-5xl font-extrabold text-purple-700">
            Bem-estar Emocional
          </h1>

          <div className="mb-8 rounded-2xl bg-white p-6 shadow-md">

            <BarraProgresso
              titulo="Progresso do Questionário"
              valor={progresso}
            />

          </div>

          <div className="rounded-2xl bg-white p-8 shadow-md">

            {perguntaAtual < perguntas.length ? (
              <>
                <h2 className="mb-8 text-2xl font-bold text-gray-800">
                  {perguntas[perguntaAtual]}
                </h2>

                <div className="grid gap-4 md:grid-cols-2">

                  <button
                    onClick={responder}
                    className="rounded-xl bg-green-500 px-4 py-3 font-medium text-white hover:bg-green-600"
                  >
                    Sim
                  </button>

                  <button
                    onClick={responder}
                    className="rounded-xl bg-red-500 px-4 py-3 font-medium text-white hover:bg-red-600"
                  >
                    Não
                  </button>

                </div>
              </>
            ) : (
              <div className="text-center">

                <h2 className="mb-4 text-3xl font-bold text-purple-700">
                  Questionário Concluído 🎉
                </h2>

                <p className="text-lg text-gray-700">
                  Obrigado por responder.
                  Lembre-se de procurar apoio sempre que precisar.
                </p>

              </div>
            )}

          </div>

        </main>

      </div>

      <Footer />
    </>
  )
}