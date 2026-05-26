import MenuVertical from '../components/layout/MenuVertical'
import MenuNavegacao from '../components/layout/MenuNavegacao'
import ContatoComponente from '../components/Sections/ContatoComponente'
import Footer from '../components/layout/Footer'

export function Contato() {
  return (
    <>
      <MenuNavegacao />

      <div className="flex min-h-screen bg-gray-50">

        <MenuVertical />

        <main className="flex-1 p-8">
          <ContatoComponente />
        </main>

      </div>
      <Footer />
    </>
  )
}