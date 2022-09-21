import { useNavigate } from 'react-router-dom';
import { ResultTitleCard, ResultCard } from 'components';
import { IFormState } from 'types/form';
import * as S from './ResultContents.style';

interface IResultContentsProps {
  titleState: IFormState;
  formState: Array<IFormState>;
}

export function ResultContents({
  titleState,
  formState,
}: IResultContentsProps) {
  const navigate = useNavigate();

  if (!titleState || !formState) {
    navigate('/');
    return null;
  }

  const checkIsIncludeRequiredForm = () =>
    formState.some(form => form.isRequired);

  const { title, description } = titleState;

  return (
    <S.ResultContentsContainer>
      <ResultTitleCard
        title={title}
        description={description || ''}
        isIncludeRequiredForm={checkIsIncludeRequiredForm()}
      />

      {formState.map(form => (
        <ResultCard form={form} />
      ))}
    </S.ResultContentsContainer>
  );
}
