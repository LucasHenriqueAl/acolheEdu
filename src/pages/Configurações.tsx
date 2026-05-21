import Toggle from '../components/Toggles'

export  function Configuracoes() {
  return (
    <div className="space-y-4">

      <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow-md">
        <span className="font-medium text-gray-700">
          Ativar notificações
        </span>

        <Toggle id="notificacoes" />
      </div>

    </div>
  )
}