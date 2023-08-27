import { createSlice } from '@reduxjs/toolkit';
import moviesData from '../../data';

const initialState = {
  movieCardItems: moviesData,
  isLoading: true,
  isMoreInfoShowed: false,
};

const movieSlice = createSlice({
  name: 'movieCard',
  initialState,
  reducers: {
    showMore: (state, { payload }) => {
      state.isMoreInfoShowed = true;
      const movieCardItem = state.movieCardItems.find((item) => {
        item.id === payload;
      });
    },
  },
});

export const { showMore } = movieSlice.actions;

export default movieSlice.reducer;
