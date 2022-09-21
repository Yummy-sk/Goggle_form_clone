import { IFormState } from 'types/form';
import * as S from './TextViewer.style';

interface ITextViewer {
  form: IFormState;
  type: 'short-text' | 'long-text';
  isEditable: boolean;
}

interface ITextViewrProps {
  type: 'short-text' | 'long-text';
}

function TextInput({ type }: ITextViewrProps) {
  const isLongText = type === 'long-text';

  return (
    <S.TextInputArea
      id='standard-basic'
      variant='standard'
      placeholder='내 답변'
      type={type}
      multiline={isLongText}
    />
  );
}

export function TextViewer({ form, type, isEditable }: ITextViewer) {
  console.log(form);
  return (
    <S.Container>
      {isEditable ? (
        <TextInput type={type} />
      ) : (
        <S.TextInputViewer type={type} />
      )}
    </S.Container>
  );
}
