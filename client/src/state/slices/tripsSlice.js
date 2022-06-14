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
      state.tripsList = state.tripsList.map(trip => {
        if (trip.id !== action.payload.id) {
          return trip
        } 
        else if (trip.id === action.payload.id) {
          return action.payload
        }
      })
    },
    addFlight: (state, action) => {
      state.tripsList = state.tripsList.map(trip => {
        if (trip.id === action.payload.trip_id) {
          trip.flights.push(action.payload)
          return trip
        } else {
          return trip
        }
      })
    },
    updateFlight: (state, action) => {
      state.tripsList = state.tripsList.map(trip => {
        if (trip.id === action.payload.trip_id) {
          trip.flights = trip.flights.map(flight => {
            if (flight.id === action.payload.id) {
              return action.payload
            } else {
              return flight
            }
          })
          return trip
        } else {
          return trip
        }
      })
    },
    removeFlight: (state, action) => {
      state.tripsList = state.tripsList.map(trip => {
        if (trip.id === action.payload.trip_id) {
          trip.flights = trip.flights.filter(flight => flight.id !== action.payload.id)
          return trip
        } else {
          return trip
        }
      })
    },
    addTranspo: (state, action) => {
      state.tripsList = state.tripsList.map(trip => {
        if (trip.id === action.payload.trip_id) {
          trip.transportations.push(action.payload)
          return trip
        } else {
          return trip
        }
      })
    },
    updateTranspo: (state, action) => {
      state.tripsList = state.tripsList.map(trip => {
        if (trip.id === action.payload.trip_id) {
          trip.transportations = trip.transportations.map(transpo => {
            if (transpo.id === action.payload.id) {
              return action.payload
            } else {
              return transpo
            }
          })
          return trip
        } else {
          return trip
        }
      })
    },
    removeTranspo: (state, action) => {
      state.tripsList = state.tripsList.map(trip => {
        if (trip.id === action.payload.trip_id) {
          trip.transportations = trip.transportations.filter(transpo => transpo.id !== action.payload.id)
          return trip
        } else {
          return trip
        }
      })
    },
    addAcc: (state, action) => {
      state.tripsList = state.tripsList.map(trip => {
        if (trip.id === action.payload.trip_id) {
          trip.accommodations.push(action.payload)
          return trip
        } else {
          return trip
        }
      })
    },
    updateAcc: (state, action) => {
      state.tripsList = state.tripsList.map(trip => {
        if (trip.id === action.payload.trip_id) {
          trip.accommodations = trip.accommodations.map(acc => {
            if (acc.id === action.payload.id) {
              return action.payload
            } else {
              return acc
            }
          })
          return trip
        } else {
          return trip
        }
      })
    },
    removeAcc: (state, action) => {
      state.tripsList = state.tripsList.map(trip => {
        if (trip.id === action.payload.trip_id) {
          trip.accommodations = trip.accommodations.filter(acc => acc.id !== action.payload.id)
          return trip
        } else {
          return trip
        }
      })
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

export const { 
  addTrip, 
  removeTrip, 
  updateTrip, 
  addFlight, 
  updateFlight, 
  removeFlight, 
  addTranspo,
  updateTranspo, 
  removeTranspo, 
  addAcc,
  updateAcc, 
  removeAcc } = tripsSlice.actions;

export default tripsSlice.reducer;
