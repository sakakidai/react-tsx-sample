import { Global, css } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import { mainTheme } from 'components/theme'

import { Router } from 'router/Router'

export const App = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={mainTheme}>
        <Router />
      </ThemeProvider>
    </>
  )
}

const GlobalStyles = css`
  body {
    font-family: '游ゴシック体', YuGothic, '游ゴシック', 'Yu Gothic', sans-serif;
    color: #333333;
    margin: 0;
    min-height: 100vh;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`
