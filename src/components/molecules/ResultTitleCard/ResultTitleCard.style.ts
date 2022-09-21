import styled from '@emotion/styled';
import { CardContent, Typography } from '@mui/material';
import { Card } from 'components';

export const CardContainer = styled(Card)`
  width: 100%;
  height: 100%;
`;

export const CardTop = styled.div`
  border-top: 8px solid rgb(103, 58, 183);
  border-radius: 8px 8px 0 0;
  text-transform: capitalize;
`;

export const CardContentWrapper = styled(CardContent)`
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled(Typography)`
  box-sizing: border-box;
  color: #202124;

  font-size: 24pt;
  font-weight: 400;
`;

export const CardDescription = styled(Typography)`
  color: #202124;

  font-size: 11pt;
  font-weight: 400;

  margin-top: 14px;
`;

export const CardBottomWrapper = styled(CardContent)`
  height: 100%;

  display: flex;
  flex-direction: column;

  & span {
    display: flex;
  }
`;
