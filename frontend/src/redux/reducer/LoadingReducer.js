import { createSlice } from "@reduxjs/toolkit";
import { getAllUserApi, deleteUserApi } from "./UserReducer";
const initialState = {
  isLoading: false,
};

const LoadingReducer = createSlice({
  name: "LoadingReducer",
  initialState,
  extraReducers(buider) {
    buider.addCase(getAllUserApi.pending, (state) => {
      state.isLoading = true;
    });
    buider.addCase(getAllUserApi.fulfilled, (state) => {
      state.isLoading = false;
    });
    buider.addCase(getAllUserApi.rejected, (state) => {
      state.isLoading = false;
    });

    buider.addCase(deleteUserApi.pending, (state) => {
      state.isLoading = true;
    });
    buider.addCase(deleteUserApi.fulfilled, (state) => {
      state.isLoading = false;
    });
    buider.addCase(deleteUserApi.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {} = LoadingReducer.actions;

export default LoadingReducer.reducer;
