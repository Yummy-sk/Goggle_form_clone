import { useState } from 'react';
import { AccordionDetails, Divider, Typography } from '@mui/material';
import { IResultState } from 'types/result';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ITypes } from 'types/form';
import { getStringFromASCII } from './helper';
import * as S from './ResultTitleCard.style';

interface IResultTitleCardProps {
  result: Array<IResultState>;
}

interface IAccordionState extends IResultState {
  isExpanded: boolean;
}

function ReturnAnswer({ answer }: { answer: string | Array<string> }) {
  if (typeof answer === 'string') {
    return <Typography>{answer}</Typography>;
  }
  return (
    <ul>
      {answer.map((ans, idx) => (
        <li>
          <Typography>{`${getStringFromASCII({
            ascii: 65,
            idx,
          })}.
          ${ans}`}</Typography>
        </li>
      ))}
    </ul>
  );
}

function ResultContents({ result }: IResultTitleCardProps) {
  const [accordianState, setAccordianState] = useState<Array<IAccordionState>>(
    result.map(res => ({ ...res, isExpanded: false })),
  );

  const onChange = ({ key }: { key: string }) => {
    const newState = accordianState.map(state => {
      if (state.key === key) {
        return { ...state, isExpanded: !state.isExpanded };
      }
      return state;
    });
    setAccordianState(newState);
  };

  const getTypeText = ({ type }: { type: ITypes }): string => {
    switch (type) {
      case 'short-text':
        return '단답형';
      case 'long-text':
        return '장문형';
      case 'radio':
        return '객관식 질문';
      case 'checkbox':
        return '체크박스';
      case 'dropdown':
        return '드롭다운';
      default:
        return 'invalid';
    }
  };

  return (
    <S.ResultContentsInner>
      {accordianState.map((state, idx) => (
        <S.ResultAccordion
          key={state.key}
          expanded={state.isExpanded}
          onChange={() => onChange({ key: state.key })}>
          <S.ResultAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <S.ResultTitle>
              {`${idx + 1}. ${state.title || '제목 없는 문항'}`}
            </S.ResultTitle>
            <S.ResultType>{getTypeText({ type: state.type })}</S.ResultType>
          </S.ResultAccordionSummary>
          <Divider />
          <AccordionDetails>
            <ReturnAnswer answer={state.value} />
          </AccordionDetails>
        </S.ResultAccordion>
      ))}
    </S.ResultContentsInner>
  );
}

export function ResultTitleCard({ result }: IResultTitleCardProps) {
  return (
    <S.CardContainer style={{ maxWidth: '600px' }}>
      <S.CardTop />
      <S.CardContentWrapper>
        <S.CardTitle>제목이다.</S.CardTitle>
        <S.CardDescription>응답이 기록되었습니다.</S.CardDescription>
      </S.CardContentWrapper>
      <Divider />
      <S.ResultContentsWrapper>
        <S.ResultTitleIndicator>제출 항목</S.ResultTitleIndicator>
        <ResultContents result={result} />
      </S.ResultContentsWrapper>
    </S.CardContainer>
  );
}
