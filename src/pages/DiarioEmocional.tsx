import MenuVertical from '../components/layout/MenuVertical'
import MenuNavegacao from '../components/layout/MenuNavegacao'
import CaixaTexto from '../components/UI/CaixaTexto'
import Footer from '../components/layout/Footer'

export function DiarioEmocional() {
  return (
    <>
      <MenuNavegacao />

      <div className="flex min-h-screen bg-gray-50">

        <MenuVertical />

        <main className="flex-1 p-8">

          {/* Cabeçalho */}
          <section className="mb-10 text-center">

            <h1 className="mb-4 text-5xl font-extrabold text-purple-700">
              Diário Emocional
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">
              Escreva sobre seus sentimentos, emoções e experiências do dia.
              Esse espaço foi criado para ajudar no seu bem-estar emocional.
            </p> 

          </section>

          {/* Caixa de texto */}
          <section className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-md">

            <CaixaTexto
              titulo="Como você está se sentindo hoje?"
              placeholder="Escreva aqui seus pensamentos..."
            />

          </section>

        </main>

      </div>
      <Footer />
    </>
  )
}