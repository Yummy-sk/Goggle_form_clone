import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from 'hooks';
import { Layout, ResultContents } from 'components';
import { IResultStore } from 'types/result';

function checkIsNotValidState({ title, result }: IResultStore) {
  return (
    title === null ||
    title === undefined ||
    result === null ||
    result === undefined ||
    result.length === 0
  );
}

export function Result() {
  const navigate = useNavigate();
  const { title, result } = useAppSelector(state => state.result);

  const isNotValid = checkIsNotValidState({ title, result });

  useEffect(() => {
    if (isNotValid) {
      navigate('/', { replace: true });
    }
  }, [title, result, navigate, isNotValid]);

  if (isNotValid) return null;

  return (
    <>
      <Helmet title={title} />
      <Layout isMain={false}>
        <ResultContents result={result} />
      </Layout>
    </>
  );
}
