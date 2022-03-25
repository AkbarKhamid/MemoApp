import {
  BoxProps,
  TextProps,
  ThemeProvider as ReThemeProvider,
  useTheme as useRTheme,
} from '@shopify/restyle'
import * as React from 'react'

type BaseThemeType = typeof BaseTheme & {
  textVariants: { [key: string]: TextProps<typeof BaseTheme> }
  navigation: any
  buttonVariants: { [key: string]: BoxProps<typeof BaseTheme> }
}

const createTheme = <T extends BaseThemeType>(themeObject: T): T => themeObject

const BaseTheme = {
  colors: {
    text: '#202124',
    background: '#fff',
    primary: '#252629',
    secondary: '#9c27b0',
    muted: '#f1f3f4',

    // from figma file

    black: '#252629',
    grey1: '#333333',
    grey2: '#666666',
    grey3: '#C3C3C3',
    grey4: '#E4E4E4',
    white: 'white',
    red: '#EB5757',
    textGreen: '#8ACEFA',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
}

export const theme = createTheme({
  ...BaseTheme,
  navigation: {
    dark: true,
    colors: {
      primary: 'rgb(0, 122, 255)',
      background: '#252629',
      card: '#252629',
      text: '#fff',
      border: 'rgb(199, 199, 204)',
      notification: 'red',
    },
  },
  buttonVariants: {
    primary: {
      backgroundColor: 'primary',
    },
    secondary: {
      backgroundColor: 'secondary',
    },
    outline: {
      backgroundColor: 'white',
      borderColor: 'primary',
      borderWidth: 1,
    },
  },
  textVariants: {
    defaults: {},
    header: {
      fontFamily: 'Inter',
      fontWeight: 'bold',
      fontSize: 22,
      lineHeight: 42.5,
      color: 'black',
    },
    subheader: {
      fontFamily: 'Inter',
      fontWeight: '600',
      fontSize: 28,
      lineHeight: 36,
      color: 'grey1',
    },
    body: {
      fontFamily: 'Inter',
      fontSize: 15,
      lineHeight: 24,
      color: 'grey2',
    },
    button_primary: {
      fontFamily: 'Inter',
      fontSize: 16,
      lineHeight: 22,
      color: 'white',
    },
    button_secondary: {
      fontFamily: 'Inter',
      fontSize: 16,
      lineHeight: 22,
      color: 'white',
    },
    button_outline: {
      fontFamily: 'Inter',
      fontSize: 16,
      lineHeight: 22,
      color: 'text',
    },
    label: {
      fontFamily: 'Inter',
      fontSize: 13,
      lineHeight: 18,
      color: 'grey2',
      paddingVertical: 's',
    },
  },
})

export type Theme = typeof theme

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ReThemeProvider theme={theme}>{children}</ReThemeProvider>
)

export const useTheme = () => useRTheme<Theme>()
