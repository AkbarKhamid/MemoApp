import { useMemos } from 'api'
import { translate, useAuth } from 'core'
import React, { memo } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { Button, HEIGHT, Pressable, Screen, Text, View, WIDTH } from 'ui'
import { MemoType } from '../../../types/memo'

const tempMemo = [
  {
    // unique string 값
    id: 'AMIFE-6AEM-EFIAM-MEIFE',
    title: 'memo의 제목입니다',
    description: 'memo의 상세 내용입니다.',
    // memo의 생성날짜
    createdAt: '2021-01-06',
    // memo의 업데이트 날짜
    updatedAt: '2021-02-01',
  },
  {
    // unique string 값
    id: 'AMIFE-6AEM-EFIAM-MEIFE12',
    title: 'memo의 제목입니다',
    description: 'memo의 상세 내용입니다.',
    // memo의 생성날짜
    createdAt: '2021-01-06',
    // memo의 업데이트 날짜
    updatedAt: '2021-02-01',
  },
]

export const Memo = () => {
  const { signOut } = useAuth()
  const { data, isLoading } = useMemos()
  const renderItem = (item: MemoType) => (
    <Pressable borderColor="black">
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </Pressable>
  )
  return (
    <Screen>
      <View
        position="absolute"
        zIndex={999}
        width={WIDTH}
        height={HEIGHT}
        justifyContent="center"
        alignContent="center"
      >
        {isLoading && <ActivityIndicator color="#000" />}
      </View>
      <View flex={1} justifyContent="center">
        <Text variant="header" textAlign="center">
          {translate('actions.add')}
        </Text>
      </View>
      <FlatList
        contentContainerStyle={{ paddingBottom: 10 }}
        data={tempMemo}
        keyExtractor={(_, index) => `${index}`}
        ItemSeparatorComponent={memo(() => (
          <View height={0.2} borderBottomColor="grey1" />
        ))}
        renderItem={({ item }) => renderItem(item)}
      />
      <Button label="LogOut" onPress={signOut} />
    </Screen>
  )
}
