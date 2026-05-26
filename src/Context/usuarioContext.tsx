import { createContext, useContext, useState } from 'react'

type UsuarioContextType = {
  nomeUsuario: string
  setNomeUsuario: (nome: string) => void
}

const UsuarioContext = createContext<UsuarioContextType | undefined>(undefined)

export function UsuarioProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [nomeUsuario, setNomeUsuario] = useState('Usuário')

  return (
    <UsuarioContext.Provider
      value={{
        nomeUsuario,
        setNomeUsuario
      }}
    >
      {children}
    </UsuarioContext.Provider>
  )
}

export function useUsuario() {
  const context = useContext(UsuarioContext)

  if (!context) {
    throw new Error('useUsuario deve ser usado dentro de UsuarioProvider')
  }

  return context
}