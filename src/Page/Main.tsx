import { Layout, Navigation, MainContents } from 'components';

export function Main() {
  return (
    <>
      <Navigation title='제목 없는 설문지' />
      <Layout isMain>
        <MainContents />
      </Layout>
    </>
  );
}
