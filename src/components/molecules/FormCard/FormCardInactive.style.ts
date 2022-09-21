import { CardContent, Typography } from '@mui/material';
import styled from '@emotion/styled';

export const CardContainer = styled(CardContent)`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;

  transition: height 0.3s ease-in-out;

  pointer-events: none;
`;

export const CardTitle = styled(Typography)`
  font-size: 18px;
`;

export const CardContentWrapper = styled.div`
  width: 100%;
  height: fit-content;

  margin-top: 16px;
`;
