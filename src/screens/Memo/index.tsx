import { translate } from 'core'
import React, { memo } from 'react'
import { FlatList } from 'react-native'
import {
  Button,
  HEIGHT,
  Pressable,
  Screen,
  Text,
  useTheme,
  View,
  WIDTH,
} from 'ui'
import { Close } from 'ui/icons/Close'
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
  const { colors } = useTheme()

  const onRemove = (id: string): void => {
    console.log('>>> removing', id)
  }

  const onAdd = () => {
    console.log('onAdd')
  }

  const renderItem = (item: MemoType) => (
    <Pressable
      flexDirection="row"
      justifyContent="space-between"
      padding="m"
      borderColor="black"
      width="100%"
    >
      <View>
        <View width="100%" flexDirection="row">
          <Text fontWeight="600" fontSize={16}>
            {item.title}
          </Text>
          <Text paddingLeft="m" style={{ margin: 'auto' }} color="grey3">
            {item.updatedAt}
          </Text>
        </View>
        <Text color="grey2" fontSize={14} paddingTop="s">
          {item.description}
        </Text>
      </View>
      <Close
        style={{ margin: 'auto' }}
        color={colors.grey3}
        height={35}
        width={35}
        onPress={() => onRemove(item.id)}
      />
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
          onPress={onAdd}
        />
      </View>
    </Screen>
  )
}
