import { useNavigate } from 'react-router-dom'

type CardProps = {
  titulo: string
  descricao: string
  rota: string
  children: React.ReactNode
}

export default function Card({
  titulo,
  descricao,
  rota,
  children
}: CardProps) {

  const navigate = useNavigate()

  return (
    <div className="p-4 md:w-1/2 xl:w-1/3">
      
      <button
        onClick={() => navigate(rota)}
        className="h-full w-full rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl"
      >

        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
          {children}
        </div>

        <h2 className="mb-2 text-lg font-bold text-gray-900">
          {titulo}
        </h2>

        <p className="leading-relaxed text-gray-600">
          {descricao}
        </p>

      </button>
    </div>
  )
}