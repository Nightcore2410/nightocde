import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducer/UserReducer";
import LoadingReducer from "./reducer/LoadingReducer";

const store = configureStore({
  reducer: {
    userReducer: UserReducer,
    LoadingReducer: LoadingReducer
  },
});

export default store;
