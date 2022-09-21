import { IFormState, ISelection, IStateChangeProps } from 'types/form';
import * as S from './TextViewer.style';

interface ITextViewer {
  form: IFormState | ISelection;
  type: 'short-text' | 'long-text';
  isEditable: boolean;
  handleChange?: ({ nextValue }: IStateChangeProps) => void | null;
}

interface ITextViewrProps {
  form: ISelection;
  type: 'short-text' | 'long-text';
  handleChange: ({ nextValue }: IStateChangeProps) => void;
}

function TextInput({ form, type, handleChange }: ITextViewrProps) {
  const isLongText = type === 'long-text';

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({ nextValue: e.target.value });
  };

  return (
    <S.TextInputArea
      id='standard-basic'
      variant='standard'
      placeholder='내 답변'
      value={form.value}
      type={type}
      multiline={isLongText}
      onChange={onChange}
    />
  );
}

export function TextViewer({
  form,
  type,
  isEditable,
  handleChange,
}: ITextViewer) {
  return (
    <S.Container>
      {isEditable && handleChange ? (
        <TextInput
          form={form as ISelection}
          type={type}
          handleChange={handleChange}
        />
      ) : (
        <S.TextInputViewer type={type} />
      )}
    </S.Container>
  );
}

TextViewer.defaultProps = {
  handleChange: null,
};
