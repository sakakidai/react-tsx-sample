import { OutlinedInput } from '@mui/material'

export const Input = (props: { placeholder?: string }) => {
  const { placeholder = '' } = props
  return <OutlinedInput placeholder={placeholder} />
}
