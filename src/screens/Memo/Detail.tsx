import { StackScreenProps } from '@react-navigation/stack'
import { MemoDetail } from 'components/Memo'
import { useAppDispatch, useAppSelector } from 'hooks'
import { MemoStackParams } from 'navigation/MemoNavigator'
import React, { useEffect } from 'react'
import { remove } from 'store/slice'
import { Back, Screen, showErrorMessage } from 'ui'
type Props = {} & StackScreenProps<MemoStackParams, 'Detail'>

export const Detail = ({ route, navigation }: Props) => {
  const memo = useAppSelector((state) =>
    state.memo.memoList.find((item) => item.id == route.params.id)
  )

  const dispatch = useAppDispatch()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: memo?.title,
      headerLeft: () => (
        <Back style={{ marginLeft: 15 }} onPress={() => navigation.goBack()} />
      ),
    })
  }, [])

  const removeMemo = () => {
    try {
      if (memo !== undefined) {
        dispatch(remove(memo.id))
        navigation.goBack()
      }
    } catch (error) {
      showErrorMessage()
    }
  }

  return memo ? (
    <Screen>
      <MemoDetail
        memo={memo}
        onEdit={() => navigation.navigate('Edit', { id: memo.id })}
        onRemove={removeMemo}
        editable={false}
      />
    </Screen>
  ) : null
}
