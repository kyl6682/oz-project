import { createSlice } from '@reduxjs/toolkit';
import { fetchMultipleProductsByCategory } from './thunk';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: {},
    favorites: [],
    loading: true,
  },
  reducers: {
    addToFavorite: (state, action) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (productId) => productId !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMultipleProductsByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMultipleProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMultipleProductsByCategory.rejected, (state) => {
        state.loading = false;
      });
  },
});
