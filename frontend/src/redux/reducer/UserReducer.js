import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../../utils/setting/http";
const initialState = {
  userInfo: [],
};

const UserReducer = createSlice({
  name: "UserReducer",
  initialState,
  reducers: {},
  extraReducers(buider) {
    buider.addCase(getAllUserApi.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
    buider.addCase(deleteUserApi, (state, action) => {
      state.userInfo = action.payload;
    });
  },
});

export const {} = UserReducer.actions;

export default UserReducer.reducer;

export const getAllUserApi = createAsyncThunk(
  "userReducer/getAllUserApi",
  async () => {
    const result = await http.get("/users/");
    return result.data.data;
  }
);

export const deleteUserApi = createAsyncThunk(
  "userReducer/DeleteUserApi",
  async (id) => {
    try {
      const result = await http.delete(`/users/${id}`);
      if (result.status === 200) {
        alert("Xóa thành công!");
        getAllUserApi();
      }
    } catch (error) {
      console.log(error);
    }
  }
);
