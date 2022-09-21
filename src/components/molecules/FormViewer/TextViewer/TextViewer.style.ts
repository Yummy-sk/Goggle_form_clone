import { TextField, TextInput } from 'components';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: fit-content;

  margin-top: 16px;
`;

export const TextInputViewer = styled(TextInput)``;

export const TextInputArea = styled(TextField)<{
  type: 'short-text' | 'long-text';
}>`
  width: ${({ type }) => (type === 'short-text' ? '60%' : '100%')};

  & .MuiInput-root::before {
  }
  & .MuiInput-root::after {
    border-bottom: 2px solid #4c2b87;
  }
  & .MuiInput-root:hover::before {
    border-bottom: 2px solid #dadce0;
  }
`;
