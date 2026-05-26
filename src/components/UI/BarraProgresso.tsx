type BarraProgressoProps = {
  valor: number
  titulo?: string
}

export default function BarraProgresso({
  valor,
  titulo = 'Progresso'
}: BarraProgressoProps) {
  return (
    <div
      role="progressbar"
      aria-valuenow={valor}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="flex justify-between gap-4 text-black">

        <span className="text-sm font-semibold">
          {titulo}
        </span>

        <span className="text-sm font-semibold">
          {valor}%
        </span>

      </div>

      <div className="mt-2 w-full border-2 border-black bg-white p-1 shadow-[2px_2px_0_0] shadow-black">

        <div
          className="h-3 bg-green-600 transition-all duration-500"
          style={{ width: `${valor}%` }}
        />

      </div>

    </div>
  )
}