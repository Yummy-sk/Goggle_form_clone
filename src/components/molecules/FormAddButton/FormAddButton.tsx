import plus from 'assets/img/plus.png';
import * as S from './FormAddButton.style';

export function FormAddButton() {
  return (
    <S.Button {...{ size: 'medium' }}>
      <img src={plus} alt='add' />
    </S.Button>
  );
}
