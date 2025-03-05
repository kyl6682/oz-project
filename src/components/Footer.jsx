import styled from "styled-components";
import { Logo } from "./Logo";

const FooterDiv = styled.div`
    width: 100%;
    background-color: #111;
    padding: 104px 160px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-self: end;
`;

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;

    p {
        font-weight: 600; 
        margin-bottom: 12px; 
        color: #ffffff;
    }

    ul {
        padding: 0; 
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 8px; 
    }

    a {
        color: #cfcfcf;
        font-weight: 300;
        font-size: 14px;
        text-decoration: none;

        &:hover {
            color: #ffffff; 
        }
    }
`;

const Info = styled(StyledSection)`
    width: 30%;
    gap: 24px;
    p {
        color: #cfcfcf;
        line-height: 170%;
        font-weight: 300;
        font-size: 14px;
    }
`;

const Nav = styled.section`
    display: flex;
    justify-content: space-around;
    width: 60%;
`;

const DesktopFooter = () => {
    return (
        <FooterDiv>
            <Info>
                <Logo color="white" />
                <p>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
            </Info>
            <Nav>
                <StyledSection>
                    <p>Services</p>
                    <ul>
                        <li><a href="#">Bonus program</a></li>
                        <li><a href="#">Gift cards</a></li>
                        <li><a href="#">Credit and payment</a></li>
                        <li><a href="#">Service contracts</a></li>
                        <li><a href="#">Non-cash account</a></li>
                        <li><a href="#">Payment</a></li>
                    </ul>
                </StyledSection>
                <StyledSection>
                    <p>Assistance to the buyer</p>
                    <ul>
                        <li><a href="#">Find an order</a></li>
                        <li><a href="#">Terms of delivery</a></li>
                        <li><a href="#">Exchange and return of goods</a></li>
                        <li><a href="#">Guarantee</a></li>
                        <li><a href="#">Frequently asked questions</a></li>
                        <li><a href="#">Terms of use of the site</a></li>
                    </ul>
                </StyledSection>
            </Nav>
        </FooterDiv>
    );
};

const MobileFooter = () => {

}

function Footer() {
    return (
        <>
            <DesktopFooter />
        </>
    );
}

export default Footer;
