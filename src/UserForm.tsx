/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  fetchUsersList,
  fetchUserDetailsById,
} from "./redux/slices/user/apiCall";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { Dispatch, StoreReduxState } from "./redux/types";
import { setUserDetails } from "./redux/slices";
import { useForm } from "react-hook-form";
import { ReactElement, useEffect } from "react";
import type { IUserReduxState, IUsersList } from "./redux/interfaces";

const UserForm = () => {
  const { register, handleSubmit } = useForm();

  const dispatch: Dispatch = useAppDispatch();

  const usersList = useAppSelector(
    (store: StoreReduxState): IUsersList["data"] => store?.user?.usersList?.data
  );

  const userDetails: IUserReduxState = useAppSelector(
    (store: StoreReduxState): IUserReduxState => store?.user?.userDetails?.data
  );

  const onSubmit = (data: any) => {
    dispatch(setUserDetails(data));
  };

  useEffect(() => {
    dispatch(fetchUsersList());
  }, []);

  return (
    <div style={{ margin: "3rem 0 " }} id="form">
      <table border={1}>
        <thead>
          <tr>
            <th> First Name</th>
            <th> Last Name</th>
            <th> Email</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {usersList?.map((user: IUserReduxState): ReactElement => {
            return (
              <tr key={user?.id}>
                <td> {user?.firstName}</td>
                <td> {user?.lastName}</td>
                <td> {user?.email}</td>
                <td>
                  <button
                    disabled={!user?.id}
                    onClick={(): void =>
                      dispatch(fetchUserDetailsById(user?.id))
                    }
                  >
                    Details{" "}
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <p style={{ margin: "0" }}>First Name: {userDetails?.firstName}</p>
      <p style={{ margin: "0" }}>last Name: {userDetails?.lastName}</p>
      <p style={{ margin: "0" }}>Email: {userDetails?.email}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          style={{ display: "block", width: "100%" }}
          placeholder="First name"
          {...register("firstName", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          style={{ display: "block", width: "100%" }}
          placeholder="Last name"
          {...register("lastName", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          style={{ display: "block", width: "100%" }}
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UserForm;
