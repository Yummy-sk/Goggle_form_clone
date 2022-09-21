import * as S from './TextInput.style';

interface ITextInputProps {
  type: 'short-text' | 'long-text';
}

export function TextInput({ type }: ITextInputProps) {
  return (
    <S.TextInputContainer>
      <S.TextInputField
        id='standard-basic'
        variant='standard'
        value={type === 'long-text' ? '장문형 텍스트' : '단문형 텍스트'}
        readOnly
        type={type}
      />
    </S.TextInputContainer>
  );
}
