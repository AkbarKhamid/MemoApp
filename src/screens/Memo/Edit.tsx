import { StackScreenProps } from '@react-navigation/stack'
import { MemoDetail } from 'components/Memo'
import { useAppSelector } from 'hooks'
import { MemoStackParams } from 'navigation/MemoNavigator'
import React, { useEffect } from 'react'
import { Back, Screen, showErrorMessage } from 'ui'
type Props = {} & StackScreenProps<MemoStackParams, 'Edit'>

export const Edit = ({ route, navigation }: Props) => {
  const memo = useAppSelector((state) =>
    state.memo.memoList.find((item) => item.id == route.params.id)
  )

  if (memo === undefined) {
    showErrorMessage()
    return
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: memo?.title,
      headerLeft: () => (
        <Back style={{ marginLeft: 15 }} onPress={() => navigation.goBack()} />
      ),
    })
  }, [])

  const navigateBack = () => {
    navigation.goBack()
  }

  return (
    <Screen>
      <MemoDetail
        memo={memo}
        onSuccess={navigateBack}
        onPressEdit={() => navigation.navigate('Edit', { id: memo.id })}
        editable={true}
      />
    </Screen>
  )
}
