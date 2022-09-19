import * as S from './Select.style';

interface ISelectProps {
  value: string;
  children: React.ReactNode;
  onChange: () => void;
}

export function Select({ value, children, onChange }: ISelectProps) {
  return (
    <S.FormControlContainer fullWidth>
      <S.FormSelect value={value} onChange={onChange}>
        {children}
      </S.FormSelect>
    </S.FormControlContainer>
  );
}
