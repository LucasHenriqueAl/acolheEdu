export default function MensagemApoio() {
  return (
    <section className="mt-20 rounded-3xl border border-purple-100 bg-white p-10 shadow-lg transition hover:shadow-xl">

      <h2 className="mb-6 text-3xl font-extrabold text-purple-700 text-center">
        Contatos de Emergência
      </h2>

      <div className="space-y-4 text-center text-lg text-gray-700">

        <p>
          <span className="font-bold text-purple-700">
            CVV:
          </span>{' '}
          Ligue 188 — Atendimento gratuito 24h.
        </p>

        <p>
          <span className="font-bold text-purple-700">
            Coordenação Escolar:
          </span>{' '}
          (00) 00000-0000
        </p>

      </div>

      <div className="mt-10 border-t border-purple-200 pt-8 text-center">

        <h3 className="mb-4 text-2xl font-bold text-purple-700">
          Você não está sozinho 💜
        </h3>

        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">
          Pedir ajuda é um ato de coragem. O AcolheEdu existe para
          acolher, ouvir e apoiar estudantes em momentos difíceis.
          Sempre haverá alguém disposto a ajudar você.
        </p>

      </div>

    </section>
  )
}