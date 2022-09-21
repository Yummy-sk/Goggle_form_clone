import { ResultTitleCard } from 'components';
import { IResultState } from 'types/result';
import * as S from './ResultContents.style';

interface IResultContentsProps {
  title: string;
  result: Array<IResultState>;
}

export function ResultContents({ title, result }: IResultContentsProps) {
  return (
    <S.ResultContentsContainer>
      <ResultTitleCard title={title} result={result} />
    </S.ResultContentsContainer>
  );
}
