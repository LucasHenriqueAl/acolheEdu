import MenuVertical from '../components/layout/MenuVertical'
import MenuNavegacao from '../components/layout/MenuNavegacao'
import SobreNosComponente from '../components/Sections/SobreNosComponente'

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