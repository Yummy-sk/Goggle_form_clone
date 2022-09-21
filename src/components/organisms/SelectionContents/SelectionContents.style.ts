import styled from '@emotion/styled';
import { Button } from 'components';

export const SelectionContentsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 16px;
`;

export const SelectionContentSubmitContainer = styled.div`
  width: 600px;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;
`;

export const SubmitButton = styled(Button)``;

export const ResetButton = styled(Button)``;
