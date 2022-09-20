import { FormControl, Select } from '@mui/material';
import styled from '@emotion/styled';

export const FormControlContainer = styled(FormControl)`
  width: 200px;
`;

export const FormSelect = styled(Select)`
  & .MuiSelect-select {
    display: flex;
    align-items: center;

    & > svg {
      margin-right: 16px;
    }
  }
`;
