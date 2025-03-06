import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllProducts = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    const products = await response.json();

    // 상품 데이터 정리
    const processedProducts = products.map((product) => ({
      id: product.id,
      name: product.title,
      image: product.images[0],
      price: product.price,
      description: product.description,
      category: product.category.name, 
    }));

    return processedProducts; 
  }
);