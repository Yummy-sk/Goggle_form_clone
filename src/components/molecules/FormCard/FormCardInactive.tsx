import {
  CheckBoxViewer,
  DropDownViewer,
  RadioViewer,
  TextViewer,
} from 'components';
import { IFormState } from 'types/form';
import * as S from './FormCardInactive.style';

interface IFormCardInactiveProps {
  form: IFormState;
}

function FormCardInactiveContent({ form }: IFormCardInactiveProps) {
  const { type } = form;

  switch (type) {
    case 'short-text':
    case 'long-text':
      return <TextViewer />;
    case 'radio':
      return <RadioViewer />;
    case 'checkbox':
      return <CheckBoxViewer />;
    case 'dropdown':
      return <DropDownViewer />;
    default:
      return null;
  }
}

export function FormCardInactive({ form }: IFormCardInactiveProps) {
  const { title } = form;
  return (
    <S.CardContainer style={{ padding: '28px 24px' }}>
      <S.CardTitle>{title || '질문'}</S.CardTitle>
      <FormCardInactiveContent form={form} />
    </S.CardContainer>
  );
}
