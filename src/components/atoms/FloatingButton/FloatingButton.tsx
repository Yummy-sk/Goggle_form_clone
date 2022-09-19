import * as S from './FloatingButton.style';

interface IFloatButtonProps {
  children: React.ReactNode;
}

export function FloatingButton({ children, ...props }: IFloatButtonProps) {
  return <S.Button {...props}>{children}</S.Button>;
}
