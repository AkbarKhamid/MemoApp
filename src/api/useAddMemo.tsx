import { useMutation } from 'react-query'
import { MemoType } from '../../types/memo'
import { client } from './client'

export function useAddMemo() {
  return useMutation((data: MemoType) => client.post('/memos', data))
}
