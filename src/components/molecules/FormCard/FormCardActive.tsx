import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import ShortTextIcon from '@mui/icons-material/ShortText';
import LongTextIcon from '@mui/icons-material/Notes';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { SelectChangeEvent, Divider, Typography } from '@mui/material';
import {
  IconButton,
  Select,
  Switch,
  RadioInput,
  DropDownInput,
  LongTextInput,
  CheckBoxInput,
  ShortTextInput,
} from 'components';
import { IFormState } from 'types/form';
import * as S from './FormCardActive.style';

type SelectionTypes =
  | 'short-text'
  | 'long-text'
  | 'radio'
  | 'checkbox'
  | 'dropdown';

interface IFormCardActiveProps {
  form: IFormState;
  onRemove: () => void;
  onDuplicate: () => void;
  onRequired: () => void;
}

interface IForms {
  key: string;
  text: string;
  value: SelectionTypes;
  img: JSX.Element;
}

interface IFormInfoProps {
  selection: string;
  forms: Array<IForms>;
  onChange: (e: SelectChangeEvent<unknown>) => void;
}

interface IFormOptionProps {
  isRequired: boolean;
  onDuplicate: () => void;
  onRemove: () => void;
  onRequired: () => void;
}

function FormInfo({ selection, forms, onChange }: IFormInfoProps) {
  return (
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
  );
}

export function FormInput({ selection }: { selection: SelectionTypes }) {
  switch (selection) {
    case 'short-text':
      return <ShortTextInput />;
    case 'long-text':
      return <LongTextInput />;
    case 'radio':
      return <RadioInput />;
    case 'checkbox':
      return <CheckBoxInput />;
    case 'dropdown':
      return <DropDownInput />;
    default:
      return <ShortTextInput />;
  }
}

function FormOptions({
  isRequired,
  onDuplicate,
  onRemove,
  onRequired,
}: IFormOptionProps) {
  return (
    <S.CardContentOptions>
      <Divider />
      <S.CardContentOptionsWrapper>
        <IconButton onClick={onDuplicate}>
          <ContentCopyRoundedIcon style={{ width: '30px', height: '30px' }} />
        </IconButton>
        <IconButton onClick={onRemove}>
          <DeleteOutlineIcon style={{ width: '30px', height: '30px' }} />
        </IconButton>
        <Divider orientation='vertical' flexItem />
        <Typography>필수</Typography>
        <Switch checked={isRequired} onChange={onRequired} />
      </S.CardContentOptionsWrapper>
    </S.CardContentOptions>
  );
}

export function FormCardActive({
  form,
  onDuplicate,
  onRemove,
  onRequired,
}: IFormCardActiveProps) {
  const [selection, setSelection] = useState<SelectionTypes>('radio');

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
    setSelection(value as SelectionTypes);
  };

  if (form.isRequired === undefined) return null;

  return (
    <S.CardContainer>
      <S.CardActivator />
      <S.CardContentWrapper>
        <S.CardContentHeader>
          <S.DragIndicator />
        </S.CardContentHeader>
        <FormInfo selection={selection} forms={forms} onChange={onChange} />
        <FormInput selection={selection} />
        <FormOptions
          isRequired={form.isRequired}
          onDuplicate={onDuplicate}
          onRemove={onRemove}
          onRequired={onRequired}
        />
      </S.CardContentWrapper>
    </S.CardContainer>
  );
}
