import styled from 'styled-components';
import Banner2 from '../../assets/Images/Banner2.png'

const PromotionDiv = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${Banner2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 48px;
  margin-bottom: 16px;
  font-weight: 300;

  span {
    font-weight: 700;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #ddd;
  margin-bottom: 32px;
`;

const Button = styled.button`
  padding: 12px 32px;
  font-size: 16px;
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #000;
  }
`;

function BigPromotionSection() {
  return (
    <PromotionDiv>
      <Title>
        Big Summer <span>Sale</span>
      </Title>
      <Description>
        Commodo fames vitae leo mauris in. Eu consequat.
      </Description>
      <Button>Shop Now</Button>
    </PromotionDiv>
  );
}

export default BigPromotionSection;
