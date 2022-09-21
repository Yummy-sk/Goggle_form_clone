import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { addForm } from 'store';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Layout, Navigation, MainContents, FormAddButton } from 'components';
import { IFormState } from 'types/form';

interface IReudceState {
  titleState: IFormState | null;
  formState: Array<IFormState>;
}

export function Main() {
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

  const onFormAdd = () => dispatch(addForm());

  if (!titleState) return null;

  return (
    <>
      <Helmet title={titleState.title} />
      <Navigation title={titleState.title} />
      <Layout isMain>
        <MainContents
          items={items}
          titleState={titleState}
          formState={formState}
        />
      </Layout>
      <FormAddButton onFormAdd={onFormAdd} />
    </>
  );
}
