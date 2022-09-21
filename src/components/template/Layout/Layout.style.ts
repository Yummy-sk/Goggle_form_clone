import { Container } from '@mui/material';
import styled from '@emotion/styled';

export const LayoutContainer = styled(Container)`
  width: 100%;
  height: 100%;
`;

export const LayoutWrapper = styled.div<{ isMain: boolean }>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-bottom: 100px;

  ${({ isMain }) =>
    isMain &&
    `
    padding-top: 108px;
  `}
`;
