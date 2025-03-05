import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMultipleProductsByCategory = createAsyncThunk(
  'product/fetchMultipleProductsByCategory',
  async () => {
    const fetchAPI = async (url) => {
      const response = await fetch(url);
      return await response.json();
    };

    const categories = await fetchAPI(
      `https://api.escuelajs.co/api/v1/categories`
    );

    const selectedCategories = categories.slice(0, 6); 

    const productsData = {};

    await Promise.all(
      selectedCategories.map(async (category) => {
        const products = await fetchAPI(
          `https://api.escuelajs.co/api/v1/categories/${category.id}/products`
        );
        productsData[category.name] = products;
      })
    );

    return productsData; 
  }
);
