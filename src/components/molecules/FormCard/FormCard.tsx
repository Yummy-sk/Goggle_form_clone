import { IFormState } from 'types/form';
import { FormCardActive } from './FormCardActive';
import { FormCardInactive } from './FormCardInactive';
import * as S from './FormCard.style';

interface IFormCardProps {
  form: IFormState;
  onActivate: () => void;
  onRemove: () => void;
  onDuplicate: () => void;
  onRequired: () => void;
}

export function FormCard({
  form,
  onActivate,
  onRemove,
  onDuplicate,
  onRequired,
}: IFormCardProps) {
  return (
    <S.CardContainer style={{ maxWidth: '800px' }} onClick={onActivate}>
      {form.isActivated ? (
        <FormCardActive
          form={form}
          onRemove={onRemove}
          onDuplicate={onDuplicate}
          onRequired={onRequired}
        />
      ) : (
        <FormCardInactive />
      )}
    </S.CardContainer>
  );
}
