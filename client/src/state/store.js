import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import passengersReducer from "./slices/passengersSlice";
import projectsReducer from "./slices/projectsSlice";
import tripsReducer from "./slices/tripsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    passengers: passengersReducer,
    projects: projectsReducer,
    trips: tripsReducer
  },
});

export default store;