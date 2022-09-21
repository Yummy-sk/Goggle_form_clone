import { CardContent } from '@mui/material';
import styled from '@emotion/styled';

export const CardContainer = styled(CardContent)`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;

  pointer-events: none;
`;

export const CardTitle = styled.span`
  font-size: 18px;

  display: flex;
  justify-content: flex-start;

  text-align: top;
`;

export const CardContentWrapper = styled.div`
  width: 100%;
  height: fit-content;

  margin-top: 16px;
`;
