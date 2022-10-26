import { createTheme } from '@mui/material/styles'
import palette from './palette'
import shadows from './shadows'

const tokens = createTheme({
  palette,
  shape: {
    borderRadius: 6,
  },
  shadows,
})

export default tokens
