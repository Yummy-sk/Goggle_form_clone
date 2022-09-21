import { Button, TextField } from 'components';
import styled from '@emotion/styled';

export const DropDownInputContainer = styled.div`
  width: 100%;
  height: fit-content;

  padding-top: 16px;

  & span {
    font-weight: 500;
  }

  & > div:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const DropDownItemContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: start;
  align-items: center;
`;

export const DropDownItemTextField = styled(TextField)`
  width: 90%;
  margin-left: 16px;
  & .MuiInput-root::before {
    border: transparent;
  }
  & .MuiInput-root::after {
    border-bottom: 2px solid #4c2b87;
  }
  & .MuiInput-root:hover::before {
    border-bottom: 2px solid #dadce0;
  }
`;

export const DropDownAdderButton = styled(Button)`
  margin: 0 16px;
  padding: 0;

  font-size: 16px;
  font-weight: 400;

  color: rgb(118, 118, 118);
  border-radius: 0;

  &:hover {
    background-color: transparent;
    border-bottom: 1px solid #dadce0;
  }
`;
