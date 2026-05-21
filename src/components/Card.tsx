type CardProps = {
  titulo: string
  descricao: string
  children: React.ReactNode
}

export default function Card({
  titulo,
  descricao,
  children
}: CardProps) {
  return (
    <div className="p-4 md:w-1/2 xl:w-1/3">
      <div className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:shadow-lg">

        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
          {children}
        </div>

        <h2 className="mb-2 text-lg font-bold text-gray-900">
          {titulo}
        </h2>

        <p className="leading-relaxed text-gray-600">
          {descricao}
        </p>

      </div>
    </div>
  )
}