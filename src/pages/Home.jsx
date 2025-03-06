import styled from 'styled-components'
import HeroSection from '../components/home/HeroSection';
import { ProductsSection } from '../components/home/ProductsSection';


const MainContent = styled.main`
  flex: 1;
`;

function Home() {

  return (
        <>
        <MainContent>
          <HeroSection />
          <ProductsSection />
        </MainContent>
      </>
  );
}

export default Home;
