import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PanelProvider from '../contexts/panel.provider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PanelProvider>
      <Component {...pageProps} />
    </PanelProvider>
  )
}

export default MyApp
