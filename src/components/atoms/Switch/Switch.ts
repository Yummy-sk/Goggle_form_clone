import { Switch } from '@mui/material';
import styled from '@emotion/styled';

export const SwitchContainer = styled(Switch)`
  & .MuiSwitch-switchBase.Mui-checked {
    color: rgb(103, 58, 183);
  }
  & .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: #b9b9b9;
  }
`;
