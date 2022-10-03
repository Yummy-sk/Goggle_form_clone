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
    <Draggable
      key={form.key}
      draggableId={`card-drag-${form.idx - 1}`}
      index={form.idx - 1}>
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
