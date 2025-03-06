import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../../RTK/thunk';
import styled from 'styled-components';
import Products from '../Products';

const categories = ['All', 'Clothes', 'Electronics', 'Furniture', 'Shoes'];

const ProductsWrapper = styled.div`
  padding: 32px 160px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: start;
  margin: 40px 0;
  button {
    color: #8b8b8b;
    font-size: 18px;
    &.active {
      color: black;
      border-bottom: black 1px solid;
    }
  }
`;

export const ProductsSection = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.product);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const filteredProducts =
    selectedCategory === 'All'
      ? data
      : data.filter((item) => item.category === selectedCategory);

  const displayedProducts = filteredProducts.slice(0, 8);

  return (
    <>
      <ProductsWrapper>
        <FilterButtons>
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </FilterButtons>

        {loading ? (
          <p>로딩 중...</p>
        ) : !filteredProducts.length ? (
          <p>상품이 없습니다.</p>
        ) : (
          <Products products={displayedProducts} />
        )}
      </ProductsWrapper>
    </>
  );
};
