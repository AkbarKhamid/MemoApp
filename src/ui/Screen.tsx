import React from 'react'
import { ErrorHandler } from './ErrorHandler'
import { View } from './View'

type Props = {
  children: React.ReactNode
}

export const Screen = ({ children }: Props) => (
  <ErrorHandler>
    <View
      justifyContent="center"
      flexDirection="column"
      paddingHorizontal="m"
      flex={1}
      bg="background"
    >
      {children}
    </View>
  </ErrorHandler>
)
