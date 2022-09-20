import { useMemo } from 'react';
import { TitleCard, FormCard } from 'components';
import { useAppSelector, useAppDispatch } from 'hooks';
import { setActivated, removeForm, duplicateForm, setRequired } from 'store';
import { IFormState } from 'types/form';
import * as S from './MainContents.style';

interface IReudceState {
  titleState: IFormState | null;
  formState: Array<IFormState>;
}

export function MainContents() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(state => state.form);
  const { titleState, formState } = useMemo(
    () =>
      items.reduce(
        (acc: IReudceState, cur: IFormState) => {
          if (cur.type === 'title') return { ...acc, titleState: cur };
          return { ...acc, formState: [...acc.formState, cur] };
        },
        {
          titleState: null,
          formState: [],
        } as IReudceState,
      ),
    [items],
  );

  if (!titleState) return null;

  const { key, title, description, isActivated } = titleState;

  const onActivate = ({ formKey }: { formKey: string }) =>
    dispatch(setActivated({ key: formKey }));

  const onRemove = ({ formKey }: { formKey: string }) => {
    dispatch(
      removeForm({
        key: formKey,
        state: items,
      }),
    );
  };

  const onDuplicate = ({ formKey }: { formKey: string }) => {
    dispatch(
      duplicateForm({
        state: items,
        targetItem: items.find(item => item.key === formKey) as IFormState,
      }),
    );
  };

  const onRequired = ({ formKey }: { formKey: string }) => {
    dispatch(
      setRequired({
        key: formKey,
        state: items,
      }),
    );
  };

  return (
    <S.MainContentsContainer>
      <TitleCard
        title={title}
        description={description || ''}
        isActivated={isActivated}
        onActivate={() => onActivate({ formKey: key })}
      />
      {formState.map(form => (
        <FormCard
          key={form.key}
          form={form}
          onActivate={() => onActivate({ formKey: form.key })}
          onRemove={() => onRemove({ formKey: form.key })}
          onDuplicate={() => onDuplicate({ formKey: form.key })}
          onRequired={() => onRequired({ formKey: form.key })}
        />
      ))}
    </S.MainContentsContainer>
  );
}
