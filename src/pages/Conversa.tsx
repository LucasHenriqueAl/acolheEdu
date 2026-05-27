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

          <div className="mb-8 rounded-2xl bg-purple-50 p-6">

                <h2 className="mb-2 text-xl font-bold text-purple-700">
                    Conversa Anônima 
                </h2>

                <p className="text-gray-700">
                    Este espaço foi criado para que você possa conversar de forma
                    segura e anônima. Nenhuma informação pessoal será exibida durante
                    a conversa. Sinta-se à vontade para compartilhar sentimentos,
                    dúvidas ou situações que estejam afetando seu bem-estar.
                </p>

           </div>

          <Chat />

        </main>

      </div>

      <Footer />
    </>
  )
}