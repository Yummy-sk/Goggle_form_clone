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

/**
 * Result
 *
 * 제출한 입력에 대한 결과 페이지를 보여주는 컴포넌트 입니다.
 *
 * @returns JSX.Element
 */
export function Result() {
  const navigate = useNavigate();
  const { title, result } = useAppSelector(state => state.result);

  const isNotValid = checkIsNotValidState({ title, result });

  useEffect(() => {
    // 유효하지 않으면 메인 페이지로 이동
    if (isNotValid) {
      navigate('/', { replace: true });
    }
  }, [title, result, navigate, isNotValid]);

  if (isNotValid) return null;

  return (
    <>
      <Helmet title={title} />
      <Layout isMain={false}>
        <ResultContents title={title} result={result} />
      </Layout>
    </>
  );
}
