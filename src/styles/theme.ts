import { extendTheme } from '@chakra-ui/react'

import { shade } from 'polished'

export const theme = extendTheme({
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif'
  },
  colors: {
    primary: {
      200: '#7F5FBF',
      500: '#6946af',
      700: shade(0.1, '#6946af')
    }
  }
})
