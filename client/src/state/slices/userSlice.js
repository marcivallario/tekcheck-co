import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "user/getUser",
  async () => {
    const data = await fetch("/auth");
    const user = await data.json();
    return user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {},
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchUser.rejected]: (state, action) => {
      state.isLoading = false
      state.hasError = true
    }
  },
});

export default userSlice.reducer;
