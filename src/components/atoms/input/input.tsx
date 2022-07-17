import { InputBase, OutlinedInput } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Input = (props: { placeholder?: string }) => {
  const { placeholder = '' } = props
  return <SInput placeholder={placeholder} />
}

const SInput = styled(OutlinedInput)`
  background-color: #fcfcfb;
  // Muiのデフォルトのホーバーをオーバーライドしている
  &:hover {
    border-color: #bdbdbd;
  }
`
