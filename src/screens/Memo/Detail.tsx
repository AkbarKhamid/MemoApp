import { API_URL } from '@env'
import { StackScreenProps } from '@react-navigation/stack'
import { useMemos } from 'api'
import { translate, useAuth } from 'core'
import { useAppDispatch, useAppSelector } from 'hooks'
import { MemoStackParams } from 'navigation/MemoNavigator'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { Back, Button, Screen, showErrorMessage, Text, View } from 'ui'
type Props = {} & StackScreenProps<MemoStackParams, 'Detail'>

export const Detail = ({ route, navigation }: Props) => {
  const { signOut } = useAuth()
  const dispatch = useAppDispatch()
  const memo = useAppSelector((state) =>
    state.memo.memoList.find((item) => item.id == route.params.id)
  )
  const [newTitle, setNewTitle] = useState(memo?.title)
  const [newDescription, setNewDescription] = useState(memo?.description)

  useEffect(() => {
    navigation.setOptions({
      headerTitle: memo?.title,
      headerLeft: () => (
        <Back style={{ marginLeft: 15 }} onPress={() => navigation.goBack()} />
      ),
    })
  }, [])

  const { data, isLoading } = useMemos()
  return (
    <Screen>
      <View flex={1} justifyContent="center">
        <Text variant="header" textAlign="center">
          {translate('name')}
        </Text>
        <Text variant="body" textAlign="center">
          This is An ENV Var : {API_URL}
        </Text>
        {isLoading && <ActivityIndicator color="#000" />}

        <Text variant="body" textAlign="center">
          Data from Api : {JSON.stringify(data)}
        </Text>
        <Button label="LogOut" onPress={signOut} />
        <Button
          variant="secondary"
          label="Show message"
          onPress={() => showErrorMessage()}
        />
      </View>
    </Screen>
  )
}
