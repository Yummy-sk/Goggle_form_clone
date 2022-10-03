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
          options: ['옵션 1'],
          isEtc: false,
        },
      ];

      state.items = nextState;
    },
    removeForm: {
      reducer: (state: IState, action: IAction<INextState>) => {
        state.items = action.payload.nextState;
      },
      prepare: ({ key, state }: IRemoveFormProps): IAction<INextState> => {
        const nextState = state.filter(item => item.key !== key);
        const curLength = nextState.length;

        if (curLength >= 1) {
          return {
            payload: {
              nextState: nextState.map((item, idx) => ({
                ...item,
                idx: idx + 1,
                isActivated: idx + 1 === curLength,
              })),
            },
          };
        }

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
                { ...item, idx: index + 1, isActivated: false },
                { ...item, idx: index + 2, key: nanoid(), isActivated: true },
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
    setFormTitle: {
      reducer: (state: IState, action: IAction<INextState>) => {
        state.items = action.payload.nextState;
      },
      prepare: ({
        key,
        state,
        title,
      }: {
        key: string;
        state: Array<IFormState>;
        title: string;
      }): IAction<INextState> => {
        const nextState = state.map(item =>
          item.key === key ? { ...item, title } : item,
        );

        return {
          payload: {
            nextState,
          },
        };
      },
    },
    setOption: (
      state: IState,
      action: IAction<{
        key: string;
        options: Array<string> | string;
      }>,
    ) => {
      const { key, options } = action.payload;

      const nextState = state.items.map(item => {
        if (item.key === key) {
          return { ...item, options };
        }

        return item;
      });

      state.items = nextState;
    },
    setEtc: (
      state: IState,
      action: IAction<{ key: string; isEtc: boolean }>,
    ) => {
      const { key, isEtc } = action.payload;

      const nextState = state.items.map(item => {
        if (item.key === key) {
          return { ...item, isEtc };
        }

        return item;
      });

      state.items = nextState;
    },
    setFormType: (
      state: IState,
      action: IAction<{ key: string; nextState: IFormState }>,
    ) => {
      const { key, nextState } = action.payload;

      const items = state.items.map(item => {
        if (item.key === key) {
          return { ...item, ...nextState };
        }

        return item;
      });

      state.items = items;
    },
    setFormSequence: (state: IState, action: IAction<INextState>) => {
      state.items = action.payload.nextState;
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
  setFormTitle,
  setOption,
  setEtc,
  setFormType,
  setFormSequence,
} = formSlice.actions;

export default formSlice.reducer;
