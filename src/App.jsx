import Header from './components/common/Header';
import Footer from './components/common/Footer';
import GlobalStyle from './styles/GlobalStyles';
import HeroSection from './components/home/HeroSection';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMultipleProductsByCategory } from './RTK/thunk';

function App() {
  const dispatch = useDispatch();
  const productData = useSelector(state => state.product)
  console.log(productData)

  useEffect(() => {
    dispatch(fetchMultipleProductsByCategory())
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <HeroSection />
      <section></section>
      <Footer />
    </>
  );
}

export default App;
