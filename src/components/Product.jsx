import styled from "styled-components";
import { LikeIcon } from "./Icons";
import PropTypes from "prop-types";


const Card = styled.section`
  width: 268px;
  height: 432px;
  padding: 16px;
  background-color: #f6f6f6;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  img {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  .like-button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 12px 0 8px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }

  div.price {
    margin-top: 4px;
    font-size: 24px;
    font-weight: 900;
  }
`;

const BuyButton = styled.button`
  margin-top: auto;
  padding: 8px 16px;
  background-color: #000;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

const Product = ({ name, price, image }) => (
  <Card>
    <TopSection>
      <button className="like-button">
        <LikeIcon />
      </button>
    </TopSection>
    <img
      src={image}
      alt={name}
    />
    <InfoSection>
      <h2>{name}</h2>
      <div className="price">${price}</div>
      <BuyButton>Buy Now</BuyButton>
    </InfoSection>
  </Card>
);

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
  };

export default Product;
