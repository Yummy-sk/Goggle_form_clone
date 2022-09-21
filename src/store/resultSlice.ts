/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { IResultStore, IResultState } from 'types/result';
import { IAction } from 'types/store';

const initialState: IResultStore = {
  title: '제목 없는 설문지',
  result: [],
};

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    updateTitle: (state: IResultStore, action: IAction<{ title: string }>) => {
      state.title = action.payload.title;
    },
    updateResult: (
      state: IResultStore,
      action: IAction<Array<IResultState>>,
    ) => {
      state.result = action.payload;
    },
    initState: (state: IResultStore) => {
      state.title = initialState.title;
      state.result = initialState.result;
    },
  },
});

export const { updateTitle, updateResult, initState } = resultSlice.actions;

export default resultSlice.reducer;
