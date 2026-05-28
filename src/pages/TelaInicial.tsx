import MenuVertical from '../components/layout/MenuVertical'
import MenuNavegacao from '../components/layout/MenuNavegacao'
import CardsFuncionalidade from '../components/Cards/CardFuncionalidade'
import MensagemApoio from '../components/Sections/MensagemApoio'
import Footer from '../components/layout/Footer'

export function TelaInicial() {
  return (
    <>
      <MenuNavegacao />

      <div className="flex bg-gray-50 min-h-screen">

        <MenuVertical />

        <main className="flex-1 p-8">

          {/* Cards */}
          <CardsFuncionalidade />

          <MensagemApoio />

        </main>

      </div>

      <Footer />
    </>
  )
}