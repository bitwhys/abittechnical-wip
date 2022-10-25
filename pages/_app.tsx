import Head from 'next/head'
import type { AppProps } from 'next/app'
import { CacheProvider, type EmotionCache } from '@emotion/react'
import { createEmotionCache } from '@/utils'
import { ThemeProvider } from '@/theme'
import Header from '@/ui/Header'

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
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
)

export default MyApp
