import view from 'assets/img/view.png';
import main_logo from 'assets/img/forms.png';
import * as S from './Navigation.style';

export function Navigation({ title }: { title: string }) {
  const formTitle = title || '제목 없는 설문지';
  return (
    <S.NavBar position='fixed'>
      <S.NavContainer maxWidth='lg'>
        <S.LeftContentWrapper>
          <S.NavLogo>
            <img src={main_logo} alt='app main logo' />
          </S.NavLogo>
          <S.TitleInput
            id='standard-basic'
            variant='standard'
            value={formTitle}
          />
        </S.LeftContentWrapper>
        <S.ResultIcon>
          <img src={view} alt='show result icon' />
        </S.ResultIcon>
      </S.NavContainer>
    </S.NavBar>
  );
}
