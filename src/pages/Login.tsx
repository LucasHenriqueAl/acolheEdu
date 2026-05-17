export function Login() {
  return (
    <section className="bg-white min-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-16">
        <div className="mx-auto max-w-lg">

          <h1 className="text-center text-2xl font-bold text-blue-600">
            AcolheEdu
          </h1>

          <form className="mt-6 space-y-4 rounded-lg p-6 shadow-lg">

            <div>
              <label className="sr-only">Email</label>

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              />
            </div>

            <div>
              <label className="sr-only">Senha</label>

              <input
                type="password"
                placeholder="Senha"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              />
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white"
            >
              Entrar
            </button>

          </form>
        </div>
      </div>
    </section>
  )
}