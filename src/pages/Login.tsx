import Button from '../components/UI/button_seta'
import { useNavigate } from 'react-router-dom'
import background from '../assets/acolheEdu-background.png'

export function Login() {
  
  const navigate = useNavigate()

  return (
    <section 
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >

    <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
      <div className="relative z-10 mx-auto flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md">

          <h1 className="mb-3 text-center text-6xl font-extrabold tracking-tight text-purple-700">
            AcolheEdu
          </h1>

          <p className="mb-8 text-center text-lg text-purple/90">
            Plataforma de apoio emocional para estudantes
          </p>

          <form className="mt-6 space-y-4 rounded-2xl bg-white/90 p-8 shadow-2xl backdrop-blur-sm">

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
                <Button 
                  texto="Entrar" 
                  onClick={() => navigate('/inicio')}
                />
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