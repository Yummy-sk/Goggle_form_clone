import {
  Required,
  DropDownViewer,
  TextViewer,
  RadioViewer,
  CheckBoxViewer,
} from 'components';
import { ISelection, IStateChangeProps } from 'types/form';
import * as S from './SelectionCard.style';

interface ISelectionCardProps {
  isInit: boolean;
  setIsInit: React.Dispatch<React.SetStateAction<boolean>>;
  form: ISelection;
  handleChange: ({ nextValue }: IStateChangeProps) => void;
}

function SelectionContent({
  isInit,
  setIsInit,
  form,
  handleChange,
}: ISelectionCardProps) {
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
    case 'radio':
      return (
        <RadioViewer
          isInit={isInit}
          setIsInit={setIsInit}
          form={form}
          handleChange={handleChange}
        />
      );
    case 'checkbox':
      return (
        <CheckBoxViewer
          isInit={isInit}
          setIsInit={setIsInit}
          form={form}
          handleChange={handleChange}
        />
      );
    case 'dropdown':
      return (
        <DropDownViewer form={form} isEditable handleChange={handleChange} />
      );
    default:
      return null;
  }
}

export function SelectionCard({
  isInit,
  setIsInit,
  form,
  handleChange,
}: ISelectionCardProps) {
  const { title, isRequired, error } = form;

  console.log(error);

  return (
    <S.CardContainer style={{ maxWidth: '600px' }} error={error && error}>
      <S.CardWrapper>
        <S.CardHeader>
          {title}
          {isRequired && <Required />}
        </S.CardHeader>
        <SelectionContent
          isInit={isInit}
          setIsInit={setIsInit}
          form={form}
          handleChange={handleChange}
        />
        <S.CardContents />
        {error && (
          <S.CardVaildator>
            <S.WarningIcon />
            <S.WarningText>필수 질문입니다.</S.WarningText>
          </S.CardVaildator>
        )}
      </S.CardWrapper>
    </S.CardContainer>
  );
}
