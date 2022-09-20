import { TitleCard, FormCard } from 'components';
import { useAppSelector, useAppDispatch } from 'hooks';
import { setActivated } from 'store';
import * as S from './MainContents.style';

export function MainContents() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(state => state.form);
  const titleState = items.find(item => item.type === 'title');

  if (!titleState) return null;

  const { key, title, description, isActivated } = titleState;

  const onActivate = ({ formKey }: { formKey: string }) =>
    dispatch(setActivated({ key: formKey }));

  return (
    <S.MainContentsContainer>
      <TitleCard
        title={title}
        description={description || ''}
        isActivated={isActivated}
        onActivate={() => onActivate({ formKey: key })}
      />
      <FormCard isActivated />
    </S.MainContentsContainer>
  );
}
