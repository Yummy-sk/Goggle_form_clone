import { Layout, Navigation, TitleCard } from 'components';

export function Main() {
  return (
    <>
      <Navigation title='제목 없는 설문지' />
      <Layout isMain>
        <TitleCard title='제목 없는 설문지' description='' isActivated />
      </Layout>
    </>
  );
}
