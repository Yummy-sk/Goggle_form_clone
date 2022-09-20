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
      onMouseLeave={onMouseLeave}>
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
    </S.RadioInputContainer>
  );
}
