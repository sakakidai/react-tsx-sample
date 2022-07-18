import { ReactNode } from 'react'
import { styled } from '@mui/material/styles'

export const MainWrapper = (props: { children: ReactNode }) => {
  const { children } = props

  return <SWrapper>{children}</SWrapper>
}

const SWrapper = styled('div')`
  min-height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`
