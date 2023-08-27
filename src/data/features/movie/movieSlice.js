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
    showMore: (state) => {
      state.isMoreInfoShowed = true;
    },
  },
});

export const { showMore } = movieSlice.actions;

export default movieSlice.reducer;
