import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { counterReducer, userReducer } from "../slices";
import { dogApi } from "../api";

const store: EnhancedStore = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    [dogApi.reducerPath]: dogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dogApi?.middleware),
});

export default store;
