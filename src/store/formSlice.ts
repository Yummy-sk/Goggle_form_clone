/* eslint-disable no-param-reassign */
import { createSlice, nanoid } from '@reduxjs/toolkit';
import { IState } from 'types/form';

const initialState: IState = {
  items: [
    {
      idx: 1,
      key: nanoid(),
      title: '제목 없는 설문지',
      description: '',
      type: 'title',
      isActivated: true,
    },
  ],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setActivated: (state, action) => {
      const { key } = action.payload;
      const nextState = state.items.map(item =>
        item.key === key
          ? { ...item, isActivated: true }
          : { ...item, isActivated: false },
      );

      state.items = nextState;
    },
  },
});

export const { setActivated } = formSlice.actions;

export default formSlice.reducer;
