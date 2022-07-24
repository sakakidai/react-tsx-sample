import { ChangeEvent } from 'react'
import { OutlinedInput } from '@mui/material'
import { styled } from '@mui/material/styles'

type Props = {
  placeholder?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: Props) => {
  const { placeholder = '', value, onChange } = props
  return <SInput placeholder={placeholder} value={value} onChange={onChange} />
}

const SInput = styled(OutlinedInput)`
  background-color: #fcfcfb;
  // Muiのデフォルトのホーバーをオーバーライドしている
  &:hover {
    border-color: #bdbdbd;
  }
`
