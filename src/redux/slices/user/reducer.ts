import { PayloadAction } from "@reduxjs/toolkit";
import type { IUserReduxState, IUserInitialReduxState } from "../../interfaces";

export const setUserDetailsAction = (
  state: IUserInitialReduxState,
  action: PayloadAction<IUserReduxState>
): void => {
  state.userDetails.data = action.payload;
  state.usersList.data?.push(action.payload);
};

export default {
  setUserDetails: setUserDetailsAction,
};
