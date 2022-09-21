import styled from '@emotion/styled';
import {
  Accordion,
  CardContent,
  Typography,
  AccordionSummary,
} from '@mui/material';
import { Card } from 'components';

export const CardContainer = styled(Card)`
  width: 100%;
  height: 100%;
`;

export const CardTop = styled.div`
  border-top: 8px solid rgb(103, 58, 183);
  border-radius: 8px 8px 0 0;
  text-transform: capitalize;
`;

export const CardContentWrapper = styled(CardContent)`
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled(Typography)`
  box-sizing: border-box;
  color: #202124;

  font-size: 24pt;
  font-weight: 400;
`;

export const CardDescription = styled(Typography)`
  color: #202124;

  font-size: 11pt;
  font-weight: 400;

  margin-top: 14px;
`;

export const ResultContentsWrapper = styled(CardContent)`
  height: 100%;

  display: flex;
  flex-direction: column;

  & span {
    display: flex;
  }
`;

export const ResultContentsInner = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ResultAccordion = styled(Accordion)`
  width: 100%;
`;

export const ResultAccordionSummary = styled(AccordionSummary)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ResultTitleIndicator = styled(Typography)`
  font-size: 18pt;

  box-sizing: border-box;
  color: #202124;

  margin-bottom: 12px;
`;

export const ResultTitle = styled(Typography)`
  font-weight: bold;
  font-size: 18px;

  flex: 8;
`;

export const ResultType = styled(Typography)`
  font-size: 14px;
  flex: 2;
`;
