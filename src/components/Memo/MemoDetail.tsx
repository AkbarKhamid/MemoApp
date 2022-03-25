import { translate } from 'core'
import { useAppDispatch } from 'hooks'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { edit, remove } from 'store/slice'
import { showErrorMessage, Text, View } from 'ui'
import { MemoType } from '../../../types/memo'
type Props = {
  memo: MemoType
  editable: boolean
  onSuccess: () => void
  onPressEdit?: () => void
}

export const MemoDetail = ({
  memo,
  onSuccess,
  onPressEdit,
  editable = true,
}: Props) => {
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState(memo?.title)
  const [desc, setDesc] = useState(memo?.description)

  const saveEdit = () => {
    try {
      dispatch(edit(memo.id, title, desc))
      onSuccess()
    } catch (error) {
      console.log('Error: ', error)
      showErrorMessage()
    }
  }

  const removeMemo = () => {
    try {
      dispatch(remove(memo.id))
      onSuccess()
    } catch (error) {
      showErrorMessage()
    }
  }

  const _onPressEdit = () => {
    // save the edit
    if (editable) {
      saveEdit()
      return
    }
    // navigate to edit page
    if (onPressEdit !== undefined) {
      onPressEdit()
    }
  }

  return (
    <View flex={1} paddingVertical="m">
      <View
        width="100%"
        maxHeight="20%"
        justifyContent="space-between"
        flexDirection="row"
      >
        <TextInput
          style={{ fontSize: 25, fontWeight: 'bold', maxWidth: '75%' }}
          maxLength={100}
          value={title}
          onChangeText={setTitle}
          multiline={true}
          editable={editable}
        />
        <View
          maxHeight="100%"
          width="20%"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
        >
          <Text
            onPress={_onPressEdit}
            fontSize={15}
            fontWeight="bold"
            color="textGreen"
          >
            {editable
              ? translate('actions.saveEdit')
              : translate('actions.edit')}
          </Text>
          <Text
            onPress={removeMemo}
            fontSize={15}
            fontWeight="bold"
            color="textGreen"
          >
            {translate('actions.del')}
          </Text>
        </View>
      </View>
      <View width="100%" flexDirection="row" justifyContent="flex-end">
        <Text fontSize={12} marginVertical="m" color="grey3">
          {memo?.updatedAt}
        </Text>
      </View>
      <TextInput
        editable={editable}
        value={desc}
        onChangeText={setDesc}
        multiline={true}
        autoFocus={editable}
      />
    </View>
  )
}
