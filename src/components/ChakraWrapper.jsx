import React from 'react';
import App from '../App';

import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import { theme as proTheme } from '@chakra-ui/pro-theme'
import { extendTheme, theme as baseTheme, ColorModeScript } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'

const { Button } = chakraTheme.components

export const theme = extendTheme(
    {
      colors: { ...baseTheme.colors, brand: baseTheme.colors.messenger },
      initialColorMode: 'light',
      useSystemColorMode: false,
    },
    proTheme
)

const ChakraWrapper = () => {
  return (
    <ChakraBaseProvider theme={theme}>
        <App />
    </ChakraBaseProvider>
  )
}

export default ChakraWrapper