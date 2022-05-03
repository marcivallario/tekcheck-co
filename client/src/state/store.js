import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import passengersReducer from "./slices/passengersSlice";
import projectsReducer from "./slices/projectsSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    passengers: passengersReducer,
    projects: projectsReducer
  },
});

export default store;