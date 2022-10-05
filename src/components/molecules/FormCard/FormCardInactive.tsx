import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';
import {
  CheckBoxViewer,
  DropDownViewer,
  RadioViewer,
  TextViewer,
  Required,
} from 'components';
import { IFormState } from 'types/form';
import * as S from './FormCardInactive.style';

interface IFormCardInactiveProps {
  form: IFormState;
  dragHandleProps: DraggableProvidedDragHandleProps | undefined;
}

function FormCardInactiveContent({
  form,
}: Omit<IFormCardInactiveProps, 'dragHandleProps'>) {
  const { type } = form;

  switch (type) {
    case 'short-text':
    case 'long-text':
      return <TextViewer form={form} type={type} isEditable={false} />;
    case 'radio':
      return <RadioViewer form={form} />;
    case 'checkbox':
      return <CheckBoxViewer form={form} />;
    case 'dropdown':
      return <DropDownViewer form={form} isEditable={false} />;
    default:
      return null;
  }
}

export function FormCardInactive({
  form,
  dragHandleProps,
}: IFormCardInactiveProps) {
  const { title, isRequired } = form;

  return (
    <S.CardContainer style={{ padding: '10px 24px 28px 24px' }}>
      <S.CardHeader {...dragHandleProps}>
        <S.DragIndicator />
      </S.CardHeader>
      <S.CardTitle>
        {title || '질문'} {isRequired && <Required />}
      </S.CardTitle>
      <FormCardInactiveContent form={form} />
    </S.CardContainer>
  );
}
