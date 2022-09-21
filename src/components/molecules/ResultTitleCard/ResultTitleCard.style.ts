import { Card } from 'components';
import styled from '@emotion/styled';
import { CardContent } from '@mui/material';

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
  flex: 9;

  display: flex;
  flex-direction: column;
`;
