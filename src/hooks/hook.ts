import { useDispatch, useSelector, type TypedUseSelectorHook, useStore } from "react-redux";
import type { AppDispatch, AppStore, RootState } from "../redux/stores";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore: () => AppStore = useStore
