interface IGetStateWhenChangeOption {
  type: 'short-text' | 'long-text' | 'radio' | 'checkbox' | 'dropdown';
  prevState: string | Array<string>;
}

export function getStateWhenChangeOption({
  type,
  prevState,
}: IGetStateWhenChangeOption) {
  if (Array.isArray(prevState)) {
    switch (type) {
      case 'short-text' || 'long-text':
        return '';
      case 'dropdown':
        if (prevState.includes('기타')) {
          return prevState.filter(item => item !== '기타');
        }
        return prevState;
      default:
        return prevState;
    }
  }

  if (type === 'short-text' || type === 'long-text') {
    return prevState;
  }

  return ['옵션 1'];
}
