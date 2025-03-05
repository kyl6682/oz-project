import Header from './components/common/Header'
import Footer from './components/common/Footer'
import GlobalStyle from './styles/GlobalStyles'
import HeroSection from './components/home/HeroSection'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const fetchAPI = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
    }
    fetchAPI("https://api.escuelajs.co/api/v1/products")
    fetchAPI("https://api.escuelajs.co/api/v1/categories")
  }, [])

  return (
    <>
      <GlobalStyle />
      <Header />
      <HeroSection /> 
      <section>

      </section>
      <Footer />
    </>
  )
}

export default App
