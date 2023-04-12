import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../../utils/setting/http";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  bookingInfo: [
    {
      _id: "642e2ad29c4ace557478fb4a",
      userEmail: "test5@gmail.com",
      tourName: "Tận hưởng không khí trong lành của núi rừng",
      fullName: "nightcore",
      guestSize: 32,
      phone: 908004780,
      bookAt: "2023-04-05T00:00:00.000Z",
      createdAt: "2023-04-06T02:13:38.370Z",
      updatedAt: "2023-04-06T02:13:38.370Z",
      __v: 0,
    },
  ],
};

const BookingReducer = createSlice({
  name: "BookingReducer",
  initialState,
  extraReducers(buider) {
    buider.addCase(getAllBookingTourApi.fulfilled, (state, action) => {
      state.bookingInfo = action.payload;
    });
  },
});

export const {} = BookingReducer.actions;

export default BookingReducer.reducer;

export const getAllBookingTourApi = createAsyncThunk(
  "BookingReducer/getAllBookingTourApi",
  async () => {
    try {
      const result = await http.get("/booking");
      return result.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
