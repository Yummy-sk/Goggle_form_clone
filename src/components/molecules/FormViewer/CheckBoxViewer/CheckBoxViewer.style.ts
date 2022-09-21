import { Checkbox } from '@mui/material';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: fit-content;

  margin-top: 16px;
`;

export const FormCheckBox = styled(Checkbox)`
  &.MuiButtonBase-root {
    color: #bdbdbd;
  }
`;
