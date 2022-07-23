import { ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

type ColorType = 'primary' | 'secondary'
type Props = {
  children: ReactNode
  color: ColorType
}

export const BaseButton = (props: Props) => {
  const { children, color } = props

  return (
    <SBaseButton variant="contained" color={color}>
      {children}
    </SBaseButton>
  )
}

const SBaseButton = styled(Button)`
  border-radius: 9999px;
  color: white;
  background-image: ${({ theme, color }) => {
    if (color === 'primary') {
      return `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`
    }
    if (color === 'secondary') {
      return `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`
    }
  }};
`
