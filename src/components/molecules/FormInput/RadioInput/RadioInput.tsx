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
  onDelete: () => void;
}

interface IRadioAdderProps {
  isEtcIncluded: boolean;
  onAdd: () => void;
  onEtcAdd: () => void;
}

function RadioSelection({
  option,
  optionLength,
  onMouseLeave,
  onMouseOver,
  onBlur,
  onClick,
  onDelete,
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
        <IconButton style={{ marginLeft: '4px' }} onClick={onDelete}>
          <CloseIcon />
        </IconButton>
      )}
    </S.RadioSelectionContainer>
  );
}

function RadioAdder({ isEtcIncluded, onAdd, onEtcAdd }: IRadioAdderProps) {
  return (
    <S.RadioAdderContainer>
      <S.RadioIcon />
      <S.RadioAdderButton onClick={onAdd}>옵션 추가</S.RadioAdderButton>
      {!isEtcIncluded && (
        <>
          <span>또는</span>
          <S.RadioEtcAddButton onClick={onEtcAdd}>
            &lsquo;기타&lsquo; 추가
          </S.RadioEtcAddButton>
        </>
      )}
    </S.RadioAdderContainer>
  );
}

function RadioEtcOption({ onEtcAdd }: { onEtcAdd: () => void }) {
  return (
    <S.RadioEtcOptionContainer>
      <S.RadioIcon />
      <S.RadioEtcInput id='standard-basic' variant='standard' value='기타...' />
      <IconButton style={{ marginLeft: '4px' }} onClick={onEtcAdd}>
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
  const [isEtcIncluded, setIsEtcIncluded] = useState<boolean>(false);

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

  const onDelete = ({ key }: { key: string }) => {
    if (options.length > 1) {
      const newOptions = options.filter(
        (option, idx) => option.key !== key && { ...option, idx: idx + 1 },
      );

      setOptions(newOptions);
    }
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

  const onEtcAdd = () => setIsEtcIncluded((prev: boolean) => !prev);

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
          onDelete={() => onDelete({ key: option.key })}
        />
      ))}
      {isEtcIncluded && <RadioEtcOption onEtcAdd={onEtcAdd} />}
      <RadioAdder
        onAdd={onAdd}
        isEtcIncluded={isEtcIncluded}
        onEtcAdd={onEtcAdd}
      />
    </S.RadioInputContainer>
  );
}
