import { StackScreenProps } from '@react-navigation/stack'
import { translate } from 'core'
import { useAppDispatch, useAppSelector } from 'hooks'
import { MemoStackParams } from 'navigation/MemoNavigator'
import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { add, remove } from 'store/slice'
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
import { v4 as uuid4 } from 'uuid'
import { MemoType } from '../../../types/memo'

type Props = {} & StackScreenProps<MemoStackParams, 'Memo'>

export const Memo = ({ navigation }: Props) => {
  const dispatch = useAppDispatch()
  const { memoList } = useAppSelector((state) => state.memo)
  const { colors } = useTheme()

  const onRemove = (id: string): void => {
    console.log('>>>removing', id)
    dispatch(remove(id))
  }

  const onAdd = () => {
    const date = new Date().toISOString().slice(0, 10)
    dispatch(
      add({
        id: uuid4(),
        title: '제목없음',
        description: '내용없음',
        createdAt: date,
        updatedAt: date,
      })
    )
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `메모리스트 ${
        memoList?.length ? '(' + memoList.length + ')' : ''
      }`,
    })
  }, [memoList])

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
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        data={memoList}
        keyExtractor={(_, index) => `${index}`}
        ItemSeparatorComponent={() => (
          <View height={0.2} backgroundColor="grey1" />
        )}
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
