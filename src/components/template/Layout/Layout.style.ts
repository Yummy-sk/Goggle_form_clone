import { Container } from '@mui/material';
import styled from '@emotion/styled';

export const LayoutContainer = styled(Container)<{ isMain: boolean }>`
  width: 100%;
  height: 100%;

  ${({ isMain }) =>
    isMain &&
    `
    padding-top: 108px;
  `}
`;
