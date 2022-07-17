import { green } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#fc9a05',
      light: '#f5c11e',
    },
    secondary: {
      main: '#ff3b4b',
      light: '#ff99a1',
    },
  },
  // 目的: MuiのOutlinedInputをhoverしたときのボーターのデフォルト値のcssをオーバーライドしたい。
  // 背景: styledでOutlinedInputのcssをオーバーライドしようとしたができなかった。
  // Doc: https://github.com/mui/material-ui/issues/13347
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:not(.Mui-disabled):not(.Mui-focused):hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'inherit',
          },
        },
      },
    },
  },
})
