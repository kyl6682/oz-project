import styled from 'styled-components'
import HeroSection from '../components/home/HeroSection';
import { ProductsSection } from '../components/home/ProductsSection';
import Promotions from '../components/home/Promotions';


const MainContent = styled.main`
  flex: 1;
`;

function Home() {

  return (
        <>
        <MainContent>
          <HeroSection />
          <Promotions />
          <ProductsSection />
        </MainContent>
      </>
  );
}

export default Home;
