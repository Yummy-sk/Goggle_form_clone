import * as S from './Select.style';

interface ISelectProps {
  isWithImg: boolean;
  value: string;
  selectItems: Array<{
    key: string;
    value: string;
    img?: string;
  }>;
  onChange: () => void;
}

export function Select({
  isWithImg,
  value,
  selectItems,
  onChange,
}: ISelectProps) {
  return (
    <S.FormControlContainer fullWidth>
      <S.FormSelect value={value} onChange={onChange}>
        {selectItems.map(item => {
          return (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>
              {isWithImg ? (
                <span>
                  <img src={item.img} alt={item.value} />
                  {item.value}
                </span>
              ) : (
                <span>{item.value}</span>
              )}
            </>
          );
        })}
      </S.FormSelect>
    </S.FormControlContainer>
  );
}
