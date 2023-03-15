import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
