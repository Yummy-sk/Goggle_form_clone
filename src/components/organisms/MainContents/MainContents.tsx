import { TitleCard, FormCard } from 'components';
import * as S from './MainContents.style';

export function MainContents() {
  return (
    <S.MainContentsContainer>
      <TitleCard title='제목 없는 설문지' description='' isActivated />
      <FormCard />
    </S.MainContentsContainer>
  );
}
