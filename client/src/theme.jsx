import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import '@fontsource/anton'

const theme = createTheme({
  palette: {
    primary: {
      main: '#073b4c',
    },
    secondary: {
      main: '#118ab2',
    },
    error: {
      main: '#ef476f',
    },
    warning: {
      main: '#ffd166',
    },
    success: {
      main: '#06d6a0',
    },
  },

  typography: {
    fontFamily: 'Barlow, sans-serif',
    h2: {
      fontSize: '2.5rem',
    },
  },
})

const ThemeProvider = ({ children }) => (
  <MUIThemeProvider theme={theme}>
    <CssBaseline /> 
    <div
      style={{
        minHeight: '100vh',
        background:'#1C8791',

        filter:
          'progid:DXImageTransform.Microsoft.gradient(startColorstr="#0061FF", endColorstr="#60EFFF", GradientType=1)',
      }}
    >
      {children}
    </div>
  </MUIThemeProvider>
)

export default ThemeProvider
