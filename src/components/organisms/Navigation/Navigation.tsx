import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { updateTitleForm } from 'store';
import { useAppDispatch } from 'hooks';
import view from 'assets/img/view.png';
import main_logo from 'assets/img/forms.png';
import * as S from './Navigation.style';

export function Navigation({ title }: { title: string }) {
  const formTitle = title;
  const dispatch = useAppDispatch();

  const onUpdateTitle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch(updateTitleForm({ type: 'title', value: e.target.value }));
  };

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
            onChange={onUpdateTitle}
          />
        </S.LeftContentWrapper>
        <S.ResultIcon>
          <Link to={`/selection/${nanoid()}`} rel='noreferrer'>
            <img src={view} alt='show selection icon' />
          </Link>
        </S.ResultIcon>
      </S.NavContainer>
    </S.NavBar>
  );
}
