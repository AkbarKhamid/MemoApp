import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { Memo } from 'screens'
import { Detail } from 'screens/Memo/Detail'
import { Edit } from 'screens/Memo/Edit'

export type MemoStackParams = {
  Memo: undefined
  Detail: { id: string }
  Edit: { id: string }
}

const Stack = createStackNavigator()

export const MemoNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Memo" component={Memo} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Edit" component={Edit} />
    </Stack.Navigator>
  )
}
