import MenuVertical from '../components/layout/MenuVertical'
import MenuNavegacao from '../components/layout/MenuNavegacao'
import Toggle from '../components/UI/Toggles'
import Footer from '../components/layout/Footer'

export function Configuracoes() {
  return (
    <>
      <MenuNavegacao />

      <div className="flex min-h-screen bg-gray-100">

        <MenuVertical />

        <main className="flex-1 p-8">

          <h1 className="mb-8 text-5xl font-extrabold text-purple-700">
            Configurações
          </h1>

          <div className="space-y-5">

            {/* Notificações */}
            <div className="rounded-2xl bg-white p-6 shadow-md">

              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                Notificações
              </h2>

              <div className="space-y-4">

                <div className="flex items-center justify-between">
                  <span className="text-gray-700">
                    Receber notificações
                  </span>

                  <Toggle id="notificacoes" />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700">
                    Lembretes do Diário Emocional
                  </span>

                  <Toggle id="lembretes" />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700">
                    Avisos da psicóloga escolar
                  </span>

                  <Toggle id="avisos" />
                </div>

              </div>

            </div>

            {/* Aparência */}
            <div className="rounded-2xl bg-white p-6 shadow-md">

              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                Aparência
              </h2>

              <div className="space-y-4">

                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Tema
                  </label>

                  <select className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-purple-500">
                    <option>Tema Claro</option>
                    <option>Tema Escuro</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Tamanho da fonte
                  </label>

                  <select className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-purple-500">
                    <option>Pequena</option>
                    <option>Média</option>
                    <option>Grande</option>
                  </select>
                </div>

              </div>

            </div>

            {/* Privacidade */}
            <div className="rounded-2xl bg-white p-6 shadow-md">

              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                Privacidade
              </h2>

              <div className="space-y-4">

                <div className="flex items-center justify-between">
                  <span className="text-gray-700">
                    Mostrar nome completo
                  </span>

                  <Toggle id="nomeCompleto" />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700">
                    Permitir contato da psicóloga
                  </span>

                  <Toggle id="contatoPsicologa" />
                </div>

              </div>

            </div>

            {/* Acessibilidade */}
            <div className="rounded-2xl bg-white p-6 shadow-md">

              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                Acessibilidade
              </h2>

              <div className="space-y-4">

                <div className="flex items-center justify-between">
                  <span className="text-gray-700">
                    Alto contraste
                  </span>

                  <Toggle id="contraste" />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700">
                    Reduzir animações
                  </span>

                  <Toggle id="animacoes" />
                </div>

              </div>

            </div>

            {/* Sistema */}
            <div className="rounded-2xl bg-white p-6 shadow-md">

              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                Sistema
              </h2>

              <div className="space-y-2 text-gray-700">

                <p>
                  Versão: <strong>1.0.0</strong>
                </p>

                <a
                  href="#/sobre_nos"
                  className="block text-purple-700 hover:underline"
                >
                  Sobre o AcolheEdu
                </a>

                <a
                  href="#/ajuda"
                  className="block text-purple-700 hover:underline"
                >
                  Central de Ajuda
                </a>

              </div>

            </div>

          </div>

        </main>

      </div>

      <Footer />
    </>
  )
}