/* eslint-disable react/require-default-props */
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from 'hooks';
import { setOption } from 'store';
import { IconButton } from 'components';
import { IFormState } from 'types/form';
import * as S from './DropDownInput.style';

interface IOption {
  key: string;
  idx: number;
  value: string;
}
interface IDropDownInputProps {
  form: IFormState;
}
interface IDropDownItemProps {
  isAdder: boolean;
  option: IOption;
  totalLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete?: () => void;
  onAdd?: () => void;
}

function DropDownItem({
  isAdder,
  option,
  totalLength,
  onChange,
  onDelete,
  onAdd,
}: IDropDownItemProps) {
  return (
    <S.DropDownItemContainer>
      <span>{option.idx}</span>
      {isAdder ? (
        <S.DropDownAdderButton onClick={onAdd}>옵션 추가</S.DropDownAdderButton>
      ) : (
        <>
          <S.DropDownItemTextField
            id='standard-basic'
            variant='standard'
            autoFocus
            value={option.value}
            onChange={onChange}
          />
          {totalLength && totalLength > 1 && (
            <IconButton style={{ marginLeft: '4px' }} onClick={onDelete}>
              <CloseIcon />
            </IconButton>
          )}
        </>
      )}
    </S.DropDownItemContainer>
  );
}

export function DropDownInput({ form }: IDropDownInputProps) {
  const op = form.options as Array<string>;
  const dispatch = useAppDispatch();

  const [options, setOptions] = useState<Array<IOption>>(
    op.map((o, idx) => ({ idx: idx + 1, key: nanoid(), value: o })),
  );

  const onAdd = () => {
    const nextState = [
      ...options.map((option, idx) => ({
        ...option,
        idx: idx + 1,
      })),
      {
        idx: options.length + 1,
        key: nanoid(),
        value: `옵션 ${options.length + 1}`,
      },
    ];
    dispatch(
      setOption({
        key: form.key,
        options: options.map(option => option.value),
      }),
    );
    setOptions(nextState);
  };

  const onDelete = ({ key }: { key: string }) => {
    const nextState = options.reduce(
      (acc: Array<IOption>, cur: IOption, idx: number) => {
        if (cur.key === key) {
          return acc;
        }

        return [
          ...acc,
          {
            ...cur,
            idx: idx + 1,
          },
        ];
      },
      [],
    );

    dispatch(
      setOption({
        key: form.key,
        options: nextState.map(option => option.value),
      }),
    );
    setOptions(nextState);
  };

  const onChange =
    ({ key }: { key: string }) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nextState = options.map(option => {
        if (option.key === key) {
          return {
            ...option,
            value: e.target.value,
          };
        }

        return option;
      });

      dispatch(
        setOption({
          key: form.key,
          options: nextState.map(option => option.value),
        }),
      );
      setOptions(nextState);
    };

  return (
    <S.DropDownInputContainer>
      {options.map(option => (
        <DropDownItem
          key={option.key}
          totalLength={options.length}
          isAdder={false}
          option={option}
          onChange={onChange({ key: option.key })}
          onDelete={() => onDelete({ key: option.key })}
        />
      ))}
      <DropDownItem
        isAdder
        onAdd={onAdd}
        option={{ idx: options.length + 1, key: nanoid(), value: '' }}
      />
    </S.DropDownInputContainer>
  );
}
