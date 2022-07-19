import { styled } from '@mui/material/styles'

import { CircularProgress } from '@mui/material'

export const Spinner = () => {
  return (
    <SWrapper>
      <CircularProgress />
    </SWrapper>
  )
}

const SWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
