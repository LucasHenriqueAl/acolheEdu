import MenuVertical from '../components/MenuVertical'
import MenuNavegacao from '../components/MenuNavegacao'
import MensagemApoio from '../components/MensagemApoio'

export function Ajuda() {
  return (
    <>
      <MenuNavegacao />

      <div className="flex min-h-screen bg-gray-50">

        <MenuVertical />

        <main className="flex-1 p-8">

          {/* Cabeçalho */}
          <section className="mb-16 text-center">

            <h1 className="mb-6 text-5xl font-extrabold text-purple-700">
              Como usar o AcolheEdu
            </h1>

            <p className="mx-auto max-w-4xl text-xl font-medium leading-relaxed text-gray-700">
              O AcolheEdu foi desenvolvido para ajudar estudantes a
              encontrarem apoio emocional, segurança e acolhimento
              dentro do ambiente escolar.
            </p>

          </section>

          {/* FAQ */}
          <section className="mb-16 rounded-2xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-3xl font-bold text-purple-700">
              Perguntas Frequentes
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="text-xl font-bold text-purple-600">
                  O AcolheEdu é gratuito?
                </h3>

                <p className="mt-2 text-gray-700">
                  Sim. A plataforma foi criada para apoiar estudantes
                  de forma totalmente gratuita.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-purple-600">
                  Minhas informações ficam seguras?
                </h3>

                <p className="mt-2 text-gray-700">
                  Sim. O sistema busca garantir privacidade e segurança
                  durante o uso das funcionalidades.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-purple-600">
                  Posso pedir ajuda emocional?
                </h3>

                <p className="mt-2 text-gray-700">
                  Claro. Você pode utilizar os canais de conversa,
                  apoio psicológico e denúncias sempre que precisar.
                </p>
              </div>

            </div>

          </section>

          {/* Explicação */}
          <section className="mb-16 rounded-2xl bg-white p-8 shadow-sm">

            <h2 className="mb-4 text-3xl font-bold text-purple-700">
              Passo a passo
            </h2>

            <div className="space-y-6 text-lg text-gray-700">

              <div>
                <h3 className="font-bold text-purple-600">
                  1. Escolha uma funcionalidade
                </h3>

                <p>
                  Utilize os cards abaixo para acessar áreas como
                  Diário Emocional, Conversar, Bem-estar e Apoio Psicológico.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-purple-600">
                  2. Interaja com segurança
                </h3>

                <p>
                  Todas as funcionalidades foram criadas para oferecer
                  acolhimento e privacidade aos estudantes.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-purple-600">
                  3. Procure ajuda quando precisar
                </h3>

                <p>
                  O sistema permite conversar com profissionais e
                  denunciar situações de violência ou bullying.
                </p>
              </div>

            </div>

          </section>

         <MensagemApoio />

        </main>

      </div>
    </>
  )
}