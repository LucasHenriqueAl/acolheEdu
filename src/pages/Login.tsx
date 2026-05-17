import Button from '../components/button'

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

            <Button texto="Entrar" />

          </form>
        </div>
      </div>
    </section>
  )
}