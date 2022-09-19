import { FormCardActive } from './FormCardActive';
import { FormCardInactive } from './FormCardInactive';
import * as S from './FormCard.style';

interface IFormCardProps {
  isActivated: boolean;
}

export function FormCard({ isActivated }: IFormCardProps) {
  return (
    <S.CardContainer>
      {isActivated ? <FormCardActive /> : <FormCardInactive />}
    </S.CardContainer>
  );
}
