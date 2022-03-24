import { useQuery } from 'react-query'
import { MemoType } from '../../types/memo'
import { client } from './client'

const getMemos = async () => {
  const { data } = await client.get('/memos')
  return data
}

export function useMemos() {
  return useQuery<MemoType[]>('tasks', getMemos)
}
