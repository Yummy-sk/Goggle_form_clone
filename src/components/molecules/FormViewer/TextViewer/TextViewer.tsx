import { IFormState } from 'types/form';
import * as S from './TextViewer.style';

interface ITextViewer {
  form: IFormState;
  type: 'short-text' | 'long-text';
  isEditable: boolean;
}

export function TextViewer({ form, type, isEditable }: ITextViewer) {
  console.log(form);
  return (
    <S.Container>
      {isEditable ? (
        <div>나중에 할꺼에욤</div>
      ) : (
        <S.TextInputViewer type={type} />
      )}
    </S.Container>
  );
}
