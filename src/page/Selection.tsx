import { useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { Layout, SelectionContents } from 'components';
import { IFormState } from 'types/form';

interface IReudceState {
  titleState: IFormState | null;
  formState: Array<IFormState>;
}

export function Selection() {
  const navigate = useNavigate();
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

  useEffect(() => {
    if (!items || items.length <= 1 || !titleState) {
      navigate('/');
    }
  }, [items, titleState, navigate]);

  if (!titleState || !formState) {
    return null;
  }

  return (
    <>
      <Helmet title={titleState.title} />
      <Layout isMain={false}>
        <SelectionContents titleState={titleState} formState={formState} />
      </Layout>
    </>
  );
}
