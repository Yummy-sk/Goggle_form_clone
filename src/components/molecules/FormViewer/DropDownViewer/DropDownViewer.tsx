import { FormControl, MenuItem, Select } from '@mui/material';
import { IFormState } from 'types/form';
import * as S from './DropDownViewer.style';

interface IDropDownViewerProps {
  form: IFormState;
  isEditable: boolean;
}

function Selection({ form }: { form: IFormState }) {
  const { options } = form;

  if (!Array.isArray(options) || options.length === 0) return null;

  return (
    <FormControl style={{ width: '180px', color: '#757575' }}>
      <Select
        value=''
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}>
        <MenuItem value=''>
          <em>선택</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}

function Viewer({ form }: { form: IFormState }) {
  const { options } = form;

  if (!Array.isArray(options) || options.length === 0) return null;

  return (
    <S.ViewerContainer>
      {options.map((option, idx) => (
        <S.ViewerContentWrapper>
          <S.ViewerContent>{idx + 1}</S.ViewerContent>
          <S.ViewerContent>{option}</S.ViewerContent>
        </S.ViewerContentWrapper>
      ))}
    </S.ViewerContainer>
  );
}

export function DropDownViewer({ form, isEditable }: IDropDownViewerProps) {
  return (
    <S.Container>
      {isEditable ? <Selection form={form} /> : <Viewer form={form} />}
    </S.Container>
  );
}
