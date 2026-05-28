export default function SobreNosComponente() {
  return (
    <section className="body-font text-gray-600">

      <div className="container mx-auto flex flex-wrap items-center px-5 py-24">

        {/* Texto principal */}
        <div className="mb-10 border-b border-gray-200 pb-10 md:mb-0 md:w-1/2 md:border-b-0 md:border-r md:py-8 md:pr-12">

          <h1 className="mb-6 text-4xl font-extrabold text-purple-700">
            Sobre o AcolheEdu
          </h1>

          <p className="text-lg leading-relaxed text-gray-700">
            O AcolheEdu é uma plataforma desenvolvida para aproximar estudantes
            da psicóloga escolar, promovendo acolhimento, apoio emocional,
            escuta ativa e segurança dentro do ambiente escolar.
            Nosso objetivo é criar um espaço seguro onde os alunos possam
            expressar emoções, buscar ajuda e fortalecer o bem-estar emocional.
          </p>

          <button
            className="mt-6 inline-flex items-center text-purple-600 hover:text-purple-800"
          >
            Saiba Mais

            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="ml-2 h-4 w-4"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>

          </button>

        </div>

        {/* Categorias */}
        <div className="flex flex-col md:w-1/2 md:pl-12">

          <h2 className="mb-4 text-sm font-semibold tracking-wider text-purple-700">
            FUNCIONALIDADES
          </h2>

          <nav className="-mb-1 flex flex-wrap list-none">

            <li className="mb-2 w-1/2 lg:w-1/3">
              <a 
                className="text-gray-600 hover:text-purple-700"
                href="#/diario_emocional"
                >
                Diário Emocional
              </a>
            </li>

            <li className="mb-2 w-1/2 lg:w-1/3">
              <a 
                className="text-gray-600 hover:text-purple-700"
                href="#/bem_estar"
                >
                Bem-estar
              </a>
            </li>

            <li className="mb-2 w-1/2 lg:w-1/3">
              <a 
               className="text-gray-600 hover:text-purple-700"
               href="#/conversar"
              >
                Conversar
              </a>
            </li>

            <li className="mb-2 w-1/2 lg:w-1/3">
              <a 
                className="text-gray-600 hover:text-purple-700"
                href="#/denuncia"
                >
                Denúncias
              </a>
            </li>

            <li className="mb-2 w-1/2 lg:w-1/3">
              <a 
                className="text-gray-600 hover:text-purple-700"
                href="#/apoio_psicologico"
                >
                Apoio Psicológico
              </a>
            </li>

            <li className="mb-2 w-1/2 lg:w-1/3">
              <a 
                className="text-gray-600 hover:text-purple-700"
                href="#/atendimento_mulher"
                >
                Atendimento à Mulher
              </a>
            </li>

          </nav>

        </div>

      </div>

    </section>
  )
}