import { StackActions } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { MemoDetail } from 'components/Memo'
import { useAppDispatch, useAppSelector } from 'hooks'
import { MemoStackParams } from 'navigation/MemoNavigator'
import React, { useEffect } from 'react'
import { edit, remove } from 'store/slice'
import { Back, Screen, showErrorMessage } from 'ui'
import { MemoType } from '../../../types/memo'

type Props = {} & StackScreenProps<MemoStackParams, 'Edit'>

export const Edit = ({ route, navigation }: Props) => {
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

  const saveEdit = (newMemo: MemoType) => {
    try {
      dispatch(edit(newMemo.id, newMemo.title, newMemo.description))
      navigation.goBack()
    } catch (error) {
      showErrorMessage()
    }
  }

  const removeMemo = () => {
    try {
      if (memo !== undefined) {
        dispatch(remove(memo.id))
        navigation.dispatch(StackActions.popToTop())
      }
    } catch (error) {
      showErrorMessage()
    }
  }

  return memo ? (
    <Screen>
      <MemoDetail
        memo={memo}
        onEdit={saveEdit}
        onRemove={removeMemo}
        editable={true}
      />
    </Screen>
  ) : null
}
