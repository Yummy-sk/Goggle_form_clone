import { useCallback, memo } from 'react';
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
} from 'store';
import { IFormState, ITypes } from 'types/form';
import { getStateWhenChangeOption } from './helper';
import * as S from './MainContents.style';

interface IMainContentsProps {
  items: Array<IFormState>;
  titleState: IFormState;
  formState: Array<IFormState>;
}
function MainContents({ items, titleState, formState }: IMainContentsProps) {
  const dispatch = useAppDispatch();

  const { key, title, description, isActivated } = titleState;

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

  const onActivate = useCallback(
    ({ formKey }: { formKey: string }) =>
      dispatch(setActivated({ key: formKey })),
    [dispatch],
  );

  const onRemove = useCallback(
    ({ formKey }: { formKey: string }) => {
      dispatch(
        removeForm({
          key: formKey,
          state: items,
        }),
      );
    },
    [dispatch, items],
  );

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

  const onChangeTitle = useCallback(
    ({ formKey }: { formKey: string }) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
          setFormTitle({ key: formKey, title: e.target.value, state: items }),
        );
      },
    [dispatch, items],
  );

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

  return (
    <S.MainContentsContainer>
      <TitleCard
        title={title}
        description={description || ''}
        isActivated={isActivated}
        onUpdateFormTitle={onUpdateFormTitle}
        onActivate={() => onActivate({ formKey: key })}
      />
      {formState.map(form => (
        <FormCard
          key={form.key}
          form={form}
          onActivate={() => onActivate({ formKey: form.key })}
          onRemove={() => onRemove({ formKey: form.key })}
          onDuplicate={onDuplicate({ formKey: form.key })}
          onRequired={() => onRequired({ formKey: form.key })}
          onChangeTitle={onChangeTitle({ formKey: form.key })}
          onChangeFormType={onChangeFormType({ formKey: form.key })}
        />
      ))}
    </S.MainContentsContainer>
  );
}

const MemoizedMainContents = memo(MainContents);

export { MemoizedMainContents as MainContents };
