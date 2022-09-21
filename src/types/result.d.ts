import { ITypes } from 'types/form';

export interface IResultState {
  key: string;
  title: string;
  type: ITypes;
  value: string | Array<string>;
}

export interface IResultStore {
  title: string;
  result: Array<IResultState>;
}
