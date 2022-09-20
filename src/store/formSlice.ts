/* eslint-disable no-param-reassign */
import { createSlice, nanoid } from '@reduxjs/toolkit';
import {
  IAction,
  IRemoveFormProps,
  IDuplateFormProps,
  ISetRequiredProps,
  ITitleForm,
  INextState,
} from 'types/store';
import { IState, IFormState } from 'types/form';

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
    updateTitleForm: (state, action: IAction<ITitleForm>) => {
      const { type, value } = action.payload;

      if (type === 'title') {
        state.items[0].title = value;
      }

      if (type === 'description') {
        state.items[0].description = value;
      }
    },
    setActivated: (state, action) => {
      const { key } = action.payload;
      const nextState = state.items.map(item =>
        item.key === key
          ? { ...item, isActivated: true }
          : { ...item, isActivated: false },
      );

      state.items = nextState;
    },
    addForm: (state: IState) => {
      const nextState: Array<IFormState> = [
        ...state.items.map((item, idx) => ({
          ...item,
          idx: idx + 1,
          isActivated: false,
        })),
        {
          idx: state.items.length + 1,
          key: nanoid(),
          title: '',
          type: 'radio',
          isActivated: true,
          isRequired: false,
        },
      ];

      state.items = nextState;
    },
    removeForm: {
      reducer: (state: IState, action: IAction<INextState>) => {
        state.items = action.payload.nextState;
      },
      prepare: ({ key, state }: IRemoveFormProps): IAction<INextState> => {
        const nextState = state
          .filter(item => item.key !== key)
          .map((item, idx) => ({
            ...item,
            idx: idx + 1,
            isActivated: false,
          }));

        return {
          payload: {
            nextState,
          },
        };
      },
    },
    duplicateForm: {
      reducer: (state: IState, action: IAction<INextState>) => {
        state.items = action.payload.nextState;
      },
      prepare: ({
        state,
        targetItem,
      }: IDuplateFormProps): IAction<INextState> => {
        const { idx } = targetItem;
        const nextState = state.reduce(
          (acc: Array<IFormState>, item: IFormState, index: number) => {
            if (item.idx === idx) {
              const nextItem = [
                ...acc,
                { ...item, idx: index + 1 },
                { ...item, idx: index + 2, key: nanoid() },
              ];

              return nextItem;
            }

            return [...acc, { ...item, idx: index + 1 }];
          },
          [],
        );

        return {
          payload: {
            nextState,
          },
        };
      },
    },
    setRequired: {
      reducer: (state: IState, action: IAction<INextState>) => {
        state.items = action.payload.nextState;
      },
      prepare: ({ key, state }: ISetRequiredProps): IAction<INextState> => {
        const nextState = state.map(item =>
          item.key === key ? { ...item, isRequired: !item.isRequired } : item,
        );

        return {
          payload: {
            nextState,
          },
        };
      },
    },
  },
});

export const {
  updateTitleForm,
  setActivated,
  addForm,
  removeForm,
  duplicateForm,
  setRequired,
} = formSlice.actions;

export default formSlice.reducer;
