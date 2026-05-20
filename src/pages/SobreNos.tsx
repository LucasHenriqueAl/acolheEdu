import MenuNavegacao from '../components/MenuNavegacao'
import SobreNosComponente from '../components/SobreNosComponente'

export function SobreNos() {
  return (
    <>
      <MenuNavegacao />

      <main className="min-h-screen bg-gray-50 p-8">
        <SobreNosComponente />
      </main>
    </>
  )
}