import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { IconButton, Select } from 'components';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import ShortTextIcon from '@mui/icons-material/ShortText';
import LongTextIcon from '@mui/icons-material/Notes';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { SelectChangeEvent } from '@mui/material';
import * as S from './FormCardActive.style';

interface IForms {
  key: string;
  text: string;
  value: string;
  img: JSX.Element;
}

export function FormCardActive() {
  const [selection, setSelection] = useState<string>('radio');

  const forms: Array<IForms> = [
    {
      key: nanoid(),
      text: '단답형',
      value: 'short-text',
      img: <ShortTextIcon />,
    },
    {
      key: nanoid(),
      text: '장문형',
      value: 'long-text',
      img: <LongTextIcon />,
    },
    {
      key: nanoid(),
      text: '객관식 질문',
      value: 'radio',
      img: <RadioButtonCheckedIcon />,
    },
    {
      key: nanoid(),
      text: '체크박스',
      value: 'checkbox',
      img: <CheckBoxIcon />,
    },
    {
      key: nanoid(),
      text: '드롭다운',
      value: 'dropdown',
      img: <ArrowDropDownCircleIcon />,
    },
  ];

  const onChange = (e: SelectChangeEvent<unknown>) => {
    const { value } = e.target;
    setSelection(value as string);
  };

  return (
    <S.CardContainer>
      <S.CardActivator />
      <S.CardContentWrapper>
        <S.CardContentHeader>
          <S.DragIndicator />
        </S.CardContentHeader>
        <S.CardContentInfo>
          <S.CardContentTitle
            id='filled-basic'
            placeholder='질문'
            variant='filled'
          />
          <IconButton>
            <ImageIcon />
          </IconButton>
          <Select value={selection} onChange={onChange}>
            {forms.map(form => (
              <S.CardSelectItem key={form.key} value={form.value}>
                {form.img} {form.text}
              </S.CardSelectItem>
            ))}
          </Select>
        </S.CardContentInfo>
      </S.CardContentWrapper>
    </S.CardContainer>
  );
}
