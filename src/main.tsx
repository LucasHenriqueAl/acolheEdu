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

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/inicio" element={<TelaInicial />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
