export interface IFormState {
  idx: number;
  key: string;
  title: string;
  description?: string;
  type:
    | 'short-text'
    | 'long-text'
    | 'radio'
    | 'checkbox'
    | 'dropdown'
    | 'title';
  isRequired?: boolean;
  isActivated: boolean;
  options?: string | Array<string>;
}

export interface IState {
  items: Array<IFormState>;
}
