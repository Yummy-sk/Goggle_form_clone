import { ReactNode } from 'react';
import { SelectChangeEvent } from '@mui/material';
import * as S from './Select.style';

interface ISelectProps {
  value: string;
  children: React.ReactNode;
  onChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
}

export function Select({ value, children, onChange, ...props }: ISelectProps) {
  return (
    <S.FormControlContainer fullWidth style={{ ...props }}>
      <S.FormSelect value={value} onChange={onChange}>
        {children}
      </S.FormSelect>
    </S.FormControlContainer>
  );
}
