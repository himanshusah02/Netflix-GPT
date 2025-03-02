import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    moviesResult: null,
    MoviesName: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addAiMovieResult: (state, action) => {
      const { MoviesName, moviesResult } = action.payload;
      state.MoviesName = MoviesName;
      state.moviesResult = moviesResult;
    },
  },
});

export const { toggleGptSearchView,addAiMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
