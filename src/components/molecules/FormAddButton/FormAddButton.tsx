import plus from 'assets/img/plus.png';
import * as S from './FormAddButton.style';

interface IFormAddButtonProps {
  onFormAdd: () => void;
}

export function FormAddButton({ onFormAdd }: IFormAddButtonProps) {
  return (
    <S.Button {...{ size: 'medium' }} onClick={onFormAdd}>
      <img src={plus} alt='add' />
    </S.Button>
  );
}
