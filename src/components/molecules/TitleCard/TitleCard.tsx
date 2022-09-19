import * as S from './TitleCard.style';

interface ITitleCardProps {
  title: string;
  description: string;
  isActivated: boolean;
}

export function TitleCard({
  title,
  description,
  isActivated,
}: ITitleCardProps) {
  return (
    <S.CardContainer style={{ maxWidth: '800px' }}>
      <S.CardTop />
      <S.CardContentContainer>
        <S.CardActivator isActivated={isActivated} />
        <S.CardContentWrapper>
          <S.CardTitle
            id='standard-basic'
            variant='standard'
            value={title}
            isActivated={isActivated}
          />
          <S.CardDescription
            id='standard-basic'
            variant='standard'
            value={description}
            isActivated={isActivated}
            placeholder='설문지 설명'
          />
        </S.CardContentWrapper>
      </S.CardContentContainer>
    </S.CardContainer>
  );
}
