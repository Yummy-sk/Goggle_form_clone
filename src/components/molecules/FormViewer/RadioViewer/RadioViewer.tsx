import { Radio, RadioGroup, FormControl } from '@mui/material';
import { IFormState } from 'types/form';
import * as S from './RadioViewer.style';

export function RadioViewer({ form }: { form: IFormState }) {
  const { options, isEtc } = form;

  if (!Array.isArray(options) || options.length === 0) return null;

  return (
    <S.Container>
      <FormControl>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='female'
          name='radio-buttons-group'>
          {options.map(option => (
            <S.RadioControl
              value={option}
              control={<Radio />}
              label={option}
              isEtc={false}
            />
          ))}
          {isEtc && (
            <S.RadioControl
              value='etc'
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
