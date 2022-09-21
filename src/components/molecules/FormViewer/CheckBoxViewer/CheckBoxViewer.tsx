import { FormGroup, FormControlLabel } from '@mui/material';
import { IFormState } from 'types/form';
import * as S from './CheckBoxViewer.style';

export function CheckBoxViewer({ form }: { form: IFormState }) {
  const { options, isEtc } = form;

  if (!Array.isArray(options) || options.length === 0) return null;

  return (
    <S.Container>
      <FormGroup>
        {options.map(option => (
          <FormControlLabel control={<S.FormCheckBox />} label={option} />
        ))}

        {isEtc && (
          <FormControlLabel control={<S.FormCheckBox />} label='기타...' />
        )}
      </FormGroup>
    </S.Container>
  );
}
