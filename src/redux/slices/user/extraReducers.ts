/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { fetchUserDetailsById, fetchUsersList } from "./apiCall";

export const extraReducers = (builder: ActionReducerMapBuilder<any>): void => {
  fetchUsersListBuilder(builder);
  fetchUserDetailsByIdBuilder(builder);
};

export const fetchUsersListBuilder = (
  builder: ActionReducerMapBuilder<any>
): void => {
  builder
    .addCase(fetchUsersList.pending, (state): void => {
      state.usersList.loading = true;
    })
    .addCase(fetchUsersList.fulfilled, (state, actions): void => {
      state.usersList.loading = false;
      state.usersList.data = actions?.payload;
    })
    .addCase(fetchUsersList.rejected, (state, actions): void => {
      state.usersList.loading = false;
      state.usersList.error = actions.payload ?? "Something went wrong";
    });
};

export const fetchUserDetailsByIdBuilder = (
  builder: ActionReducerMapBuilder<any>
): void => {
  builder
    .addCase(fetchUserDetailsById.pending, (state): void => {
      state.userDetails.loading = true;
    })
    .addCase(fetchUserDetailsById.fulfilled, (state, actions): void => {
      state.userDetails.loading = false;
      state.userDetails.data = actions?.payload;
    })
    .addCase(fetchUserDetailsById.rejected, (state, actions): void => {
      state.userDetails.loading = false;
      state.userDetails.error = actions.payload ?? "Something went wrong";
    });
};
