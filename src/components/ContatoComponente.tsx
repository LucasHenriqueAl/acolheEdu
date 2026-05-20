export default function ContatoComponente() {
  return (
    <section className="relative body-font text-gray-600">

      <div className="container mx-auto px-5 py-24">

        {/* Título */}
        <div className="mb-12 flex w-full flex-col text-center">

          <h1 className="mb-4 text-4xl font-extrabold text-purple-700">
            Entre em Contato
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            Caso precise de ajuda, apoio emocional ou queira entrar em contato
            com a equipe do AcolheEdu, envie sua mensagem abaixo.
          </p>

        </div>

        {/* Formulário */}
        <div className="mx-auto md:w-2/3 lg:w-1/2">

          <div className="-m-2 flex flex-wrap">

            {/* Nome */}
            <div className="w-1/2 p-2">
              <div className="relative">

                <label
                  htmlFor="name"
                  className="text-sm leading-7 text-gray-600"
                >
                  Nome
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-2 text-base text-gray-700 outline-none transition duration-200 ease-in-out focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200"
                />

              </div>
            </div>

            {/* Email */}
            <div className="w-1/2 p-2">
              <div className="relative">

                <label
                  htmlFor="email"
                  className="text-sm leading-7 text-gray-600"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-2 text-base text-gray-700 outline-none transition duration-200 ease-in-out focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200"
                />

              </div>
            </div>

            {/* Mensagem */}
            <div className="w-full p-2">
              <div className="relative">

                <label
                  htmlFor="message"
                  className="text-sm leading-7 text-gray-600"
                >
                  Mensagem
                </label>

                <textarea
                  id="message"
                  name="message"
                  className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-2 text-base text-gray-700 outline-none transition duration-200 ease-in-out focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200"
                ></textarea>

              </div>
            </div>

            {/* Botão */}
            <div className="w-full p-2">

              <button
                className="mx-auto flex rounded-lg bg-purple-600 px-8 py-3 text-lg text-white transition hover:bg-purple-700"
              >
                Enviar Mensagem
              </button>

            </div>

            {/* Informações */}
            <div className="mt-8 w-full border-t border-gray-200 p-2 pt-8 text-center">

              <a className="text-purple-600">
                acolheedu@email.com
              </a>

              <p className="my-5 leading-normal">
                CETI Maria da Conceição Salomé
                <br />
                Teresina - PI
              </p>

              {/* Redes sociais */}
              <span className="inline-flex">

                {/* Facebook */}
                <a className="text-gray-500">

                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>

                </a>

                {/* Twitter */}
                <a className="ml-4 text-gray-500">

                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>

                </a>

                {/* Instagram */}
                <a className="ml-4 text-gray-500">

                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>

                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>

                  </svg>

                </a>

              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}