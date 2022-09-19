import * as S from './TitleCard.style';

interface ITitleCardProps {
  title: string;
  description: string;
  isActivated: boolean;
  onActivate: () => void;
}

export function TitleCard({
  title,
  description,
  isActivated,
  onActivate,
}: ITitleCardProps) {
  return (
    <S.CardContainer style={{ maxWidth: '800px' }} onClick={onActivate}>
      <S.CardTop />
      <S.CardContentContainer>
        <S.CardActivator isActivated={isActivated} />
        <S.CardContentWrapper>
          <S.CardTitle
            id='standard-basic'
            variant='standard'
            name='title'
            value={title}
            isActivated={isActivated}
          />
          <S.CardDescription
            id='standard-basic'
            variant='standard'
            name='description'
            value={description}
            isActivated={isActivated}
            placeholder='설문지 설명'
          />
        </S.CardContentWrapper>
      </S.CardContentContainer>
    </S.CardContainer>
  );
}
