import { useNavigate } from 'react-router-dom';
import { ResultTitleCard } from 'components';
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

  return (
    <S.ResultContentsContainer>
      <ResultTitleCard />
      <div>ds</div>
    </S.ResultContentsContainer>
  );
}
