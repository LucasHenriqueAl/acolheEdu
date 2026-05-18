import Button from '../components/button_seta'

export function Login() {
  return (
    <section className="bg-white min-h-screen ">
      <div className="mx-auto max-w-screen-xl px-4 py-16">
        <div className="mx-auto max-w-lg">

          <h1 className="mb-8 text-center text-5xl font-extrabold tracking-tight text-purple-700">
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

             <div className="flex justify-center">
                <Button texto="Entrar" />
             </div>

             <p className="text-center text-sm text-gray-600">
              Não possui conta?{' '}
              <a
                 href="/cadastro"
                  className="font-medium text-purple-800 hover:underline"
              >
                criar conta
              </a>
              </p>

          </form>
        </div>
      </div>
    </section>
  )
}