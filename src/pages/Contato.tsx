import MenuVertical from '../components/MenuVertical'
import MenuNavegacao from '../components/MenuNavegacao'
import ContatoComponente from '../components/ContatoComponente'

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
    </>
  )
}