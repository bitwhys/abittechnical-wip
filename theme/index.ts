import { createTheme } from '@mui/material/styles'
import { orange } from '@mui/material/colors'

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: { main: '#4827EC' },
    secondary: { main: '#E70D4F' },
    error: { main: orange.A400 },
  },
})

export default theme
