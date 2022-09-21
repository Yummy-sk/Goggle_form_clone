import { CardContent } from '@mui/material';
import { Card } from 'components';
import styled from '@emotion/styled';

export const CardContainer = styled(Card)`
  width: 100%;
  height: 100%;

  margin-top: 12px;
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
