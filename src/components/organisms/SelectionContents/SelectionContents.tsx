import { useNavigate } from 'react-router-dom';
import { SelectionTitleCard, SelectionCard } from 'components';
import { useForm } from 'hooks';
import { IFormState } from 'types/form';
import { getInitialState, validateState, onSubmit } from './helper';
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
  const initialValues = getInitialState({ formState });
  const { values, handleChange, handleSubmit, removeAll } = useForm({
    initialValues,
    onSubmit,
    validateState,
  });

  if (!titleState || !formState) {
    navigate('/');
    return null;
  }

  const checkIsIncludeRequiredForm = () =>
    values.some(value => value.isRequired);

  const { title, description } = titleState;

  return (
    <S.SelectionContentsContainer>
      <SelectionTitleCard
        title={title}
        description={description || ''}
        isIncludeRequiredForm={checkIsIncludeRequiredForm()}
      />

      {values.map(form => (
        <SelectionCard
          form={form}
          handleChange={handleChange({ key: form.key })}
        />
      ))}
      <button type='button' onClick={handleSubmit}>
        눌러
      </button>
      <button type='button' onClick={removeAll}>
        초기화
      </button>
    </S.SelectionContentsContainer>
  );
}
