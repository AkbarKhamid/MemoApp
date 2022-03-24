import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from 'store'
import { MemoType } from '../../../types/memo'
//types

type SliceState = {
  memoList: MemoType[]
}

const initialState: SliceState = {
  memoList: [],
}

export const memoSlice = createSlice({
  name: 'memo',
  initialState,
  reducers: {
    setMemoList: (state, action: PayloadAction<MemoType[]>) => ({
      ...state,
      memoList: action.payload,
    }),
  },
})

export const { setMemoList } = memoSlice.actions

export default memoSlice.reducer

export const add =
  (newMemo: MemoType): AppThunk =>
  (dispatch, getState) => {
    const { memoList } = getState().memo
    dispatch(setMemoList([...memoList, newMemo]))
  }

export const remove =
  (id: string): AppThunk =>
  (dispatch, getState) => {
    const { memoList } = getState().memo
    const updatedMemoList = memoList.filter((item) => item.id !== id)
    dispatch(setMemoList(updatedMemoList))
  }

export const edit =
  (id: string, title: string, description: string): AppThunk =>
  (dispatch, getState) => {
    const { memoList } = getState().memo
    const index = memoList.findIndex((item) => item.id === id)
    if (index > -1) {
      const listCpy = memoList
      listCpy[index] = {
        id,
        title,
        description,
        createdAt: listCpy[index].createdAt,
        updatedAt: new Date().toISOString().slice(0, 10),
      }
      dispatch(setMemoList(listCpy))
    }
  }
