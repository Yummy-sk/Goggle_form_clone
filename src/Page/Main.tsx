import { addForm } from 'store';
import { useAppDispatch } from 'hooks';
import { Layout, Navigation, MainContents, FormAddButton } from 'components';

export function Main() {
  const dispatch = useAppDispatch();
  const onFormAdd = () => dispatch(addForm());

  return (
    <>
      <Navigation title='제목 없는 설문지' />
      <Layout isMain>
        <MainContents />
      </Layout>
      <FormAddButton onFormAdd={onFormAdd} />
    </>
  );
}
