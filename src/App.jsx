import Header from './components/common/Header';
import Footer from './components/common/Footer';
import GlobalStyle from './styles/GlobalStyles';
import HeroSection from './components/home/HeroSection';
import { useEffect } from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  useEffect(() => {
    const fetchAPI = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };
    fetchAPI('https://api.escuelajs.co/api/v1/products');
    fetchAPI('https://api.escuelajs.co/api/v1/categories');
  }, []);

  return (
    <>
      <PageWrapper>
        <GlobalStyle />
        <Header />
        <MainContent>
          <HeroSection />
          <section></section>
        </MainContent>
        <Footer />
      </PageWrapper>
    </>
  );
}

export default App;
