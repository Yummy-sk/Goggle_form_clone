export type ITypes =
  | 'short-text'
  | 'long-text'
  | 'radio'
  | 'checkbox'
  | 'dropdown'
  | 'title';
export interface IFormState {
  idx: number;
  key: string;
  title: string;
  description?: string;
  type: ITypes;
  isRequired?: boolean;
  isActivated: boolean;
  options?: string | Array<string>;
  isEtc?: boolean;
}

export interface IState {
  items: Array<IFormState>;
}

export interface ISelection {
  key: string;
  title: string;
  type: ITypes;
  isRequired: boolean;
  value: string | Array<string>;
  options: string | Array<string>;
  error: boolean;
  isEtc: boolean;
}

export interface IStateChangeProps {
  nextValue: string | Array<string>;
}
