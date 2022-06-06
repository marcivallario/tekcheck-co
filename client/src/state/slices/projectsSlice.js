import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk(
  "projects/getProjects",
  async () => {
    const data = await fetch("/projects");
    if (!data.ok) {
      await data.json()
      return Promise.reject(data.statusText)
    } 
    return await data.json();
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projectsList: [],
    isLoading: false,
    hasError: false
  },
  reducers: {
    addProject: (state, action) => {
      state.projectsList.push(action.payload)
    },
    removeProject: (state, action) => {
      state.projectsList = state.projectsList.filter(proj => proj.id !== action.payload.id)
    },
    updateProject: (state, action) => {
      state.projectsList = state.projectsList.map(proj => {
        if (proj.id !== action.payload.id) {
          return proj
        } 
        else if (proj.id === action.payload.id) {
          return action.payload
        }
      })
    }
  },
  extraReducers: {
    [fetchProjects.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchProjects.fulfilled]: (state, action) => {
      state.projectsList = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchProjects.rejected]: (state, action) => {
      state.isLoading = false
      state.hasError = true
    }
  },
});

export const { addProject, removeProject, updateProject } = projectsSlice.actions;

export default projectsSlice.reducer;