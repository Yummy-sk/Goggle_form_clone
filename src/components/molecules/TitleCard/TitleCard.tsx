/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { makeStyles } from '@mui/styles';
import * as S from './TitleCard.style';

const useStyles = makeStyles({
  isActivated: ({ type }: { type: 'title' | 'description' }) => {
    return {
      '& .MuiInput-root::before': {
        borderBottom:
          type === 'title' ? '1.5px solid #dadce0' : '1px solid #dadce0',
      },
    };
  },
});
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
  const titleClass = useStyles({ type: 'title' });
  const descriptionClass = useStyles({ type: 'description' });
  return (
    <S.CardContainer style={{ maxWidth: '800px' }} onClick={onActivate}>
      <S.CardTop />
      <S.CardContentContainer>
        <S.CardActivator isActivated={isActivated} />
        <S.CardContentWrapper>
          <S.CardTitle
            className={isActivated ? titleClass.isActivated : ''}
            variant='standard'
            name='title'
            value={title}
            onChange={e => onUpdateFormTitle({ e, type: 'title' })}
          />

          <S.CardDescription
            className={isActivated ? descriptionClass.isActivated : ''}
            variant='standard'
            name='description'
            value={description}
            placeholder='설문지 설명'
            onChange={e => onUpdateFormTitle({ e, type: 'description' })}
          />
        </S.CardContentWrapper>
      </S.CardContentContainer>
    </S.CardContainer>
  );
}
