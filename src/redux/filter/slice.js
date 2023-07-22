import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    searchTerm: '',
  },
  reducers: {
    updateSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { updateSearchTerm } = filterSlice.actions;

export default filterSlice.reducer;
