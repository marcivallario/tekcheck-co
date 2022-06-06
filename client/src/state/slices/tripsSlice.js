import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTrips = createAsyncThunk(
  "trips/getTrips",
  async () => {
    const data = await fetch("/trips");
    if (!data.ok) {
      await data.json()
      return Promise.reject(data.statusText)
    } 
    return await data.json();
  }
);

const tripsSlice = createSlice({
  name: "trips",
  initialState: {
    tripsList: [],
    isLoading: false,
    hasError: false
  },
  reducers: {
    addTrip: (state, action) => {
      state.tripsList.push(action.payload)
    },
    removeTrip: (state, action) => {
      state.tripsList = state.tripsList.filter(trip => trip.id !== action.payload.id)
    },
    updateTrip: (state, action) => {
      let trip = state.tripsList.find(trip => trip.id === action.payload.id);
      trip = action.payload
    }
  },
  extraReducers: {
    [fetchTrips.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchTrips.fulfilled]: (state, action) => {
      state.tripsList = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchTrips.rejected]: (state, action) => {
      state.isLoading = false
      state.hasError = true
    }
  },
});

export const { addTrip, removeTrip, updateTrip } = tripsSlice.actions;

export default tripsSlice.reducer;
