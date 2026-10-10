import { useDispatch, useSelector } from "react-redux";
import type { StoreReduxState, Dispatch } from "../types";

export const useAppDispatch = useDispatch.withTypes<Dispatch>();
export const useAppSelector = useSelector.withTypes<StoreReduxState>();
