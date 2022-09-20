import { IFormState, ITypes } from 'types/form';

interface IGetStateWhenChangeOption {
  type: ITypes;
  form: IFormState;
}

export function getStateWhenChangeOption({
  type,
  form,
}: IGetStateWhenChangeOption) {
  const { options } = form;

  if (options !== undefined) {
    if (Array.isArray(options)) {
      switch (type) {
        case 'short-text':
        case 'long-text':
          return { ...form, type, options: '', isEtc: false };
        case 'dropdown':
          return { ...form, type, isEtc: false };
        default:
          return { ...form, type };
      }
    }

    if (typeof options === 'string') {
      switch (type) {
        case 'dropdown':
        case 'radio':
        case 'checkbox':
          return { ...form, type, options: ['옵션 1'], isEtc: false };
        default:
          return { ...form, type, options: '', isEtc: false };
      }
    }
  }

  return null;
}
