import { ThemeProvider } from '@mui/material/styles'
import { mainTheme } from 'components/theme'

import { Home } from 'components/pages/Home'

export const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Home />
    </ThemeProvider>
  )
}
