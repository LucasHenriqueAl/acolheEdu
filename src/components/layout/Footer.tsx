import logo from '../../assets/acolheEdu-logo.png'

export default function Footer() {
  return (
    <footer className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">

        {/* Logo */}
        <div className="flex items-center justify-center font-medium text-purple-700 md:justify-start">
          <img
            src={logo}
            alt="Logo AcolheEdu"
            className="h-12 w-12 object-contain"
          />


          <span className="ml-3 text-xl font-bold">
            AcolheEdu
          </span>
        </div>

        {/* Texto */}
        <p className="mt-4 text-sm text-gray-500 sm:mt-0 sm:ml-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
          © 2026 AcolheEdu — Plataforma de apoio emocional para estudantes.
        </p>

        {/* Redes Sociais */}
        <span className="mt-4 inline-flex justify-center sm:mt-0 sm:ml-auto">

          <a href="#" className="text-gray-500 hover:text-purple-700">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>

          <a
            href="#"
            className="ml-3 text-gray-500 hover:text-purple-700"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8.09v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>

          <a
            href="#"
            className="ml-3 text-gray-500 hover:text-purple-700"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <rect
                width="20"
                height="20"
                x="2"
                y="2"
                rx="5"
                ry="5"
              />
              <path d="M16 11.37A4 4 0 1112.63 8A4 4 0 0116 11.37z" />
              <path d="M17.5 6.5h.01" />
            </svg>
          </a>

          <a
            href="#"
            className="ml-3 text-gray-500 hover:text-purple-700"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
              <circle cx="4" cy="4" r="2" />
              <path d="M2 9h4v12H2z" />
            </svg>
          </a>

        </span>

      </div>
    </footer>
  )
}