import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../../utils/setting/http";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  userInfo: [],
};

const UserReducer = createSlice({
  name: "UserReducer",
  initialState,
  extraReducers(buider) {
    buider.addCase(getAllUserApi.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
    buider.addCase(deleteUserApi, (state, action) => {
      state.userInfo = action.payload;
    });
  },
});

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
  async (id, { dispatch }) => {
    try {
      const result = await http.delete(`/users/${id}`);
      if (result.status === 200) {
        toast.success("Xóa người dùng thành công", { autoClose: 2000 });
        dispatch(getAllUserApi());
      }
    } catch (error) {
      console.log(error);
    }
  }
);
