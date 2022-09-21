import { memo } from 'react';
import { IFormState, ITypes } from 'types/form';
import { FormCardActive } from './FormCardActive';
import { FormCardInactive } from './FormCardInactive';
import * as S from './FormCard.style';

interface IFormCardProps {
  form: IFormState;
  onActivate: () => void;
  onRemove: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDuplicate: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onRequired: () => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeFormType: ({
    type,
    form,
  }: {
    type: ITypes;
    form: IFormState;
  }) => void;
}
function FormCard({
  form,
  onActivate,
  onRemove,
  onDuplicate,
  onRequired,
  onChangeTitle,
  onChangeFormType,
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
          onChangeFormType={onChangeFormType}
        />
      ) : (
        <FormCardInactive form={form} />
      )}
    </S.CardContainer>
  );
}

const MemoizedFormCard = memo(FormCard);

export { MemoizedFormCard as FormCard };
