import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  someItems: [],
  someInfo: 'qwerty',
  isLoading: true,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
});

export default cardSlice.reducer;
