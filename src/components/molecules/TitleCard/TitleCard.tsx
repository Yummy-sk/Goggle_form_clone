import * as S from './TitleCard.style';

interface ITitleCardProps {
  children: React.ReactNode;
  isActivated: boolean;
}

export function TitleCard({ isActivated, children }: ITitleCardProps) {
  return (
    <S.CardContainer>
      <S.CardTop />
      <S.CardContentContainer>
        <S.CardActivator isActivated={isActivated} />
        <S.CardContentWrapper>{children}</S.CardContentWrapper>
      </S.CardContentContainer>
    </S.CardContainer>
  );
}
