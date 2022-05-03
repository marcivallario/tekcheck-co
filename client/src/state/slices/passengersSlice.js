import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPassengers = createAsyncThunk(
  "passengers/getPassengers",
  async () => {
    const data = await fetch("/passengers");
    if (!data.ok) {
      await data.json()
      return Promise.reject(data.statusText)
    } 
    return await data.json();
  }
);

const passengersSlice = createSlice({
  name: "passengers",
  initialState: {
    passengersList: [],
    isLoading: false,
    hasError: false
  },
  reducers: {
    addPassenger: (state, action) => {
      state.passengersList.push(action.payload)
    },
    removePassenger: (state, action) => {
      state.passengersList.filter(pass => pass.id != action.payload.id)
    },
    updatePassenger: (state, action) => {
      const passenger = state.passengersList.find(pass => pass.id === action.payload.id);
      passenger = action.payload
    }
  },
  extraReducers: {
    [fetchPassengers.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchPassengers.fulfilled]: (state, action) => {
      state.passengersList = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchPassengers.rejected]: (state, action) => {
      state.isLoading = false
      state.hasError = true
    }
  },
});

export const { addPassenger, removePassenger, updatePassenger } = passengersSlice.actions;

export default passengersSlice.reducer;
