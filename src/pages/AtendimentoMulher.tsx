import MenuNavegacao from '../components/layout/MenuNavegacao'
import MenuVertical from '../components/layout/MenuVertical'
import Footer from '../components/layout/Footer'
import { useNavigate } from 'react-router-dom'

export function AtendimentoMulher() {
  const navigate = useNavigate()

  return (
    <>
      <MenuNavegacao />

      <div className="flex min-h-screen bg-gray-50">

        <MenuVertical />

        <main className="flex-1 p-8">

          {/* Cabeçalho */}
          <section className="mb-12 text-center">

            <h1 className="mb-6 text-5xl font-extrabold text-purple-700">
              Atendimento à Mulher
            </h1>

            <p className="mx-auto max-w-4xl text-2xl font-medium leading-relaxed text-gray-700">
              Este espaço foi criado para acolher, orientar e apoiar
              estudantes mulheres em situações que afetem seu bem-estar,
              segurança ou desenvolvimento dentro do ambiente escolar.
            </p>

          </section>

          {/* Informações */}
          <section className="mb-8 rounded-2xl bg-white p-8 shadow-md">

            <h2 className="mb-4 text-2xl font-bold text-purple-700">
              Como podemos ajudar?
            </h2>

            <ul className="space-y-3 text-gray-700">

              <li>
                • Orientação e acolhimento emocional.
              </li>

              <li>
                • Apoio em situações de assédio ou discriminação.
              </li>

              <li>
                • Encaminhamento para profissionais especializados.
              </li>

              <li>
                • Escuta segura e confidencial.
              </li>

            </ul>

          </section>

          {/* Atendimento */}
          <section className="mb-8 rounded-2xl bg-white p-8 shadow-md">

            <h2 className="mb-4 text-2xl font-bold text-purple-700">
              Atendimento Confidencial
            </h2>

            <p className="text-gray-700">
              Todas as solicitações são tratadas com respeito,
              privacidade e acolhimento. Nosso objetivo é garantir
              que você tenha um espaço seguro para buscar ajuda.
            </p>

          </section>

          {/* Contatos */}
          <section className="mb-8 rounded-2xl bg-white p-8 shadow-md">

            <h2 className="mb-4 text-2xl font-bold text-purple-700">
              Contatos de Apoio
            </h2>

            <div className="space-y-2 text-gray-700">

              <p>
                Coordenação Escolar: (00) 00000-0000
              </p>

              <p>
                Psicóloga Escolar: (00) 00000-0000
              </p>

              <p>
                Atendimento de Emergência: 180
              </p>

            </div>

          </section>

          {/* Solicitação */}
          <section className="mb-12 rounded-2xl bg-white p-8 text-center shadow-md">

            <h2 className="mb-4 text-2xl font-bold text-purple-700">
              Solicitar Atendimento
            </h2>

            <p className="mb-6 text-gray-700">
              Caso precise conversar com a equipe responsável,
              solicite um atendimento.
            </p>

            <button
              onClick={() => navigate('/agenda')}
              className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
            >
              Solicitar Atendimento
            </button>

          </section>

          {/* Mensagem final */}
          <section className="rounded-2xl bg-purple-100 p-8 text-center">

            <h2 className="mb-3 text-2xl font-bold text-purple-700">
              Você não está sozinha 💜
            </h2>

            <p className="text-gray-700">
              Buscar ajuda é um ato de coragem. A escola está aqui
              para ouvir, acolher e apoiar você sempre que necessário.
              Toda história merece ser ouvida.
            </p>

          </section>

        </main>

      </div>

      <Footer />
    </>
  )
}