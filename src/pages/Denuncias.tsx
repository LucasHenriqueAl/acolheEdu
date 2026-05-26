import { useState } from 'react'

import MenuNavegacao from '../components/layout/MenuNavegacao'
import MenuVertical from '../components/layout/MenuVertical'
import Footer from '../components/layout/Footer'

export function Denuncias() {
  const [anonima, setAnonima] = useState(false)

  const enviarDenuncia = () => {
    alert(
      'Sua denúncia foi enviada com sucesso. A equipe responsável irá analisar o caso.'
    )
  }

  return (
    <>
      <MenuNavegacao />

      <div className="flex min-h-screen bg-gray-50">

        <MenuVertical />

        <main className="flex-1 p-8">

          <section className="mb-10 text-center">

            <h1 className="mb-4 text-5xl font-extrabold text-purple-700">
              Canal de Denúncias
            </h1>

            <p className="mx-auto max-w-4xl text-lg text-gray-700">
              Este espaço foi criado para que estudantes possam relatar
              situações de bullying, violência emocional ou qualquer
              comportamento que prejudique o bem-estar dentro da escola.
            </p>

          </section>

          <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-md">

            {/* Tipo de denúncia */}
            <div className="mb-6">

              <label className="mb-2 block font-medium text-gray-700">
                Tipo de denúncia
              </label>

              <select
                className="w-full rounded-xl border border-gray-300 p-3 focus:border-purple-500 focus:outline-none"
              >
                <option>Selecione uma opção</option>
                <option>Bullying</option>
                <option>Violência Emocional</option>
                <option>Assédio</option>
                <option>Discriminação</option>
                <option>Outro</option>
              </select>

            </div>

            {/* Local */}
            <div className="mb-6">

              <label className="mb-2 block font-medium text-gray-700">
                Onde ocorreu?
              </label>

              <input
                type="text"
                placeholder="Ex: Sala de aula, corredor, pátio..."
                className="w-full rounded-xl border border-gray-300 p-3 focus:border-purple-500 focus:outline-none"
              />

            </div>

            {/* Descrição */}
            <div className="mb-6">

              <label className="mb-2 block font-medium text-gray-700">
                Descreva o ocorrido
              </label>

              <textarea
                rows={6}
                placeholder="Relate o que aconteceu..."
                className="w-full rounded-xl border border-gray-300 p-3 focus:border-purple-500 focus:outline-none"
              />

            </div>

            {/* Anônima */}
            <div className="mb-6 flex items-center gap-3">

              <input
                type="checkbox"
                checked={anonima}
                onChange={() => setAnonima(!anonima)}
              />

              <span className="text-gray-700">
                Desejo realizar a denúncia de forma anônima
              </span>

            </div>

            {/* Aviso */}
            <div className="mb-6 rounded-xl bg-purple-50 p-4">

              <p className="text-sm text-gray-700">
                Todas as denúncias serão tratadas com sigilo e respeito.
                O objetivo deste canal é promover um ambiente escolar
                mais seguro para todos.
              </p>

            </div>

            {/* Botão */}
            <button
              onClick={enviarDenuncia}
              className="w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700"
            >
              Enviar Denúncia
            </button>

          </div>

        </main>

      </div>

      <Footer />
    </>
  )
}