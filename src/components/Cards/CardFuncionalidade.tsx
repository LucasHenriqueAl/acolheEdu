import Card from './Card'

export default function CardsFuncionalidade() {
  return (
    <section className="body-font text-gray-600">

      <div className="container mx-auto px-5 py-20">

        <div className="mb-16 flex w-full flex-col items-center text-center">

          <h1 className="mb-4 text-4xl font-extrabold text-purple-700">
            Começar
          </h1>

        </div>

        <div className="-m-4 flex flex-wrap">

          {/* Diário Emocional */}
          <Card
            titulo="Diário Emocional"
            descricao="Registre emoções, sentimentos e experiências do seu dia."
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-6 w-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </Card>

          {/* Bem-estar */}
          <Card
            titulo="Bem-estar"
            descricao="Responda testes rápidos e acompanhe seu bem-estar emocional."
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-6 w-6"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 15s1.5 2 4 2 4-2 4-2"></path>
              <path d="M9 9h.01"></path>
              <path d="M15 9h.01"></path>
            </svg>
          </Card>

          {/* Conversar */}
          <Card
            titulo="Conversar"
            descricao="Converse anonimamente com a psicóloga escolar."
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-6 w-6"
              viewBox="0 0 24 24"
            >
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
            </svg>
          </Card>

          {/* Denúncias */}
          <Card
            titulo="Denúncias"
            descricao="Denuncie casos de bullying e violência emocional."
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-6 w-6"
              viewBox="0 0 24 24"
            >
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path>
            </svg>
          </Card>

          {/* Atendimento à Mulher */}
          <Card
            titulo="Atendimento à Mulher"
            descricao="Canal de apoio e acolhimento para estudantes mulheres."
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-6 w-6"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z"></path>
            </svg>
          </Card>

          {/* Apoio Psicológico */}
          <Card
            titulo="Apoio Psicológico"
            descricao="Agende atendimentos e receba apoio especializado."
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-6 w-6"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </Card>

        </div>

      </div>

    </section>
  )
}