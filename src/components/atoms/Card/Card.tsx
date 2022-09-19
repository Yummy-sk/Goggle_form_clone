import * as S from './Card.style';

interface ICardProps {
  children: React.ReactNode;
}

export function Card({ children }: ICardProps) {
  return <S.CardContainer>{children}</S.CardContainer>;
}
