import MenuVertical from '../components/MenuVertical'
import MenuNavegacao from '../components/MenuNavegacao'

export function TelaInicial() {
  return (
    <>
      <MenuNavegacao />

      <div className="flex">

        <MenuVertical />

        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-purple-700">
            Bem-vindo ao AcolheEdu
          </h1>
        </main>

      </div>
    </>
  )
}