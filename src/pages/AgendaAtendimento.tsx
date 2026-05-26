import { useState } from 'react'

import MenuNavegacao from '../components/layout/MenuNavegacao'
import MenuVertical from '../components/layout/MenuVertical'
import Footer from '../components/layout/Footer'

import Calendario from '../components/UI/Calendario'

export function AgendaAtendimento() {
    const [data, setData] = useState<Date | null>(new Date())
    const [horario, setHorario] = useState('')
    const [motivo, setMotivo] = useState('')

    const horarios = [
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '14:00',
        '15:00',
        '16:00'
    ]
     return (
    <>
      <MenuNavegacao />

      <div className="flex min-h-screen bg-gray-50">

        <MenuVertical />

        <main className="flex-1 p-8">

          <section className="mb-10 text-center">

            <h1 className="mb-4 text-5xl font-extrabold text-purple-700">
              Agendamento de Atendimento
            </h1>

            <p className="mx-auto max-w-3xl text-lg text-gray-700">
              Escolha uma data, horário e informe brevemente
              o motivo do atendimento psicológico.
            </p>

          </section>

          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-md">

            {/* Calendário */}
            <div className="mb-6">

              <Calendario
                dataSelecionada={data}
                onChange={setData}
              />

            </div>

            {/* Horários */}
            <div className="mb-6">

              <label className="mb-2 block font-medium text-gray-700">
                Horário disponível
              </label>

              <select
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
                className="w-full rounded-xl border border-gray-300 p-3 focus:border-purple-500 focus:outline-none"
              >
                <option value="">
                  Selecione um horário
                </option>

                {horarios.map((hora) => (
                  <option key={hora} value={hora}>
                    {hora}
                  </option>
                ))}

              </select>

            </div>

            {/* Motivo */}
            <div className="mb-6">

              <label className="mb-2 block font-medium text-gray-700">
                Motivo do atendimento
              </label>

              <textarea
                rows={5}
                value={motivo}
                onChange={(e) => setMotivo(e.target.value)}
                placeholder="Descreva brevemente o motivo do atendimento..."
                className="w-full rounded-xl border border-gray-300 p-3 focus:border-purple-500 focus:outline-none"
              />

            </div>

            {/* Resumo */}
            <div className="mb-6 rounded-xl bg-purple-50 p-4">

              <h2 className="mb-2 font-bold text-purple-700">
                Resumo do Agendamento
              </h2>

              <p>
                <strong>Data:</strong>{' '}
                {data
                  ? data.toLocaleDateString('pt-BR')
                  : 'Não selecionada'}
              </p>

              <p>
                <strong>Horário:</strong>{' '}
                {horario || 'Não selecionado'}
              </p>

            </div>

            {/* Botão */}
            <button
             onClick={() => alert( 'Seu atendimento foi agendado! Confira os detalhes do seu atendimento no e-mail.')}
             className="w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700"
            >
              Confirmar Agendamento
            </button>

          </div>

        </main>

      </div>

      <Footer />
    </>
  )
}