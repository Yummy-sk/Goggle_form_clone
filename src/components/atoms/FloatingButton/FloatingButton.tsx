import { Fab } from '@mui/material';

interface IFloatButtonProps {
  children: React.ReactNode;
}

export function FloatingButton({ children, ...props }: IFloatButtonProps) {
  return <Fab {...props}>{children}</Fab>;
}
