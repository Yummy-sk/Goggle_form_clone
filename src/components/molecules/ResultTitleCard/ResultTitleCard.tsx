import { Divider } from '@mui/material';
import * as S from './ResultTitleCard.style';

export function ResultTitleCard() {
  return (
    <S.CardContainer style={{ maxWidth: '600px' }}>
      <S.CardTop />
      <S.CardContentWrapper>
        <S.CardTitle>제목이다.</S.CardTitle>
        <S.CardDescription>응답이 기록되었습니다.</S.CardDescription>
      </S.CardContentWrapper>
      <Divider />

      <S.CardBottomWrapper />
    </S.CardContainer>
  );
}
