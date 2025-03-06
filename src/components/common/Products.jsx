import styled from 'styled-components';
import Product from './Product';
import PropTypes from "prop-types";


const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: start;
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

Products.propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string,
        images: PropTypes.arrayOf(PropTypes.string),
      })
    ).isRequired,
  };

export default Products;
