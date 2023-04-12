import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducer/UserReducer";
import LoadingReducer from "./reducer/LoadingReducer";
import BookingReducer from "./reducer/BookingReducer";

const store = configureStore({
  reducer: {
    userReducer: UserReducer,
    LoadingReducer: LoadingReducer,
    BookingReducer: BookingReducer,
  },
});

export default store;
