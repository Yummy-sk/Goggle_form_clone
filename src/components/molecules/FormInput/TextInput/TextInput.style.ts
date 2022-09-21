import { TextField } from 'components';
import styled from '@emotion/styled';

export const TextInputContainer = styled.div`
  width: 100%;
  height: fit-content;

  padding-top: 16px;
`;

export const TextInputField = styled(TextField)<{ type: 'long' | 'short' }>`
  pointer-events: none;
  cursor: pointer;
  margin-left: 8px;

  width: ${({ type }) => (type === 'long' ? '80%' : '50%')};
  & .MuiInput-root {
    color: #9e9e9e;
  }
  & .MuiInput-root::before {
    border: transparent;
    border-bottom: 1px solid #dadce0;
    border-style: dotted;
  }
  & .MuiInput-root:hover::before {
    border-bottom: 1px solid #dadce0;
    border-style: dotted;
  }
  & .MuiInput-root::after {
    border-bottom: transparent;
  }
`;
