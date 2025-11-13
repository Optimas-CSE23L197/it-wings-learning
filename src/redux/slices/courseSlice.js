import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  loading: false,
  error: null,
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    setCourseLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCourseError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setCourses, setCourseLoading, setCourseError } =
  courseSlice.actions;

export default courseSlice.reducer;
