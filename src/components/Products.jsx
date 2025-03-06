// src/components/Products.jsx
import styled from 'styled-components';
import Product from './Product';

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: start;
  padding: 32px 160px;
`;

const Products = ({ products }) => (
  <ProductsWrapper>
    {products.map((item) => (
      <Product
        key={item.id}
        name={item.name}
        price={item.price}
        image={item.image || item.images?.[0]}
      />
    ))}
  </ProductsWrapper>
);

export default Products;
