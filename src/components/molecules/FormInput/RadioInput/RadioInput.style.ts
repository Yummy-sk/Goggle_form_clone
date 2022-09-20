import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { TextField } from 'components';
import styled from '@emotion/styled';

export const RadioInputContainer = styled.div`
  width: 100%;
  height: fit-content;

  padding-top: 16px;
`;

export const RadioSelectionContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: start;
  align-items: center;

  box-sizing: border-box;
`;

export const RadioIcon = styled(CircleOutlinedIcon)`
  color: #c4c4c4;
`;

export const RadioTextInput = styled(TextField)`
  width: 80%;
  margin-left: 8px;
  & .MuiInput-root::before {
    border: transparent;
  }
  & .MuiInput-root::after {
    border-bottom: 2px solid #4c2b87;
  }
  & .MuiInput-root:hover::before {
    border-bottom: 2px solid #dadce0;
  }
`;
