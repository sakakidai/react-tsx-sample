import { styled } from '@mui/material/styles'

import { Container } from '@mui/material'

export const HomePage = () => {
  return (
    <SContainer>
      <h2>HOME PAGE</h2>
    </SContainer>
  )
}

const SContainer = styled(Container)`
  margin-top: 16px;
  margin-bottom: 16px;
`
