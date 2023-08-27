import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
};

const heroSlice = createSlice({
  name: 'hero',
  initialState,
});

export default heroSlice.reducer;
