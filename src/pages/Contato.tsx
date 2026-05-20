import MenuNavegacao from '../components/MenuNavegacao'
import ContatoComponente from '../components/ContatoComponente'

export function Contato() {
  return (
    <>
      <MenuNavegacao />

      <main className="min-h-screen bg-gray-50 p-8">
        <ContatoComponente />
      </main>
    </>
  )
}