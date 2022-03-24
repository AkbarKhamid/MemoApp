import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { Login } from 'screens'

export type AuthStackParams = {
  Login: undefined
  SignUp: undefined
}

const Stack = createStackNavigator()

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}
