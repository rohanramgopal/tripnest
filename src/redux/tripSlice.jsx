import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const tripSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    addTrip(state, action) {
      state.push(action.payload);
    },

    deleteTrip(state, action) {
      return state.filter((trip) => trip.id !== action.payload);
    },

    updateTrip(state, action) {
      const index = state.findIndex(
        (trip) => trip.id === action.payload.id
      );

      if (index !== -1) {
        state[index] = action.payload;
      }
    }
  }
});

export const { addTrip, deleteTrip, updateTrip } = tripSlice.actions;

export default tripSlice.reducer;