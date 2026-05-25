import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import App from './App.tsx'
import { TelaInicial } from './pages/TelaInicial.tsx'
import { Contato } from './pages/Contato.tsx'
import { SobreNos } from './pages/SobreNos.tsx'
import {Ajuda} from './pages/Ajuda.tsx'
import {Configuracoes} from './pages/Configuracoes.tsx'
import { DiarioEmocional } from './pages/DiarioEmocional.tsx'
import { ApoioPsicologico } from './pages/ApoioPsicologico.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/inicio" element={<TelaInicial />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre_nos" element={<SobreNos />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/diario_emocional" element={<DiarioEmocional/> } />
        <Route path="/apoio_psicologico" element={<ApoioPsicologico/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
