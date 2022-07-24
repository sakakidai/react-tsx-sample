import { ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import { LoadingButton } from '@mui/lab'

type ColorType = 'primary' | 'secondary'
type Props = {
  children: ReactNode
  color: ColorType
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
}

export const BaseButton = (props: Props) => {
  const { children, color, disabled = false, loading = false, onClick } = props

  return (
    <SBaseButton
      variant="contained"
      color={color}
      onClick={onClick}
      disabled={disabled}
      loadingIndicator="Loading…"
      loading={loading}
    >
      {children}
    </SBaseButton>
  )
}

const SBaseButton = styled(LoadingButton)`
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
