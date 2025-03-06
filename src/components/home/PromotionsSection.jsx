import styled from 'styled-components';
import PlayStation from '../../assets/Images/PlayStation.png';
import Headphone from '../../assets/Images/Headphone.png';
import VisionPro from '../../assets/Images/VisionPro.png';
import MacBookPro14 from '../../assets/Images/MacBookPro14.png';

const BlackStrokeButton = styled.button`
    border: 1px solid black;
    padding : 12px 40px;
    border-radius: 7px;
    margin: 16px 0;
`


const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
`;

const Item = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
`;

const ItemDiv = styled.div`
  padding: ${({ padding }) => padding || '20px'};

  h3 {
    font-size: ${({ titleSize }) => titleSize || '48px'};
    font-weight: 200;
  }

  p {
    font-size: ${({ contentSize }) => contentSize || '14px'};
  }
`;

const Item1_2 = styled(Item)`
  grid-column: 1 / 3;
  grid-row: 1;
  height: 328px;
  background-color: #fff;
`;

const Item5 = styled(Item)`
  grid-column: 1 / 2;
  grid-row: 2;
  height: 272px;
  background-color: #ededed;
`;

const Item6 = styled(Item)`
  grid-column: 2 / 3;
  grid-row: 2;
  height: 272px;
  background-color: #353535;
`;

const Item3_4_7_8 = styled(Item)`
  grid-column: 3 / 5;
  grid-row: 1 / 3;
  background-color: #ededed;
`;

function PromotionsSection() {
  return (
    <GridWrapper>
      <Item1_2>
        <img src={PlayStation} />
        <ItemDiv
          padding="40px 20px 40px 20px"
          titleSize="36px"
          contentSize="16px"
        >
          <h3 style={{ fontWeight: 600 }}>Playstation 5</h3>
          <p>
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </ItemDiv>
      </Item1_2>
      <Item5>
        <img src={Headphone} />
        <ItemDiv
          padding="40px 20px 40px 20px"
          titleSize="29px"
          contentSize="14px"
        >
          <h3>
            Apple
            <br />
            Airpods
            <br />
            <span style={{ fontWeight: 900 }}>Max</span>
          </h3>
          <p>Computational audio. Listen, it&apos;s powerful</p>
        </ItemDiv>
      </Item5>
      <Item6>
        <img src={VisionPro} />
        <ItemDiv
          padding="40px 20px 40px 20px"
          titleSize="29px"
          contentSize="14px"
        >
          <h3 style={{ color: 'white' }}>
            Apple
            <br />
            Vision<span style={{ fontWeight: 600 }}>Pro</span>
          </h3>
          <p style={{ color: 'white' }}>
            Computational audio. Listen, it&apos;s powerful
          </p>
        </ItemDiv>
      </Item6>
      <Item3_4_7_8>
        <ItemDiv
          padding="40px 20px 40px 20px"
          titleSize="64px"
          contentSize="14px"
        >
          <h3>
            Apple
            <br />
            Vision<span style={{ fontWeight: 600 }}>Pro</span>
          </h3>
          <p>
          The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
          </p>
          <BlackStrokeButton>Shop Now</BlackStrokeButton>
        </ItemDiv>
        <img src={MacBookPro14} />

      </Item3_4_7_8>
    </GridWrapper>
  );
}

export default PromotionsSection;