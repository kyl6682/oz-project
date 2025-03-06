import { createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts } from './thunk';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [], // 배열로 변경!
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
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // 배열로 저장
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});
