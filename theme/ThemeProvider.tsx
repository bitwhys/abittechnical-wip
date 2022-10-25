import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { type ReactNode } from 'react'
import theme from '@/theme'
import { CssBaseline, GlobalStyles } from '@mui/material'

interface ThemeProviderProps {
  children: ReactNode
}
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <MuiThemeProvider theme={theme}>
      {/*  TODO: Set global  MUI styles */}
      <GlobalStyles
        styles={{
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },
          html: {
            minHeight: '100vh',
          },
          body: {
            minHeight: '100vh',
          },
        }}
      />
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider
