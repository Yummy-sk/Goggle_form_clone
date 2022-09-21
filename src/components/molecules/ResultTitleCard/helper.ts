interface IGetStringFromASCIIProps {
  ascii: number;
  idx: number;
}

export const getStringFromASCII = ({
  ascii,
  idx,
}: IGetStringFromASCIIProps): string => {
  const char = String.fromCharCode(ascii + idx);
  return char;
};
