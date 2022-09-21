import { ResultTitleCard } from 'components';
import { IResultState } from 'types/result';
import * as S from './ResultContents.style';

interface IResultContentsProps {
  result: Array<IResultState>;
}

export function ResultContents({ result }: IResultContentsProps) {
  return (
    <S.ResultContentsContainer>
      <ResultTitleCard result={result} />
    </S.ResultContentsContainer>
  );
}
