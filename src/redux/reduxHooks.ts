import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { rootReducer } from './rootReducer';
import { useDispatch } from 'react-redux';
import { Store } from './Store';

type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof Store.dispatch

export const useTypeSelector:TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>()
