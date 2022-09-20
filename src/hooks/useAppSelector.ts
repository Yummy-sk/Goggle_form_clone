import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'types/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
