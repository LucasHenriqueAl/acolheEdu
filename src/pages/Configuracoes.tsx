import MenuVertical from '../components/layout/MenuVertical'
import MenuNavegacao from '../components/layout/MenuNavegacao'
import Toggle from '../components/UI/Toggles'

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

            {/* Alterar Nome */}
            <div className="rounded-2xl bg-white p-6 shadow-md">

              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                Alterar nome do usuário
              </h2>

              <input
                type="text"
                placeholder="Digite seu novo nome"
                className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-purple-500"
              />

            </div>

            {/* Alterar Senha */}
            <div className="rounded-2xl bg-white p-6 shadow-md">

              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                Alterar senha
              </h2>

              <div className="space-y-3">

                <input
                  type="password"
                  placeholder="Nova senha"
                  className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-purple-500"
                />

                <input
                  type="password"
                  placeholder="Confirmar nova senha"
                  className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-purple-500"
                />

              </div>

            </div>

            {/* Notificações */}
            <div className="flex items-center justify-between rounded-2xl bg-white p-6 shadow-md">

              <span className="text-lg font-medium text-gray-700">
                Ativar notificações
              </span>

              <Toggle id="notificacoes" />

            </div>

            {/* Privacidade */}
            <div className="rounded-2xl bg-white p-6 shadow-md">

              <a
                href="/privacidade"
                className="text-xl font-bold text-purple-700 hover:underline"
              >
                Privacidade da conta
              </a>

              <p className="mt-2 text-gray-600">
                Gerencie a visualização das suas informações e dados.
              </p>

            </div>

            {/* Sair da Conta */}
            <div className="rounded-2xl bg-white p-6 shadow-md">

              <button
                className="rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
              >
                Sair da conta
              </button>

            </div>

          </div>

        </main>

      </div>
    </>
  )
}