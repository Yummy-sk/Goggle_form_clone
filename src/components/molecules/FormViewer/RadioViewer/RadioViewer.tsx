import { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Radio, RadioGroup, FormControl } from '@mui/material';
import { IFormState, ISelection, IStateChangeProps } from 'types/form';
import * as S from './RadioViewer.style';

interface IRadioViewerProps {
  isInit?: boolean | null;
  setIsInit?: React.Dispatch<React.SetStateAction<boolean>> | null;
  form: IFormState | ISelection;
  handleChange?: ({ nextValue }: IStateChangeProps) => void | null;
}

interface IInitialValue {
  key: string;
  value: string;
  checked: boolean;
  isEtc: boolean;
}

function getInitialState({
  options,
  isEtc,
}: {
  options: string | Array<string> | undefined;
  isEtc: boolean | undefined;
}) {
  if (!Array.isArray(options) || isEtc === undefined) return [];

  const initialState: Array<IInitialValue> = options.map(option => ({
    key: nanoid(),
    value: option,
    checked: false,
    isEtc: false,
  }));

  if (isEtc) {
    return [
      ...initialState,
      { key: nanoid(), value: '기타...', checked: false, isEtc: true },
    ];
  }

  return initialState;
}

export function RadioViewer({
  isInit,
  setIsInit,
  form,
  handleChange,
}: IRadioViewerProps) {
  const { options, isEtc } = form;

  const [selection, setSelection] = useState<Array<IInitialValue>>(
    getInitialState({ options, isEtc }),
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (handleChange) {
      handleChange({ nextValue: e.target.value });
    }

    setSelection(prevState =>
      prevState.map(item => ({
        ...item,
        checked: item.value === e.target.value,
      })),
    );
  };

  useEffect(() => {
    if (isInit !== null && setIsInit) {
      setSelection(prevState =>
        prevState.map(item => ({ ...item, checked: false })),
      );
      setIsInit(false);
    }
  }, [isInit, setIsInit]);

  return (
    <S.Container>
      <FormControl>
        <RadioGroup name='radio-buttons-group' onChange={onChange}>
          {selection.map(sel => (
            <S.RadioControl
              key={sel.key}
              value={sel.value}
              control={<Radio />}
              label={sel.value}
              checked={sel.checked}
              style={sel.isEtc ? { color: '#70757a' } : {}}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </S.Container>
  );
}

RadioViewer.defaultProps = {
  isInit: null,
  setIsInit: null,
  handleChange: null,
};
