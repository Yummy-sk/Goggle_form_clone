import * as S from './Layout.style';

interface ILayoutProps {
  children: React.ReactNode;
  isMain: boolean;
}

export function Layout({ children, isMain }: ILayoutProps) {
  return (
    <S.LayoutContainer>
      <S.LayoutWrapper isMain={isMain}>{children}</S.LayoutWrapper>
    </S.LayoutContainer>
  );
}
