import { createSlice } from "@reduxjs/toolkit";
import { extraReducers } from "./extraReducers";
import reducers from "./reducer";
import initialState from "./initialState";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: reducers,
  extraReducers: extraReducers,
});

export const { setUserDetails } = userSlice.actions;
export const { reducer: userReducer } = userSlice;
