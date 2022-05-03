import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import passengersReducer from "./slices/passengersSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    passengers: passengersReducer
  },
});

export default store;