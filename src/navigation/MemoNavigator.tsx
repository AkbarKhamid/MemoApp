import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { Memo } from 'screens'
import { Detail } from 'screens/Memo/Detail'

export type MemoStackParams = {
  Memo: undefined
  MemoDetail: { id: string }
  MemoEdit: { id: string }
}

const Stack = createStackNavigator()

export const MemoNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Memo" component={Memo} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Edit" component={Detail} />
    </Stack.Navigator>
  )
}
