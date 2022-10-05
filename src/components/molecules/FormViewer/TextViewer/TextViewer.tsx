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

/**
 * TextViewer
 *
 * Text 입력과 결과물을 보여주는 컴포넌트 입니다.
 *
 * isEditable이 true일 경우에는 입력이 가능하며, false일 경우에는 결과물만 보여줍니다.
 *
 * @param form
 * @param type
 * @param isEditable
 * @param handleChange
 * @returns JSX.Element
 */

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
