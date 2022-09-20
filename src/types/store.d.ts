import { store } from 'store';
import { IFormState } from 'types/form';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface IAction<T> {
  payload: T;
}

export interface INextState {
  nextState: Array<IFormState>;
}

export interface IRemoveFormProps {
  key: string;
  state: Array<IFormState>;
}

export interface IDuplateFormProps {
  targetItem: IFormState;
  state: Array<IFormState>;
}

export type ISetRequiredProps = IRemoveFormProps;

export type ActionHandler = ({ formKey }: { formKey: string }) => void;

export interface ITitleForm {
  type: 'title' | 'description';
  value: string;
}
