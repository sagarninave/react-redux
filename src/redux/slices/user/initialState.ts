import type { IUserInitialReduxState } from "../../interfaces";

export default {
  usersList: {
    loading: false,
    data: null,
    error: "",
  },
  userDetails: {
    loading: false,
    data: null,
    error: "",
  },
} as IUserInitialReduxState;
