import { createSlice } from '@reduxjs/toolkit';
import moviesData from '../../data';

const initialState = {
  movieCardItems: moviesData,
  isLoading: true,
  isModalOpen: false,
  movieInModal: {},
};

const movieSlice = createSlice({
  name: 'movieCard',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      const movieCardItem = state.movieCardItems.find(
        (item) => item.id === payload
      );
      state.movieInModal = movieCardItem;
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.movieInModal = {};
    },
  },
});

export const { openModal, closeModal } = movieSlice.actions;

export default movieSlice.reducer;
