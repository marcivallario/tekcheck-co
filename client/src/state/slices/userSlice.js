import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "user/getUser",
  async () => {
    const data = await fetch("/auth");
    if (!data.ok) {
      await data.json()
      return Promise.reject(data.statusText)
    } 
    return await data.json();
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {},
    isLoading: false,
    hasError: false
  },
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload
      state.hasError = false
      state.isLoading = false
    }
  },
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

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
