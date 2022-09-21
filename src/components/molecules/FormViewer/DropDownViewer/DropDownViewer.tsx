import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { IFormState, ISelection, IStateChangeProps } from 'types/form';
import * as S from './DropDownViewer.style';

interface IDropDownViewerProps {
  form: IFormState | ISelection;
  isEditable: boolean;
  handleChange: ({ nextValue }: IStateChangeProps) => void;
}

function Selection({
  form,
  handleChange,
}: {
  form: ISelection;
  handleChange: ({ nextValue }: IStateChangeProps) => void;
}) {
  const { options, value } = form;

  if (!Array.isArray(options) || options.length === 0) return null;

  const onChange = (e: SelectChangeEvent<string | string[]>) => {
    handleChange({ nextValue: e.target.value as string });
  };

  return (
    <FormControl style={{ width: '180px', color: '#757575' }}>
      <Select
        value={value}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        onChange={onChange}>
        <MenuItem value=''>
          <em>선택</em>
        </MenuItem>
        {Array.isArray(options) &&
          options.map(option => <MenuItem value={option}>{option}</MenuItem>)}
      </Select>
    </FormControl>
  );
}

function Viewer({ form }: { form: IFormState | ISelection }) {
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

export function DropDownViewer({
  form,
  isEditable,
  handleChange,
}: IDropDownViewerProps) {
  return (
    <S.Container>
      {isEditable ? (
        <Selection form={form as ISelection} handleChange={handleChange} />
      ) : (
        <Viewer form={form} />
      )}
    </S.Container>
  );
}
