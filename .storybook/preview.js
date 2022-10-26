// static files for older browsers
import '@fontsource/cabin/300.css' // Weight 300.
import '@fontsource/cabin/400.css' // Weight 400.
import '@fontsource/cabin/500.css' // Weight 500.
import '@fontsource/cabin/700.css' // Weight 700.
// variable font for modern browsers
import '@fontsource/cabin/variable.css'
import { ThemeProvider } from '../theme' // Contains ONLY variable weights and no other axes.

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withThemeProvider = Story => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
)

export const decorators = [withThemeProvider]
