import { TextField } from 'components';
import { AppBar, Container, IconButton } from '@mui/material';
import styled from '@emotion/styled';

export const NavBar = styled(AppBar)`
  width: 100%;

  padding: 1rem 0;

  background-color: #fff;
  box-shadow: none;
  border-bottom: 1px solid #dadce0;
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContentWrapper = styled.span`
  display: flex;
  align-items: center;
`;

export const NavLogo = styled(IconButton)`
  & img {
    width: 40px;
    height: 40px;
  }
`;

export const ResultIcon = styled(IconButton)`
  & img {
    width: 35px;
    height: 35px;
  }
`;

export const TitleInput = styled(TextField)`
  margin-left: 8px;

  & .MuiInput-root::before {
    border: transparent;
  }
  & .MuiInput-root::after {
    border-bottom: 2px solid #000;
  }
  & .MuiInput-input {
    font-size: 18px;
    font-weight: 400;
  }
`;
