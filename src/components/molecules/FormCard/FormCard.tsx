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
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormCard({
  form,
  onActivate,
  onRemove,
  onDuplicate,
  onRequired,
  onChangeTitle,
}: IFormCardProps) {
  return (
    <S.CardContainer style={{ maxWidth: '800px' }} onClick={onActivate}>
      {form.isActivated ? (
        <FormCardActive
          form={form}
          onChangeTitle={onChangeTitle}
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
