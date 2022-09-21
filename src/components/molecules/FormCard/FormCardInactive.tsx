import { IFormState } from 'types/form';
import * as S from './FormCardInactive.style';

interface IFormCardInactiveProps {
  form: IFormState;
}

export function FormCardInactive({ form }: IFormCardInactiveProps) {
  const { title } = form;
  return (
    <S.CardContainer style={{ padding: '28px 24px' }}>
      <S.CardTitle>{title || '질문'}</S.CardTitle>
      <S.CardContentWrapper>
        <div>ds</div>
      </S.CardContentWrapper>
    </S.CardContainer>
  );
}
