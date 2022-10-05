import { memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { IFormState, ITypes } from 'types/form';
import { Grow } from '@mui/material';
import { FormCardActive } from './FormCardActive';
import { FormCardInactive } from './FormCardInactive';
import * as S from './FormCard.style';

interface IFormCardProps {
  form: IFormState;
  onActivate: () => void;
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
}

/**
 * FormCard
 *
 * 입력할 Form의 카드 컴포넌트입니다.
 *
 * 현재 카드의 Active 상태에 따라 FormCardActive 또는 FormCardInactive 컴포넌트를 렌더링합니다.
 *
 * @param form 카드에 들어갈 폼 상태 값
 * @param onActivate 카드 활성화 함수
 * @param onRemove 카드 삭제 dispatch 함수
 * @param onDuplicate 카드 복제 dispatch 함수
 * @param onRequired 카드 필수 옵션 여부 dispatch 함수
 * @param onChangeTitle 카드 제목 변경 dispatch 함수
 * @param onChangeFormType 카드 타입 변경 dispatch 함수
 * @returns JSX.Element
 */
function FormCard({
  form,
  onActivate,
  onRemove,
  onDuplicate,
  onRequired,
  onChangeTitle,
  onChangeFormType,
}: IFormCardProps) {
  return (
    <Draggable key={form.key} draggableId={form.key} index={form.idx - 1}>
      {(provided, _) => (
        <Grow in>
          <S.CardContainer
            onClick={onActivate}
            ref={provided.innerRef}
            {...provided.draggableProps}>
            {form.isActivated ? (
              <FormCardActive
                form={form}
                onChangeTitle={onChangeTitle}
                onRemove={onRemove}
                onDuplicate={onDuplicate}
                onRequired={onRequired}
                onChangeFormType={onChangeFormType}
                dragHandleProps={provided.dragHandleProps}
              />
            ) : (
              <FormCardInactive
                form={form}
                dragHandleProps={provided.dragHandleProps}
              />
            )}
          </S.CardContainer>
        </Grow>
      )}
    </Draggable>
  );
}

const MemoizedFormCard = memo(FormCard);

export { MemoizedFormCard as FormCard };
