import { Helmet } from 'react-helmet-async';
import { useAppSelector } from 'hooks';
import { Layout } from 'components';

export function Result() {
  const { items } = useAppSelector(state => state.form);

  const [titleInfo] = items.filter(item => item.type === 'title');

  if (!items || !titleInfo || items.length <= 1) return null;

  return (
    <>
      <Helmet title={titleInfo.title} />
      <Layout isMain={false}>Result</Layout>
    </>
  );
}
