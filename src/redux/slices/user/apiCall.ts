/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IUserReduxState } from "../../interfaces";

export const fetchUsersList: any = createAsyncThunk(
  "/users/fetchUsersList",
  async (): Promise<void> => {
    const response = await fetch("https://reqres.in/api/users");
    const { data } = await response.json();
    return data?.map((user: any) => ({
      id: user?.id,
      firstName: user?.first_name,
      lastName: user?.last_name,
      email: user?.email,
    }));
  }
);

export const fetchUserDetailsById: any = createAsyncThunk(
  "/users/fetchUserDetailsById",
  async (id: number): Promise<IUserReduxState> => {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    const { data } = await response.json();
    return {
      id: data?.id,
      firstName: data?.first_name,
      lastName: data?.last_name,
      email: data?.email,
    };
  }
);
