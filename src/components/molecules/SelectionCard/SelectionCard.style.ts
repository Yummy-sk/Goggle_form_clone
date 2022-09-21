import { CardContent, Typography } from '@mui/material';
import { Card } from 'components';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import styled from '@emotion/styled';

export const CardContainer = styled(Card)<{ error: boolean }>`
  width: 100%;
  height: 100%;

  margin-top: 12px;

  ${({ error }) => error && `border: 1px solid #d93025;`}
`;

export const CardWrapper = styled(CardContent)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  &.MuiCardContent-root {
    padding: 24px;
  }
`;

export const CardHeader = styled.div`
  width: 100%;

  display: flex;

  margin-bottom: 16px;
`;

export const CardContents = styled.div`
  width: 100%;
`;

export const CardVaildator = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
`;

export const WarningIcon = styled(ErrorOutlineOutlinedIcon)`
  color: #d93025;
`;

export const WarningText = styled(Typography)`
  margin-left: 8px;

  color: #d93025;

  font-size: 14px;
  font-weight: 400;
`;
