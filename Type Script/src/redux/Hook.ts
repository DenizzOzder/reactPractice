// src/redux/hooks.ts (veya store klasörün neredeyse)

import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store'; // store.ts'den tipleri çekiyoruz

// Normal useDispatch ve useSelector yerine proje boyunca bunları kullanacağız
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;