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

/**
 * getInitialState
 *
 * Radio 초기 상태값을 반환합니다.
 *
 * @param options
 * @returns initialState
 */

function getInitialState({
  options,
  isEtc,
}: {
  options: string | Array<string> | undefined;
  isEtc: boolean | undefined;
}) {
  if (!Array.isArray(options) || isEtc === undefined) return [];

  // 초기 상태값을 셋팅하고
  const initialState: Array<IInitialValue> = options.map(option => ({
    key: nanoid(),
    value: option,
    checked: false,
    isEtc: false,
  }));

  // isEtc가 true일 경우 마지막에 etc를 추가합니다.
  if (isEtc) {
    return [
      ...initialState,
      { key: nanoid(), value: '기타...', checked: false, isEtc: true },
    ];
  }

  return initialState;
}

/**
 * RadioViewer
 *
 * Radio 컴포넌트를 선택할 수 있는 컴포넌트입니다.
 *
 * @param isInit - 초기화 여부
 * @param setIsInit - 초기화 함수
 * @param form - 선택 정보
 * @param handleChange - 선택 정보 변경 함수
 * @returns JSX.Element
 */

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
    // 변경된 값을 useForm 상태값에 반영한다.
    if (handleChange) {
      handleChange({ nextValue: e.target.value });
    }

    // 현재 상태값에 반영한다.
    setSelection(prevState =>
      prevState.map(item => ({
        ...item,
        checked: item.value === e.target.value,
      })),
    );
  };

  useEffect(() => {
    // 값의 초기화가 발생했을 때, 기존의 상태값을 모두 폐기한다.
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
