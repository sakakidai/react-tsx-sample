import { ReactNode } from 'react'
import { styled } from '@mui/material/styles'

export const Wrapper = (props: { children: ReactNode }) => {
  const { children } = props
  return <SWrapper>{children}</SWrapper>
}

const SWrapper = styled('div')`
  margin: 0;
  background-color: #fdf5f5;
  width: 100%;
  flex-grow: 1;
`
