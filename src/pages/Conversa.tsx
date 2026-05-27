import MenuNavegacao from '../components/layout/MenuNavegacao'
import MenuVertical from '../components/layout/MenuVertical'
import Footer from '../components/layout/Footer'
import Chat from '../components/UI/Chat'

export function Conversar() {
  return (
    <>
      <MenuNavegacao />

      <div className="flex min-h-screen bg-gray-50">

        <MenuVertical />

        <main className="flex-1 p-8">

          <h1 className="mb-8 text-5xl font-extrabold text-purple-700">
            Conversar
          </h1>

          <Chat />

        </main>

      </div>

      <Footer />
    </>
  )
}