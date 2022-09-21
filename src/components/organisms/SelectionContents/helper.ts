import { ITypes, IFormState, ISelection } from 'types/form';

function getInitialValue({ type }: { type: ITypes }) {
  switch (type) {
    case 'short-text':
    case 'long-text':
    case 'dropdown':
    case 'radio':
      return '';
    case 'checkbox':
      return [];
    default:
      return '';
  }
}

export function getInitialState({
  formState,
}: {
  formState: Array<IFormState>;
}): Array<ISelection> {
  return formState.map(form => {
    const { key, title, type, isRequired, options, isEtc } = form;

    return {
      key,
      title,
      type,
      isRequired: isRequired || false,
      options: options || '',
      value: getInitialValue({ type }),
      error: false,
      isEtc: isEtc || false,
    };
  });
}

export function validateState({
  values,
}: {
  values: Array<ISelection>;
}): boolean {
  return values.every(value => {
    const { isRequired, value: selectionValue, type } = value;

    if (isRequired) {
      switch (type) {
        case 'short-text':
        case 'long-text':
        case 'dropdown':
          return selectionValue !== '';
        case 'radio':
        case 'checkbox':
          return selectionValue.length > 0;
        default:
          return false;
      }
    }
    return true;
  });
}

export function onSubmit({ values }: { values: Array<ISelection> }) {
  console.log(values);
}
