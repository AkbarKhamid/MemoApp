import { API_URL } from '@env'
import { useMemos } from 'api'
import { translate, useAuth } from 'core'
import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Button, Screen, showErrorMessage, Text, View } from 'ui'

export const Detail = () => {
  const { signOut } = useAuth()
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
