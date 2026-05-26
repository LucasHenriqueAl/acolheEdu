import MenuNavegacao from '../components/layout/MenuNavegacao'
import MenuVertical from '../components/layout/MenuVertical'
import MensagemApoio from '../components/Sections/MensagemApoio'
import Footer from '../components/layout/Footer'

export function ApoioPsicologico() {
  return (
    <>
      <MenuNavegacao />

      <div className="flex min-h-screen bg-gray-50">

        <MenuVertical />

        <main className="flex-1 p-8">

          <section className="mb-12 text-center">

            <h1 className="mb-6 text-5xl font-extrabold text-purple-700">
              Apoio Psicológico
            </h1>

            <p className="mx-auto max-w-4xl text-2xl font-medium leading-relaxed text-gray-700">
              Este espaço foi criado para conectar estudantes ao
              atendimento psicológico escolar de forma segura,
              acolhedora e confidencial.
            </p>

          </section>

          <section className="mb-8 rounded-2xl bg-white p-8 shadow-md">

            <h2 className="mb-4 text-2xl font-bold text-purple-700">
              Como funciona?
            </h2>

            <p className="mb-4 text-gray-700">
              O estudante pode solicitar atendimento para conversar
              sobre dificuldades emocionais, ansiedade, conflitos
              escolares, autoestima ou qualquer situação que esteja
              impactando seu bem-estar.
            </p>

            <p className="text-gray-700">
              Todos os atendimentos são realizados com respeito,
              escuta ativa e sigilo profissional.
            </p>

          </section>

          <section className="mb-8 rounded-2xl bg-white p-8 shadow-md">

            <h2 className="mb-4 text-2xl font-bold text-purple-700">
              Horários de Atendimento
            </h2>

            <ul className="space-y-2 text-gray-700">
              <li>Segunda-feira: 08h às 12h</li>
              <li>Terça-feira: 13h às 17h</li>
              <li>Quarta-feira: 08h às 12h</li>
              <li>Quinta-feira: 13h às 17h</li>
              <li>Sexta-feira: 08h às 12h</li>
            </ul>

          </section>

          <section className="mb-12 rounded-2xl bg-white p-8 shadow-md text-center">

            <h2 className="mb-4 text-2xl font-bold text-purple-700">
              Solicitar Atendimento
            </h2>

            <p className="mb-6 text-gray-700">
              Clique no botão abaixo para solicitar um atendimento
              psicológico com a equipe escolar.
            </p>

            <button
              className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
            >
              Solicitar Atendimento
            </button>

          </section>

          <MensagemApoio />

        </main>

      </div>
      <Footer />
    </>
  )
}