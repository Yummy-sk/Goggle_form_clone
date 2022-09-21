import { Required, TextViewer } from 'components';
import { IFormState } from 'types/form';
import * as S from './ResultCard.style';

interface IResultCardProps {
  form: IFormState;
}

export function ResultCard({ form }: IResultCardProps) {
  const { title, isRequired } = form;

  return (
    <S.CardContainer style={{ maxWidth: '600px' }}>
      <S.CardWrapper>
        <S.CardHeader>
          {title}
          {isRequired && <Required />}
        </S.CardHeader>
        <S.CardContents>
          <TextViewer form={form} type='short-text' isEditable />
        </S.CardContents>
      </S.CardWrapper>
    </S.CardContainer>
  );
}
