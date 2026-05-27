import { useState } from 'react'

export default function Chat() {
  const [mensagem, setMensagem] = useState('')
  const [mensagens, setMensagens] = useState([
    {
      texto: 'Olá! Como posso ajudar você hoje?',
      remetente: 'psicologa'
    }
  ])

  const enviarMensagem = () => {
    if (!mensagem.trim()) return

    setMensagens([
      ...mensagens,
      {
        texto: mensagem,
        remetente: 'aluno'
      }
    ])

    setMensagem('')
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">

      <div className="mb-4 h-96 overflow-y-auto space-y-4">

        {mensagens.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs rounded-2xl p-3 ${
              msg.remetente === 'aluno'
                ? 'ml-auto bg-purple-600 text-white'
                : 'bg-purple-100 text-gray-800'
            }`}
          >
            {msg.texto}
          </div>
        ))}

      </div>

      <div className="flex gap-2">

        <input
          type="text"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="flex-1 rounded-xl border border-gray-300 p-3 focus:border-purple-500 focus:outline-none"
        />

        <button
          onClick={enviarMensagem}
          className="rounded-xl bg-purple-600 px-5 py-3 text-white hover:bg-purple-700"
        >
          Enviar
        </button>

      </div>

    </div>
  )
}