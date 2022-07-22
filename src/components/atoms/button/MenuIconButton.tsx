import { memo } from 'react'

import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

type Props = {
  onOpen: () => void
}

export const MenuIconButton = memo((props: Props) => {
  const { onOpen } = props
  return (
    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={onOpen}>
      <MenuIcon />
    </IconButton>
  )
})
