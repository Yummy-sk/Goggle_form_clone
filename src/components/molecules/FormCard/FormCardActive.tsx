import { IconButton } from 'components';
import ImageIcon from '@mui/icons-material/Image';
import * as S from './FormCardActive.style';

export function FormCardActive() {
  return (
    <S.CardContainer>
      <S.CardActivator />
      <S.CardContentWrapper>
        <S.CardContentHeader>
          <S.DragIndicator />
        </S.CardContentHeader>
        <S.CardContentInfo>
          <S.CardContentTitle
            id='filled-basic'
            placeholder='질문'
            variant='filled'
          />
          <IconButton>
            <ImageIcon />
          </IconButton>
        </S.CardContentInfo>
      </S.CardContentWrapper>
    </S.CardContainer>
  );
}
