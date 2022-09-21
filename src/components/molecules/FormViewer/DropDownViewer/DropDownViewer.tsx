import { IFormState } from 'types/form';
import * as S from './DropDownViewer.style';

interface IDropDownViewerProps {
  form: IFormState;
  isEditable: boolean;
}

function Viewer({ form }: { form: IFormState }) {
  const { options } = form;

  if (!Array.isArray(options) || options.length === 0) return null;

  return (
    <S.ViewerContainer>
      {options.map((option, idx) => (
        <S.ViewerContentWrapper>
          <S.ViewerContent>{idx + 1}</S.ViewerContent>
          <S.ViewerContent>{option}</S.ViewerContent>
        </S.ViewerContentWrapper>
      ))}
    </S.ViewerContainer>
  );
}

export function DropDownViewer({ form, isEditable }: IDropDownViewerProps) {
  return (
    <S.Container>
      {isEditable ? <div>DropDown</div> : <Viewer form={form} />}
    </S.Container>
  );
}
