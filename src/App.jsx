import Header from './components/common/Header';
import Footer from './components/common/Footer';
import GlobalStyle from './styles/GlobalStyles';
import styled from 'styled-components';
import Home from './pages/Home';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {


  return (
    <>
      <PageWrapper>
        <GlobalStyle />
        <Header />
        <Home />
        <Footer />
      </PageWrapper>
    </>
  );
}

export default App;
