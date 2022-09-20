import * as S from './TitleCard.style';

interface ITitleCardProps {
  title: string;
  description: string;
  isActivated: boolean;
  onUpdateFormTitle: ({
    e,
    type,
  }: {
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
    type: 'title' | 'description';
  }) => void;
  onActivate: () => void;
}

export function TitleCard({
  title,
  description,
  isActivated,
  onUpdateFormTitle,
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
            onChange={e => onUpdateFormTitle({ e, type: 'title' })}
          />
          <S.CardDescription
            id='standard-basic'
            variant='standard'
            name='description'
            value={description}
            isActivated={isActivated}
            placeholder='설문지 설명'
            onChange={e => onUpdateFormTitle({ e, type: 'description' })}
          />
        </S.CardContentWrapper>
      </S.CardContentContainer>
    </S.CardContainer>
  );
}
