import { CardContent } from '@mui/material';
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
`;
