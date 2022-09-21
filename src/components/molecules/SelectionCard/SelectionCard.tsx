import { Required } from 'components';
import { IFormState } from 'types/form';
import * as S from './SelectionCard.style';

interface ISelectionCardProps {
  form: IFormState;
}

export function SelectionCard({ form }: ISelectionCardProps) {
  const { title, isRequired } = form;

  return (
    <S.CardContainer style={{ maxWidth: '600px' }}>
      <S.CardWrapper>
        <S.CardHeader>
          {title}
          {isRequired && <Required />}
        </S.CardHeader>
        <S.CardContents />
      </S.CardWrapper>
    </S.CardContainer>
  );
}
