import { Required, DropDownViewer, TextViewer } from 'components';
import { ISelection, IStateChangeProps } from 'types/form';
import * as S from './SelectionCard.style';

interface ISelectionCardProps {
  form: ISelection;
  handleChange: ({ nextValue }: IStateChangeProps) => void;
}

function SelectionContent({ form, handleChange }: ISelectionCardProps) {
  const { type } = form;

  switch (type) {
    case 'long-text':
      return (
        <TextViewer
          form={form}
          type='long-text'
          isEditable
          handleChange={handleChange}
        />
      );
    case 'short-text':
      return (
        <TextViewer
          form={form}
          type='short-text'
          isEditable
          handleChange={handleChange}
        />
      );
    // case 'radio':
    //   return <RadioViewer />;
    // case 'checkbox':
    //   return <CheckBoxViewer />;
    case 'dropdown':
      return (
        <DropDownViewer form={form} isEditable handleChange={handleChange} />
      );
    default:
      return null;
  }
}

export function SelectionCard({ form, handleChange }: ISelectionCardProps) {
  const { title, isRequired } = form;

  return (
    <S.CardContainer style={{ maxWidth: '600px' }}>
      <S.CardWrapper>
        <S.CardHeader>
          {title}
          {isRequired && <Required />}
        </S.CardHeader>
        <SelectionContent form={form} handleChange={handleChange} />
        <S.CardContents />
      </S.CardWrapper>
    </S.CardContainer>
  );
}
