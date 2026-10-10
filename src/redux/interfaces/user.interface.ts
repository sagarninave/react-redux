export interface IUserInitialReduxState {
  usersList: IUsersList;
  userDetails: IUserDetails;
}

export interface IUsersList {
  loading: boolean;
  data: IUserReduxState[] | null;
  error: string;
}

export interface IUserDetails {
  loading: boolean;
  data: IUserReduxState | null;
  error: string;
}

export interface IUserReduxState {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
}
