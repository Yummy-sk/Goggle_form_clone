import { CardContent, TextField } from '@mui/material';
import { Card } from 'components';
import styled from '@emotion/styled';

export const CardContainer = styled(Card)`
  width: 100%;
  height: 100%;
`;

export const CardTop = styled.div`
  border-top: 8px solid rgb(103, 58, 183);
  border-radius: 8px 8px 0 0;
  text-transform: capitalize;
`;

export const CardContentContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
`;

export const CardActivator = styled.div<{ isActivated: boolean }>`
  max-width: 8px;
  flex: 1;

  transition: background-color 0.3s ease-in-out;

  background-color: ${({ isActivated }) =>
    isActivated ? '#4284f3' : 'transparent'};
`;

export const CardContentWrapper = styled(CardContent)`
  height: 100%;
  flex: 9;

  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled(TextField)<{ isActivated: boolean }>`
  width: 100%;

  margin-bottom: 8px;
  & .MuiInput-root::before {
    border-bottom: ${({ isActivated }) =>
      isActivated ? '2px solid #dadce0' : 'transparent'};
  }
  & .MuiInput-root::after {
    border-bottom: 2px solid #4c2b87;
  }
  & .MuiInput-input {
    font-size: 24pt;
  }
`;

export const CardDescription = styled(TextField)<{ isActivated: boolean }>`
  width: 100%;
  transition: border-bottom 0.3s ease-in-out;
  & .MuiInput-root::before {
    border-bottom: ${({ isActivated }) =>
      isActivated ? '1px solid #dadce0' : 'transparent'};
  }
  & .MuiInput-root::after {
    border-bottom: 1px solid #4c2b87;
  }
`;
