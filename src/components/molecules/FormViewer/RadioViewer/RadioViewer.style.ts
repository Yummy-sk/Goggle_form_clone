import { FormControlLabel } from '@mui/material';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: fit-content;

  margin-top: 16px;
`;

export const RadioControl = styled(FormControlLabel)<{ isEtc: boolean }>`
  ${({ isEtc }) => isEtc && `color: #70757a;`}

  & .MuiButtonBase-root {
    color: #9e9e9e;
  }

  & .Mui-checked {
    color: #673ab6;
  }
`;
