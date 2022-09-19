import { FloatingButton } from 'components';
import styled from '@emotion/styled';

export const Button = styled(FloatingButton)`
  position: fixed;

  right: 30px;
  bottom: 30px;

  background-color: #fff;
  & img {
    width: 30px;
    height: 30px;
  }
`;
