import { translate, useAuth } from 'core'
import React, { memo } from 'react'
import { FlatList } from 'react-native'
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
  // const { data, isLoading } = useMemos()
  const renderItem = (item: MemoType) => (
    <Pressable padding="m" borderColor="black" width="100%">
      <View width="100%" justifyContent="space-between">
        <Text>{item.title}</Text>
        <Text>{item.updatedAt}</Text>
      </View>
      <Text>{item.description}</Text>
    </Pressable>
  )
  return (
    <Screen>
      <View
        position="absolute"
        width={WIDTH}
        height={HEIGHT}
        justifyContent="center"
        alignContent="center"
      >
        {/* {isLoading && <ActivityIndicator color="#000" />} */}
      </View>
      <FlatList
        contentContainerStyle={{ flex: 1, height: HEIGHT }}
        data={tempMemo}
        keyExtractor={(_, index) => `${index}`}
        ItemSeparatorComponent={memo(() => (
          <View height={0.2} backgroundColor="grey1" />
        ))}
        renderItem={({ item }) => renderItem(item)}
      />
      <View position="absolute" width={WIDTH} bottom={30}>
        <Button
          label={translate('actions.add')}
          marginHorizontal="m"
          variant="primary"
          backgroundColor="black"
          onPress={signOut}
        />
      </View>
    </Screen>
  )
}
