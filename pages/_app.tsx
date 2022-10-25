import Head from 'next/head'
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, type EmotionCache } from '@emotion/react'
import { createEmotionCache } from '@/utils'
import theme from '@/theme'
// import Header from '@/components/Header'

const Header = dynamic(import('@/components/Header'), { ssr: false })
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface CustomAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp = ({ Component, pageProps, emotionCache = clientSideEmotionCache }: CustomAppProps) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
)

export default MyApp
