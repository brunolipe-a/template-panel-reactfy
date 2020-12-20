import { ChakraProvider } from '@chakra-ui/react'

import { AppProps } from 'next/app'

import AppProvider from '~/contexts'
import { theme } from '~/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ChakraProvider>
  )
}

export default MyApp
