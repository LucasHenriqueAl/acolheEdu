import MenuVertical from '../components/MenuVertical'

export function TelaInicial() {
  return (
     <div className="flex">

      <MenuVertical />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold">
          Bem-vindo ao AcolheEdu
        </h1>
      </main>

    </div>
  )
}