import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

type CalendarioProps = {
  dataSelecionada: Date | null
  onChange: (data: Date | null) => void
}

export default function Calendario({
  dataSelecionada,
  onChange
}: CalendarioProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-gray-700">
        Selecione uma data
      </label>

      <DatePicker
        selected={dataSelecionada}
        onChange={onChange}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        className="w-full rounded-xl border border-gray-300 p-3 shadow-sm focus:border-purple-500 focus:outline-none"
      />
    </div>
  )
}