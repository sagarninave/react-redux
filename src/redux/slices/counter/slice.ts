import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import reducers from "./reducer";

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: reducers,
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { reducer: counterReducer } = counterSlice;
