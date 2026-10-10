import store from "../store";

export type StoreReduxState = ReturnType<typeof store.getState>;

export type Dispatch = typeof store.dispatch;
