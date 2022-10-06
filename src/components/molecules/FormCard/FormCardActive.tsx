import { useState } from 'react';
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';
import { nanoid } from '@reduxjs/toolkit';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import ShortTextIcon from '@mui/icons-material/ShortText';
import LongTextIcon from '@mui/icons-material/Notes';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { SelectChangeEvent, Divider, Typography, Zoom } from '@mui/material';
import {
  IconButton,
  Select,
  Switch,
  RadioAndCheckBoxInput,
  DropDownInput,
  TextInput,
} from 'components';
import { IFormState, ITypes } from 'types/form';
import * as S from './FormCardActive.style';

interface IFormCardActiveProps {
  form: IFormState;
  onRemove: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDuplicate: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onRequired: () => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeFormType: ({
    type,
    form,
  }: {
    type: ITypes;
    form: IFormState;
  }) => void;
  dragHandleProps: DraggableProvidedDragHandleProps | undefined;
}

interface IForms {
  key: string;
  text: string;
  value: ITypes;
  img: JSX.Element;
}

interface IFormInfoProps {
  value: string;
  selection: string;
  forms: Array<IForms>;
  onChange: (e: SelectChangeEvent<unknown>) => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IFormOptionProps {
  isRequired: boolean;
  onDuplicate: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onRemove: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onRequired: () => void;
}

/**
 * FormInfo
 *
 * Form의 타이틀과 옵션 정보를 변경할 수 있습니다.
 *
 * @param value 타이틀 인풋의 상태값
 * @param selection 질문 유형 선택
 * @param forms 질문 유형 리스트
 * @param onChange 질문 유형 변경
 * @param onChangeTitle 질문 타이틀 변경
 * @returns JSX.Element
 */

function FormInfo({
  value,
  selection,
  forms,
  onChange,
  onChangeTitle,
}: IFormInfoProps) {
  return (
    <S.CardContentInfo>
      <S.CardContentTitle
        id='filled-basic'
        placeholder='질문'
        variant='filled'
        value={value}
        onChange={onChangeTitle}
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

/**
 * FormInput
 *
 * Form의 질문 유형에 따라 다른 입력 컴포넌트를 렌더링합니다.
 *
 * @param form FormCard의 상태값
 * @param selection FormCard 삭제
 * @returns JSX.Element
 */

export function FormInput({
  form,
  selection,
}: {
  form: IFormState;
  selection: ITypes;
}) {
  switch (selection) {
    case 'short-text':
      return <TextInput type='short-text' />;
    case 'long-text':
      return <TextInput type='long-text' />;
    case 'radio':
      return <RadioAndCheckBoxInput type='radio' form={form} />;
    case 'checkbox':
      return <RadioAndCheckBoxInput type='checkbox' form={form} />;
    case 'dropdown':
      return <DropDownInput form={form} />;
    default:
      return null;
  }
}

/**
 * FormOptions
 *
 * Form의 옵션을 변경할 수 있습니다.
 *
 * 이에는 복사, 삭제, 필수 여부를 설정할 수 있습니다.
 *
 * @param isRequired 입력값 필수 여부
 * @param onDuplicate FormCard 복제 dispatch 함수
 * @param onRemove FormCard 삭제 dispatch 함수
 * @param onRequired FormCard 필수 여부 dispatch 함수
 * @returns JSX.Element
 */

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

/**
 * FormCardActive
 *
 * Active 상태의 FormCard 컴포넌트입니다.
 *
 * 이에는 Header, Info, Input, Options가 포함되어 있습니다.
 *
 * Header는 DragHandle을 통해 드래그가 가능합니다.
 * Info 해당 폼의 타이틀과 옵션을 변경할 수 있습니다.
 * Input 해당 폼의 타입에 따라 다른 Input을 렌더링합니다.
 * Options 해당 폼의 옵션을 변경할 수 있습니다.
 *
 * @param form
 * @param onRemove
 * @param onDuplicate
 * @param onRequired
 * @param onChangeTitle
 * @param onChangeFormType
 * @param dragHandleProps
 * @returns JSX.Element
 */

export function FormCardActive({
  form,
  onChangeTitle,
  onDuplicate,
  onRemove,
  onRequired,
  onChangeFormType,
  dragHandleProps,
}: IFormCardActiveProps) {
  // 선택지 타입 상태값
  const [selection, setSelection] = useState<ITypes>(form.type);

  // 선택집 타입 구성 객체
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

    onChangeFormType({ type: value as ITypes, form });
    setSelection(value as ITypes);
  };

  if (form.isRequired === undefined || dragHandleProps === undefined)
    return null;

  return (
    <S.CardContainer>
      <Zoom in>
        <S.CardActivator />
      </Zoom>
      <S.CardContentWrapper>
        <S.CardContentHeader {...dragHandleProps}>
          <S.DragIndicator />
        </S.CardContentHeader>
        <FormInfo
          value={form.title}
          selection={selection}
          forms={forms}
          onChange={onChange}
          onChangeTitle={onChangeTitle}
        />
        <FormInput form={form} selection={selection} />
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
