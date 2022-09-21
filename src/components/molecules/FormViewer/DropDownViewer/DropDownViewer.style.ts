import { Typography } from '@mui/material';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: fit-content;

  margin-top: 16px;
`;

export const ViewerContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

export const ViewerContentWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: start;
  align-items: center;

  padding: 8px 0;
`;

export const ViewerContent = styled(Typography)`
  &:not(:last-child) {
    margin-right: 8px;
  }
`;
