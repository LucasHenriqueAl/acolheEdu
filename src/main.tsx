import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  HashRouter,
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
import { Perfil } from './pages/Perfil.tsx'
import { AgendaAtendimento } from './pages/AgendaAtendimento.tsx'
import { BemEstar } from './pages/BemEstar.tsx'
import { Denuncias } from './pages/Denuncias.tsx'
import { AtendimentoMulher } from './pages/AtendimentoMulher.tsx'
import { Conversar } from './pages/Conversa.tsx'

import { UsuarioProvider } from './Context/usuarioContext'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UsuarioProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/inicio" element={<TelaInicial />} />
          <Route path="/perfil" element={<Perfil />} /> 
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre_nos" element={<SobreNos />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/diario_emocional" element={<DiarioEmocional/> } />
          <Route path="/apoio_psicologico" element={<ApoioPsicologico/>} />
          <Route path="/agenda" element={<AgendaAtendimento />} />
          <Route path="/bem_estar" element={<BemEstar />} />
          <Route path="/denuncia" element={<Denuncias />} />
          <Route path="/atendimento_mulher" element={<AtendimentoMulher />} />
          <Route path="/conversar" element={<Conversar />} />
        </Routes>
      </HashRouter>
    </UsuarioProvider>
  </StrictMode>,
)
