import { CardContent, TextField, MenuItem, Typography } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import styled from '@emotion/styled';

export const CardContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;

  transition: height 0.3s ease-in-out;
`;

export const CardActivator = styled.div`
  max-width: 8px;
  flex: 1;

  transition: background-color 0.3s ease-in-out;

  background-color: #4284f3;
`;

export const CardContentWrapper = styled(CardContent)`
  height: 100%;
  flex: 9;

  display: flex;
  flex-direction: column;

  &.MuiCardContent-root {
    padding-top: 1px;
  }
`;

export const CardContentHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DragIndicator = styled(DragIndicatorIcon)`
  transform: rotate(90deg);
  color: #dadce0;

  cursor: grab;
`;

export const CardContentInfo = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardContentTitle = styled(TextField)`
  box-sizing: border-box;

  width: 60%;
  & .MuiInputBase-root::after {
    border-bottom: 2px solid #4c2b87;
  }
  & input {
    width: 100%;
    padding: 16px;
  }
`;

export const CardSelectItem = styled(MenuItem)`
  width: 100%;

  & svg {
    margin-right: 16px;
    color: #444;
  }
`;

export const CardContentOptions = styled.div`
  width: 100%;
  height: fit-content;

  margin-top: 32px;
`;

export const CardContentOptionsWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: right;
  align-items: center;

  padding-top: 8px;

  & > *:not(:last-child) {
    margin-right: 16px;
  }
`;

export const CardContentOptionText = styled(Typography)`
  color: #202124;
  cursor: default;
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 20px;
`;
