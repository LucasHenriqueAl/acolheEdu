import Avatar from '@mui/material/Avatar'

type AvatarUsuarioProps = {
  nome?: string
}

export default function AvatarUsuario({
  nome = 'U'
}: AvatarUsuarioProps) {
  return (
    <Avatar
      sx={{ bgcolor: '#9333ea' }}
      alt={nome}
    >
      {nome.charAt(0).toUpperCase()}
    </Avatar>
  )
}