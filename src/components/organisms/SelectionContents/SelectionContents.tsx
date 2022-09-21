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
  const { values, handleChange, handleSubmit, removeAll, isInit, setIsInit } =
    useForm({
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
          isInit={isInit}
          setIsInit={setIsInit}
          form={form}
          handleChange={handleChange({ key: form.key })}
        />
      ))}
      <S.SelectionContentSubmitContainer>
        <S.SubmitButton
          variant='contained'
          onClick={handleSubmit}
          style={{ backgroundColor: '#6237ae', color: '#fff' }}>
          제출
        </S.SubmitButton>
        <S.ResetButton
          variant='text'
          onClick={removeAll}
          style={{ color: '#6237ae' }}>
          양식 지우기
        </S.ResetButton>
      </S.SelectionContentSubmitContainer>
    </S.SelectionContentsContainer>
  );
}
