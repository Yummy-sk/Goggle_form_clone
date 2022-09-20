import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { IconButton, Select, Switch } from 'components';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import ShortTextIcon from '@mui/icons-material/ShortText';
import LongTextIcon from '@mui/icons-material/Notes';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { SelectChangeEvent, Divider, Typography } from '@mui/material';
import * as S from './FormCardActive.style';

interface IForms {
  key: string;
  text: string;
  value: string;
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
  onDelete: () => void;
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

function FormOptions({
  isRequired,
  onDuplicate,
  onDelete,
  onRequired,
}: IFormOptionProps) {
  return (
    <S.CardContentOptions>
      <Divider />
      <S.CardContentOptionsWrapper>
        <IconButton onClick={onDuplicate}>
          <ContentCopyRoundedIcon style={{ width: '30px', height: '30px' }} />
        </IconButton>
        <IconButton onClick={onDelete}>
          <DeleteOutlineIcon style={{ width: '30px', height: '30px' }} />
        </IconButton>
        <Divider orientation='vertical' flexItem />
        <Typography>필수</Typography>
        <Switch checked={isRequired} onChange={onRequired} />
      </S.CardContentOptionsWrapper>
    </S.CardContentOptions>
  );
}

export function FormCardActive() {
  const [selection, setSelection] = useState<string>('radio');
  const [isRequired, setIsRequired] = useState<boolean>(false);

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

  const onDuplicate = () => {};
  const onDelete = () => {};
  const onRequired = () => setIsRequired(prev => !prev);

  return (
    <S.CardContainer>
      <S.CardActivator />
      <S.CardContentWrapper>
        <S.CardContentHeader>
          <S.DragIndicator />
        </S.CardContentHeader>
        <FormInfo selection={selection} forms={forms} onChange={onChange} />
        <FormOptions
          isRequired={isRequired}
          onDuplicate={onDuplicate}
          onDelete={onDelete}
          onRequired={onRequired}
        />
      </S.CardContentWrapper>
    </S.CardContainer>
  );
}
