import styled from "styled-components";

const HeaderSectionStyle = styled.section `
background-color: #211C24;
padding: 0 160px;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
`

const WhiteStrokeButton = styled.button `
padding: 16px 56px;
color: #fff;
font-size: 16px;
border: 1px solid #fff;
border-radius: 6px;
margin-top: 24px;
`

function HeroSection () {
return (
  <HeaderSectionStyle>
    <div>
      <h3 style={{fontSize: '25px', opacity : 0.4}}>Pro.Beyond.</h3>
      <h1 style={{fontSize:'96px', fontWeight:300}}>iPhone 14 <span style={{fontWeight:900}}>Pro</span></h1>
      <p style={{fontSize: '18px', color: '#909090'}}>Created to change everything for the better. For everyone</p>
      <WhiteStrokeButton>Shop Now</WhiteStrokeButton>
    </div>
    <div>
      <img src='./src/assets/Images/Iphone Image.png' />
    </div>
  </HeaderSectionStyle>
)
}

export default HeroSection;