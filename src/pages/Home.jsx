import styled from 'styled-components'
import HeroSection from '../components/home/HeroSection';
import PromotionsSection from '../components/home/PromotionsSection';
import CategorySection from '../components/home/CategorySection';
import ProductsSection from '../components/home/ProductsSection';
import BigPromotionSection from '../components/home/BigPromotionSection';


const MainContent = styled.main`
  flex: 1;
`;

function Home() {

  return (
        <>
        <MainContent>
          <HeroSection />
          <PromotionsSection />
          <CategorySection />
          <ProductsSection />
          <BigPromotionSection />
        </MainContent>
      </>
  );
}

export default Home;
