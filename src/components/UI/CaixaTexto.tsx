type CaixaTextoProps = {
  titulo?: string
  placeholder?: string
  onClear?: () => void
  onSave?: () => void
}

export default function CaixaTexto({
  titulo = 'Notas',
  placeholder = 'Digite aqui...',
  onClear,
  onSave
}: CaixaTextoProps) {
  return (
    <div>

      <label htmlFor="notes">

        <span className="text-sm font-medium text-gray-700">
          {titulo}
        </span>

        <div className="relative mt-0.5 overflow-hidden rounded border border-gray-300 shadow-sm focus-within:ring focus-within:ring-purple-600">

          <textarea
            id="notes"
            placeholder={placeholder}
            className="w-full resize-none border-0 outline-none focus:outline-none focus:ring-0 sm:text-sm"
            rows={4}
          />

          <div className="flex items-center justify-end gap-2 p-1.5">

            <button
              type="button"
              onClick={onClear}
              className="rounded border border-transparent px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              Limpar
            </button>

            <button
              type="button"
              onClick={onSave}
              className="rounded border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100"
            >
              Salvar
            </button>

          </div>

        </div>

      </label>

    </div>
  )
}