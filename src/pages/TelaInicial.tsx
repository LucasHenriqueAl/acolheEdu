import MenuVertical from '../components/MenuVertical'
import MenuNavegacao from '../components/MenuNavegacao'
import CardsFuncionalidade from '../components/CardFuncionalidade'

export function TelaInicial() {
  return (
    <>
      <MenuNavegacao />

      <div className="flex bg-gray-50 min-h-screen">

        <MenuVertical />

        <main className="flex-1 p-8">

          {/* Apresentação */}
          <section className="mb-16 text-center">

            <h1 className="mb-6 text-5xl font-extrabold text-purple-700">
              AcolheEdu
            </h1>

            <p className="mx-auto max-w-4xl text-2xl font-medium leading-relaxed text-gray-700">
              Uma plataforma acolhedora desenvolvida para aproximar estudantes
              da psicóloga escolar, promovendo apoio emocional, escuta ativa,
              bem-estar e segurança dentro do ambiente escolar.
            </p>


          </section>

          {/* Cards */}
          <CardsFuncionalidade />

        </main>

      </div>
    </>
  )
}