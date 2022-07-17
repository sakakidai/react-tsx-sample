import { ThemeProvider, styled } from '@mui/material/styles'
import { mainTheme } from 'components/theme'

import { Home } from 'components/pages/Home'

export const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <SContainer>
        <Home />
      </SContainer>
    </ThemeProvider>
  )
}

const SContainer = styled('div')`
  min-height: 100vh;
  background-color: #fdf5f5;
`
