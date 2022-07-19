import { ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import { Card as MuiCard } from '@mui/material'

export const Card = (props: { children: ReactNode }) => {
  const { children } = props
  return (
    <MuiCard sx={{ maxWidth: 350 }} raised={true}>
      <SContainer>{children}</SContainer>
    </MuiCard>
  )
}

const SContainer = styled('div')`
  margin: 20px;
`
