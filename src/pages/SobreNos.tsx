import MenuVertical from '../components/MenuVertical'
import MenuNavegacao from '../components/MenuNavegacao'
import SobreNosComponente from '../components/SobreNosComponente'

export function SobreNos() {
  return (
    <>
      <MenuNavegacao />

      <div className="flex min-h-screen bg-gray-50">

        <MenuVertical />

        <main className="flex-1 p-8">
          <SobreNosComponente />
        </main>

      </div>
    </>
  )
}