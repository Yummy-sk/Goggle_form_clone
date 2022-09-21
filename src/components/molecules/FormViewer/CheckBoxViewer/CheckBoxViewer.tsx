import { useState, useCallback, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { FormGroup, FormControlLabel } from '@mui/material';
import { IFormState, ISelection } from 'types/form';
import * as S from './CheckBoxViewer.style';

interface IInitialValue {
  key: string;
  label: string;
  checked: boolean;
}

interface ICheckBoxViewerProps {
  isInit?: boolean | null;
  setIsInit?: React.Dispatch<React.SetStateAction<boolean>> | null;
  form: IFormState | ISelection;
  handleChange?: ({ nextValue }: { nextValue: string[] }) => void | null;
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
    label: option,
    checked: false,
  }));

  if (isEtc) {
    return [
      ...initialState,
      { key: nanoid(), label: '기타...', checked: false },
    ];
  }

  return initialState;
}

export function CheckBoxViewer({
  isInit,
  setIsInit,
  form,
  handleChange,
}: ICheckBoxViewerProps) {
  const { options, isEtc } = form;

  const [selection, setSelection] = useState<Array<IInitialValue>>(
    getInitialState({ options, isEtc }),
  );

  const onChange = useCallback(
    ({ key }: { key: string }) => {
      const nextSelection = selection.map(item => {
        if (item.key === key) {
          return { ...item, checked: !item.checked };
        }

        return item;
      });

      if (handleChange) {
        const selectionValue = nextSelection.reduce(
          (acc: Array<string>, cur: IInitialValue) => {
            if (cur.checked) {
              return [...acc, cur.label];
            }

            return acc;
          },
          [],
        );

        handleChange({ nextValue: selectionValue });
      }

      setSelection(nextSelection);
    },
    [handleChange, selection],
  );

  useEffect(() => {
    if (isInit !== null && setIsInit) {
      setIsInit(false);
    }

    setSelection(getInitialState({ options, isEtc }));
  }, [options, isEtc, isInit, setIsInit]);

  if (!Array.isArray(options) || options.length === 0 || selection.length === 0)
    return null;

  return (
    <S.Container>
      <FormGroup>
        {selection.map(sel => (
          <FormControlLabel
            key={sel.key}
            control={<S.FormCheckBox />}
            label={sel.label}
            checked={sel.checked}
            onChange={() => onChange({ key: sel.key })}
          />
        ))}
      </FormGroup>
    </S.Container>
  );
}

CheckBoxViewer.defaultProps = {
  isInit: null,
  setIsInit: null,
  handleChange: null,
};
