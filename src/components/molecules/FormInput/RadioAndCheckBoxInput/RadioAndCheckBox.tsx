import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import {
  DragDropContext,
  Droppable,
  DropResult,
  Draggable,
} from 'react-beautiful-dnd';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from 'components';
import { useAppDispatch } from 'hooks';
import { setOption, setEtc } from 'store';
import { IFormState } from 'types/form';
import * as S from './RadioAndCheckBox.style';

type TypeTypes = 'radio' | 'checkbox';
interface IOption {
  key: string;
  idx: number;
  value: string;
  isMouseOver: boolean;
  isFocused: boolean;
}

interface IRadioAndCheckBoxSelectionProps {
  type: TypeTypes;
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
  onUpdate: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IRadioAndCheckBoxAdderProps {
  type: TypeTypes;
  isEtcIncluded: boolean;
  onAdd: () => void;
  onEtcAdd: () => void;
}

function RadioAndCheckBoxSelection({
  type,
  option,
  optionLength,
  onMouseLeave,
  onMouseOver,
  onBlur,
  onClick,
  onDelete,
  onUpdate,
}: IRadioAndCheckBoxSelectionProps) {
  const { value, isMouseOver, isFocused } = option;

  return (
    <Draggable
      key={`item-${option.idx}`}
      draggableId={`item-${option.idx}`}
      index={option.idx}>
      {(provided, _) => (
        <S.RadioAndCheckBoxSelectionContainer
          onMouseOver={onMouseOver}
          onMouseOut={onMouseLeave}
          ref={provided.innerRef}
          {...provided.draggableProps}>
          <S.DragIndecatorWrapper
            {...provided.dragHandleProps}
            isVisible={isMouseOver || isFocused}>
            <S.RadioAndCheckBoxDragIndicator />
          </S.DragIndecatorWrapper>
          {type === 'radio' ? <S.RadioIcon /> : <S.CheckBoxIcon />}

          <S.RadioAndCheckBoxTextInput
            id='standard-basic'
            variant='standard'
            value={value}
            onClick={onClick}
            onBlur={onBlur}
            onChange={onUpdate}
          />
          <S.IconWrapper>
            {(isMouseOver || isFocused) && (
              <IconButton style={{ marginLeft: '4px' }}>
                <ImageIcon />
              </IconButton>
            )}
          </S.IconWrapper>
          <S.IconWrapper>
            {optionLength > 1 && (
              <IconButton style={{ marginLeft: '4px' }} onClick={onDelete}>
                <CloseIcon />
              </IconButton>
            )}
          </S.IconWrapper>
        </S.RadioAndCheckBoxSelectionContainer>
      )}
    </Draggable>
  );
}

function RadioAndCheckBoxAdder({
  type,
  isEtcIncluded,
  onAdd,
  onEtcAdd,
}: IRadioAndCheckBoxAdderProps) {
  return (
    <S.RadioAndCheckBoxAdderContainer>
      {type === 'radio' ? <S.RadioIcon /> : <S.CheckBoxIcon />}
      <S.RadioAndCheckBoxAdderButton onClick={onAdd}>
        옵션 추가
      </S.RadioAndCheckBoxAdderButton>
      {!isEtcIncluded && (
        <>
          <span>또는</span>
          <S.RadioAndCheckBoxEtcAddButton onClick={onEtcAdd}>
            &lsquo;기타&lsquo; 추가
          </S.RadioAndCheckBoxEtcAddButton>
        </>
      )}
    </S.RadioAndCheckBoxAdderContainer>
  );
}

function RadioAndCheckBoxEtcOption({
  type,
  onEtcAdd,
}: {
  type: TypeTypes;
  onEtcAdd: () => void;
}) {
  return (
    <S.RadioAndCheckBoxEtcOptionContainer>
      {type === 'radio' ? <S.RadioIcon /> : <S.CheckBoxIcon />}
      <S.RadioAndCheckBoxEtcInput
        id='standard-basic'
        variant='standard'
        value='기타...'
      />
      <S.IconEtcWrapper>
        <IconButton style={{ marginLeft: '4px' }} onClick={onEtcAdd}>
          <CloseIcon />
        </IconButton>
      </S.IconEtcWrapper>
    </S.RadioAndCheckBoxEtcOptionContainer>
  );
}

export function RadioAndCheckBoxInput({
  form,
  type,
}: {
  form: IFormState;
  type: TypeTypes;
}) {
  const dispatch = useAppDispatch();
  const op = form.options as Array<string>;
  const isEtc = form.isEtc as boolean;

  const [options, setOptions] = useState<Array<IOption>>([
    ...op.map((o, idx) => ({
      idx: idx + 1,
      key: nanoid(),
      value: o,
      isMouseOver: false,
      isFocused: false,
    })),
  ]);

  const [isEtcIncluded, setIsEtcIncluded] = useState<boolean>(isEtc);

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

      dispatch(
        setOption({
          key: form.key,
          options: newOptions.map(option => option.value),
        }),
      );

      setOptions(newOptions);
    }
  };

  const onAdd = () => {
    const nextState = [
      ...options.map(option => ({ ...option, isFocused: false })),
      {
        idx: options.length + 1,
        key: nanoid(),
        value: `옵션 ${options.length + 1}`,
        isMouseOver: false,
        isFocused: false,
      },
    ];

    dispatch(
      setOption({
        key: form.key,
        options: nextState.map(state => state.value),
      }),
    );
    setOptions(nextState);
  };

  const onEtcAdd = () => {
    const nextState = !isEtcIncluded;

    if (nextState) {
      dispatch(
        setEtc({
          key: form.key,
          isEtc: true,
        }),
      );

      setIsEtcIncluded(nextState);
      return;
    }

    dispatch(
      setEtc({
        key: form.key,
        isEtc: false,
      }),
    );

    setIsEtcIncluded(nextState);
  };

  const onUpdate =
    ({ key }: { key: string }) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const nextState = options.map(option =>
        option.key === key ? { ...option, value } : { ...option },
      );

      setOptions(nextState);
      dispatch(
        setOption({
          key: form.key,
          options: nextState.map(state => state.value),
        }),
      );
    };

  const onChangeSequence = ({
    sourceIdx,
    destinationIdx,
  }: {
    sourceIdx: number;
    destinationIdx: number;
  }) => {
    const targetItem = options[sourceIdx - 1];

    const nextState = options.filter(option => option.idx !== sourceIdx);

    nextState.splice(destinationIdx - 1, 0, targetItem);

    setOptions(
      nextState.map((option, idx) => ({
        ...option,
        idx: idx + 1,
      })),
    );

    dispatch(
      setOption({
        key: form.key,
        options: nextState.map(state => state.value),
      }),
    );
  };

  return (
    <DragDropContext
      onDragEnd={(param: DropResult) => {
        const { destination, source } = param;

        if (destination?.index) {
          onChangeSequence({
            sourceIdx: source.index,
            destinationIdx: destination.index,
          });
        }
      }}>
      <S.RadioAndCheckBoxInputContainer>
        <Droppable droppableId='selection-drop'>
          {(provided, _) => (
            <div
              ref={provided.innerRef}
              style={{ width: '100%' }}
              {...provided.droppableProps}>
              {options.map(option => (
                <RadioAndCheckBoxSelection
                  key={option.key}
                  type={type}
                  option={option}
                  optionLength={options.length}
                  onMouseLeave={() => onMouseLeave({ key: option.key })}
                  onMouseOver={() => onMouseOver({ key: option.key })}
                  onBlur={() => onBlur({ key: option.key })}
                  onClick={() => onClick({ key: option.key })}
                  onDelete={() => onDelete({ key: option.key })}
                  onUpdate={onUpdate({ key: option.key })}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        {isEtcIncluded && (
          <RadioAndCheckBoxEtcOption type={type} onEtcAdd={onEtcAdd} />
        )}
        <RadioAndCheckBoxAdder
          type={type}
          onAdd={onAdd}
          isEtcIncluded={isEtcIncluded}
          onEtcAdd={onEtcAdd}
        />
      </S.RadioAndCheckBoxInputContainer>
    </DragDropContext>
  );
}
