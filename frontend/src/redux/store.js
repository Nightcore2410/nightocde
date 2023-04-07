import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducer/UserReducer";

const store = configureStore({
  reducer: {
    userReducer: UserReducer,
  },
});

export default store;
