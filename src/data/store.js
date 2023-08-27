import { configureStore } from '@reduxjs/toolkit';
import movieCardReducer from './features/movie/movieSlice';

export const store = configureStore({
  reducer: {
    movieCard: movieCardReducer,
  },
});
