import { nanoid } from '@reduxjs/toolkit';
import { Radio, RadioGroup, FormControl } from '@mui/material';
import { IFormState, ISelection, IStateChangeProps } from 'types/form';
import * as S from './RadioViewer.style';

interface IRadioViewerProps {
  form: IFormState | ISelection;
  handleChange?: ({ nextValue }: IStateChangeProps) => void | null;
}

export function RadioViewer({ form, handleChange }: IRadioViewerProps) {
  const { options, isEtc } = form;

  if (!Array.isArray(options) || options.length === 0) return null;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (handleChange) {
      handleChange({ nextValue: e.target.value });
    }
  };

  return (
    <S.Container>
      <FormControl>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='female'
          name='radio-buttons-group'
          onChange={onChange}>
          {options.map(option => (
            <S.RadioControl
              key={nanoid()}
              value={option}
              control={<Radio />}
              label={option}
              isEtc={false}
            />
          ))}
          {isEtc && (
            <S.RadioControl
              value='기타...'
              control={<Radio />}
              label='기타...'
              isEtc
            />
          )}
        </RadioGroup>
      </FormControl>
    </S.Container>
  );
}

RadioViewer.defaultProps = {
  handleChange: null,
};
