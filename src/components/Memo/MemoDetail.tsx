import { translate } from 'core'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Text, View } from 'ui'
import { MemoType } from '../../../types/memo'
type Props = {
  memo: MemoType
  editable: boolean
  onRemove: () => void
  onEdit: (newMemo: MemoType) => void
}

export const MemoDetail = ({
  memo,
  onRemove,
  onEdit,
  editable = true,
}: Props) => {
  const [title, setTitle] = useState(memo?.title)
  const [description, setDescription] = useState(memo?.description)

  const onEditPress = () => {
    onEdit({ ...memo, title, description })
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
            onPress={onEditPress}
            fontSize={15}
            fontWeight="bold"
            color="textGreen"
          >
            {editable
              ? translate('actions.saveEdit')
              : translate('actions.edit')}
          </Text>
          <Text
            onPress={onRemove}
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
        value={description}
        onChangeText={setDescription}
        multiline={true}
        autoFocus={editable}
      />
    </View>
  )
}
