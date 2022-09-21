import { useNavigate } from 'react-router-dom';
import { SelectionTitleCard, SelectionCard } from 'components';
import { IFormState } from 'types/form';
import * as S from './SelectionContents.style';

interface ISelectionContentsProps {
  titleState: IFormState;
  formState: Array<IFormState>;
}

export function SelectionContents({
  titleState,
  formState,
}: ISelectionContentsProps) {
  const navigate = useNavigate();

  if (!titleState || !formState) {
    navigate('/');
    return null;
  }

  const checkIsIncludeRequiredForm = () =>
    formState.some(form => form.isRequired);

  const { title, description } = titleState;

  return (
    <S.SelectionContentsContainer>
      <SelectionTitleCard
        title={title}
        description={description || ''}
        isIncludeRequiredForm={checkIsIncludeRequiredForm()}
      />

      {formState.map(form => (
        <SelectionCard form={form} />
      ))}
    </S.SelectionContentsContainer>
  );
}
