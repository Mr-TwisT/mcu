import { createSlice } from '@reduxjs/toolkit';
import moviesData from '../../data';

const initialState = {
  cardItems: moviesData,
  someInfo: 'qwerty',
  isLoading: true,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
});

export default cardSlice.reducer;
