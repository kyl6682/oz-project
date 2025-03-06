import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "./Logo";
import { CartIcon, LikeIcon, UserIcon, HamburgerIcon } from "./Icons";
import { SearchInput } from "./Inputs";
import { categories } from "../assets/Data/Categories";
import PropTypes from "prop-types";

// 상단 헤더 스타일
const HeaderDiv = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  padding: ${(props) => (props.$isMobile ? "16px" : "18px 160px")};
`;

const HeaderNav = styled.nav`
  width: ${(props) => props.width};
  display: flex;
  justify-content: space-between;
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  opacity: 0.3;
  &:active,
  &:hover {
    opacity: 1;
  }
`;

const HeaderIcons = styled.div`
  width: ${(props) => props.width};
  display: flex;
  justify-content: space-between;
`;

const HeaderIcon = styled.span`
  cursor: pointer;
  &:hover {
    opacity: 0.3;
  }
`;

const StyledSubNav = styled.nav`
  width: 100%;
  height: 48px;
  padding: 8px 160px;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  background-color: #2e2e2e;
  overflow: scroll;
`;

const CategoryLink = styled(Link)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const DesktopCategoryLink = styled(CategoryLink)`
  &:not(:last-child) {
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    padding-right: 2.5rem;
    color: #fff;
  }
`;

const MobileCategoryLink = styled(CategoryLink)`
  flex-direction: column;
  align-items: center;
  color: #000;
  padding: 16px;
`;

const HeaderTop = ({ isMobile }) => (
  <HeaderDiv $isMobile={isMobile}>
    <Logo />
    <SearchInput width="35%" />
    <HeaderNav width="35%">
      <HeaderLink to="#">Home</HeaderLink>
      <HeaderLink to="#">About</HeaderLink>
      <HeaderLink to="#">Contact Us</HeaderLink>
      <HeaderLink to="#">Blog</HeaderLink>
    </HeaderNav>
    <HeaderIcons width="15%">
      <HeaderIcon>
        <LikeIcon />
      </HeaderIcon>
      <HeaderIcon>
        <CartIcon />
      </HeaderIcon>
      <HeaderIcon>
        <UserIcon />
      </HeaderIcon>
    </HeaderIcons>
  </HeaderDiv>
);

const SubNav = () => (
  <StyledSubNav>
    {categories.map((el) => (
      <DesktopCategoryLink key={el.name} to={el.link}>
        {el.icon}
        {el.name}
      </DesktopCategoryLink>
    ))}
  </StyledSubNav>
);

const MobileHeader = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <HeaderDiv $isMobile={isMobile}>
        <Logo />
        <button onClick={() => setIsOpen(!isOpen)}>
          <HamburgerIcon />
        </button>
      </HeaderDiv>
      {isOpen && (
        <ul>
          {categories.map((el) => (
            <MobileCategoryLink key={el.name} to={el.link}>
              {el.name}
            </MobileCategoryLink>
          ))}
        </ul>
      )}
    </>
  );
};

function Header() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <MobileHeader isMobile={isMobile} />
  ) : (
    <>
      <HeaderTop isMobile={isMobile} />
      <SubNav />
    </>
  );
}

export default Header;

HeaderTop.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

MobileHeader.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
