import { Fab } from '@mui/material';

interface IFloatButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export function FloatingButton({
  children,
  onClick,
  ...props
}: IFloatButtonProps) {
  return (
    <Fab {...props} onClick={onClick}>
      {children}
    </Fab>
  );
}
