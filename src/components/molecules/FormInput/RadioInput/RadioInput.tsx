import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from 'components';
import * as S from './RadioInput.style';

interface IRadioSelectionProps {
  option: {
    idx: number;
    key: string;
    value: string | number;
    isMouseOver: boolean;
    isFocused: boolean;
  };
  optionLength: number;
  onMouseLeave: () => void;
  onMouseOver: () => void;
  onBlur: () => void;
  onClick: () => void;
}

interface IRadioAdderProps {
  onAdd: () => void;
}

function RadioSelection({
  option,
  optionLength,
  onMouseLeave,
  onMouseOver,
  onBlur,
  onClick,
}: IRadioSelectionProps) {
  const { value, isMouseOver, isFocused } = option;

  return (
    <S.RadioSelectionContainer
      onMouseOver={onMouseOver}
      onMouseOut={onMouseLeave}>
      <S.RadioIcon />
      <S.RadioTextInput
        id='standard-basic'
        variant='standard'
        value={value}
        onClick={onClick}
        onBlur={onBlur}
      />
      {(isMouseOver || isFocused) && (
        <IconButton style={{ marginLeft: '4px' }}>
          <ImageIcon />
        </IconButton>
      )}
      {optionLength > 1 && (
        <IconButton style={{ marginLeft: '4px' }}>
          <CloseIcon />
        </IconButton>
      )}
    </S.RadioSelectionContainer>
  );
}

function RadioAdder({ onAdd }: IRadioAdderProps) {
  return (
    <S.RadioAdderContainer>
      <S.RadioIcon />
      <S.RadioAdderButton onClick={onAdd}>옵션 추가</S.RadioAdderButton>
      <span>또는</span>
      <S.RadioEtcAddButton>&lsquo;기타&lsquo; 추가</S.RadioEtcAddButton>
    </S.RadioAdderContainer>
  );
}

function RadioEtcOption() {
  return (
    <S.RadioEtcOptionContainer>
      <S.RadioIcon />
      <S.RadioEtcInput id='standard-basic' variant='standard' value='기타...' />
      <IconButton style={{ marginLeft: '4px' }}>
        <CloseIcon />
      </IconButton>
    </S.RadioEtcOptionContainer>
  );
}

export function RadioInput() {
  const [options, setOptions] = useState([
    {
      idx: 1,
      key: nanoid(),
      value: '옵션 1',
      isMouseOver: false,
      isFocused: false,
    },
  ]);

  const onMouseOver = ({ key }: { key: string }) => {
    setOptions(
      options.map(option =>
        option.key === key ? { ...option, isMouseOver: true } : { ...option },
      ),
    );
  };

  const onMouseLeave = ({ key }: { key: string }) => {
    setOptions(
      options.map(option =>
        option.key === key ? { ...option, isMouseOver: false } : { ...option },
      ),
    );
  };

  const onClick = ({ key }: { key: string }) => {
    setOptions(
      options.map(option =>
        option.key === key
          ? { ...option, isFocused: true }
          : { ...option, isFocused: false },
      ),
    );
  };

  const onBlur = ({ key }: { key: string }) => {
    setOptions(
      options.map(option =>
        option.key === key ? { ...option, isFocused: false } : { ...option },
      ),
    );
  };

  const onAdd = () => {
    setOptions([
      ...options.map(option => ({ ...option, isFocused: false })),
      {
        idx: options.length + 1,
        key: nanoid(),
        value: `옵션 ${options.length + 1}`,
        isMouseOver: false,
        isFocused: false,
      },
    ]);
  };

  return (
    <S.RadioInputContainer>
      {options.map(option => (
        <RadioSelection
          key={option.key}
          option={option}
          optionLength={options.length}
          onMouseLeave={() => onMouseLeave({ key: option.key })}
          onMouseOver={() => onMouseOver({ key: option.key })}
          onBlur={() => onBlur({ key: option.key })}
          onClick={() => onClick({ key: option.key })}
        />
      ))}
      <RadioEtcOption />
      <RadioAdder onAdd={onAdd} />
    </S.RadioInputContainer>
  );
}
