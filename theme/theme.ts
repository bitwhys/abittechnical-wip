import { createTheme } from '@mui/material/styles'
import tokens from '@/theme/tokens'
import components from '@/theme/components'

// Create a theme instance
const theme = createTheme(tokens, { components })

export default theme
