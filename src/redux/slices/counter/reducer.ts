import { PayloadAction } from "@reduxjs/toolkit";
import type { ICounterInitialReduxState } from "../../interfaces";

const incrementAction: (state: ICounterInitialReduxState) => void = (
  state: ICounterInitialReduxState
): void => {
  state.count += 1;
};

const decrementAction: (state: ICounterInitialReduxState) => void = (
  state: ICounterInitialReduxState
): void => {
  state.count -= 1;
};

const incrementByAmountAction: (
  state: ICounterInitialReduxState,
  action: PayloadAction<number>
) => void = (
  state: ICounterInitialReduxState,
  action: PayloadAction<number>
): void => {
  state.count += action.payload;
};

export default {
  increment: incrementAction,
  decrement: decrementAction,
  incrementByAmount: incrementByAmountAction,
};
