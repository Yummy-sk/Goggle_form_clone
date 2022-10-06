import { useCallback, memo } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { TitleCard, FormCard } from 'components';
import { useAppDispatch } from 'hooks';
import {
  updateTitleForm,
  setActivated,
  removeForm,
  duplicateForm,
  setRequired,
  setFormTitle,
  setFormType,
  setFormSequence,
} from 'store';
import { IFormState, ITypes } from 'types/form';
import { getStateWhenChangeOption } from './helper';
import * as S from './MainContents.style';

interface IMainContentsProps {
  items: Array<IFormState>;
  titleState: IFormState;
  formState: Array<IFormState>;
}

/**
 * MainContents
 *
 * 주 컨텐츠 영역을 포함하는 컴포넌트입니다.
 *
 * 여기에서 상태 값에 대한 핸들링 함수를 정의하고 props로 전달합니다.
 *
 * @param items
 * @param titleState
 * @param formState
 * @returns JSX.Element
 */

function MainContents({ items, titleState, formState }: IMainContentsProps) {
  const dispatch = useAppDispatch();
  const { key, title, description, isActivated } = titleState;

  // Form 전체 타이틀 변경 dispatch 함수
  const onUpdateFormTitle = useCallback(
    ({
      e,
      type,
    }: {
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
      type: 'title' | 'description';
    }) => {
      dispatch(updateTitleForm({ type, value: e.target.value }));
    },
    [dispatch],
  );

  // 카드 활성화 상태 dispatch 함수
  const onActivate = useCallback(
    ({ formKey }: { formKey: string }) =>
      dispatch(setActivated({ key: formKey })),
    [dispatch],
  );

  // 카드 삭제 dispatch 함수
  const onRemove = useCallback(
    ({ formKey }: { formKey: string }) =>
      (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();

        dispatch(
          removeForm({
            key: formKey,
            state: items,
          }),
        );
      },
    [dispatch, items],
  );

  // 카드 복제 dispatch 함수
  const onDuplicate = useCallback(
    ({ formKey }: { formKey: string }) =>
      (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();

        dispatch(
          duplicateForm({
            state: items,
            targetItem: items.find(item => item.key === formKey) as IFormState,
          }),
        );
      },
    [dispatch, items],
  );

  // 카드 필수 옵션 dispatch 함수
  const onRequired = useCallback(
    ({ formKey }: { formKey: string }) => {
      dispatch(
        setRequired({
          key: formKey,
          state: items,
        }),
      );
    },
    [dispatch, items],
  );

  // 카드 제목 변경 dispatch 함수
  const onChangeTitle = useCallback(
    ({ formKey }: { formKey: string }) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
          setFormTitle({ key: formKey, title: e.target.value, state: items }),
        );
      },
    [dispatch, items],
  );

  // 카드 타입 변경 dispatch 함수
  const onChangeFormType = useCallback(
    ({ formKey }: { formKey: string }) =>
      ({ type, form }: { type: ITypes; form: IFormState }) => {
        const nextState = getStateWhenChangeOption({ type, form });

        if (nextState) {
          dispatch(setFormType({ key: formKey, nextState }));
        }
      },
    [dispatch],
  );

  // 카드 순서 변경 dispatch 함수
  const onChangeSequence = useCallback(
    ({
      sourceIdx,
      destinationIdx,
    }: {
      sourceIdx: number;
      destinationIdx: number;
    }) => {
      // 원래 있던거
      const targetItem = items[sourceIdx];
      // 원래 있던거를 지우고
      const nextState = items.filter(item => item.key !== targetItem.key);
      // 새로운 위치에 넣어준다.
      nextState.splice(destinationIdx, 0, targetItem);
      dispatch(
        setFormSequence({
          nextState: nextState.map((item, idx) => ({
            ...item,
            idx: idx + 1,
          })),
        }),
      );
    },
    [dispatch, items],
  );

  return (
    <DragDropContext
      onDragEnd={(param: DropResult) => {
        const { destination, source } = param;

        onChangeSequence({
          sourceIdx: source.index,
          destinationIdx: destination?.index || 0,
        });
      }}>
      <S.MainContentsContainer>
        <TitleCard
          title={title}
          description={description || ''}
          isActivated={isActivated}
          onUpdateFormTitle={onUpdateFormTitle}
          onActivate={() => onActivate({ formKey: key })}
        />
        <Droppable droppableId='card-drop'>
          {(provided, _) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ width: '100%', maxWidth: '800px' }}>
              {formState.map(form => (
                <FormCard
                  key={form.key}
                  form={form}
                  onActivate={() => onActivate({ formKey: form.key })}
                  onRemove={onRemove({ formKey: form.key })}
                  onDuplicate={onDuplicate({ formKey: form.key })}
                  onRequired={() => onRequired({ formKey: form.key })}
                  onChangeTitle={onChangeTitle({ formKey: form.key })}
                  onChangeFormType={onChangeFormType({ formKey: form.key })}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </S.MainContentsContainer>
    </DragDropContext>
  );
}

const MemoizedMainContents = memo(MainContents);

export { MemoizedMainContents as MainContents };
