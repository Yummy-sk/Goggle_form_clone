import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { TextField, Button } from 'components';
import styled from '@emotion/styled';

export const RadioAndCheckBoxInputContainer = styled.div`
  width: 100%;
  height: fit-content;

  padding-top: 16px;
`;

export const RadioAndCheckBoxSelectionContainer = styled.div`
  width: 100%;
  min-height: 40px;

  display: flex;
  justify-content: start;
  align-items: center;

  box-sizing: border-box;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const RadioAndCheckBoxAdderContainer = styled(
  RadioAndCheckBoxSelectionContainer,
)``;

export const RadioAndCheckBoxEtcOptionContainer = styled(
  RadioAndCheckBoxSelectionContainer,
)``;

export const RadioIcon = styled(CircleOutlinedIcon)`
  color: #c4c4c4;
`;

export const CheckBoxIcon = styled(CheckBoxOutlineBlankIcon)`
  color: #c4c4c4;
`;

export const RadioAndCheckBoxTextInput = styled(TextField)`
  width: 80%;
  margin-left: 8px;
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

export const RadioAndCheckBoxEtcInput = styled(TextField)`
  margin-left: 8px;
  width: 80%;
  & .MuiInput-root {
    color: #c4c4c4;
  }
  & .MuiInput-root::before {
    border: transparent;
  }
  & .MuiInput-root:hover::before {
    border-bottom: 1px solid #dadce0;
    border-style: dotted;
  }
`;

export const RadioAndCheckBoxAdderButton = styled(Button)`
  margin: 0 8px;
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

export const RadioAndCheckBoxEtcAddButton = styled(Button)`
  font-size: 16px;
  font-weight: 400;
`;

export const RadioAndCheckBoxDragIndicator = styled(DragIndicatorIcon)`
  color: #dadce0;

  cursor: grab;
`;

export const IconWrapper = styled.div`
  width: 30px;

  &:not(:last-child) {
    margin-right: 12px;
  }
`;
