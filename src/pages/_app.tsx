import { ChakraProvider } from '@chakra-ui/react'

import { AppProps } from 'next/app'

import Panel from '~/components/Panel'

import AppProvider from '~/contexts'
import { theme } from '~/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AppProvider>
        <Panel>
          <Component {...pageProps} />
        </Panel>
      </AppProvider>
    </ChakraProvider>
  )
}

export default MyApp
