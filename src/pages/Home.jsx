import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import CategorySection from '../components/CategorySection/CategorySection'
import ProductGrid from '../components/ProductGrid/ProductGrid'
import Footer from '../components/Footer/Footer'

function Home({ cartItems }) {
  return (
    <>
      <Navbar cartItems={cartItems} />
      <Hero />
      <CategorySection />
      <ProductGrid />
      <Footer />
    </>
  )
}

export default Home