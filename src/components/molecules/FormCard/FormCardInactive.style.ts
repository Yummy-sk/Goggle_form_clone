import { CardContent } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import styled from '@emotion/styled';

export const CardContainer = styled(CardContent)`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    visibility: hidden;
  }

  &:hover {
    & > svg {
      visibility: visible;
    }
  }
`;

export const DragIndicator = styled(DragIndicatorIcon)`
  transform: rotate(90deg);
  color: #dadce0;

  cursor: grab;
`;

export const CardTitle = styled.span`
  font-size: 18px;

  display: flex;
  justify-content: flex-start;

  text-align: top;
`;

export const CardContentWrapper = styled.div`
  width: 100%;
  height: fit-content;

  margin-top: 16px;
`;
