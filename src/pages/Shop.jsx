import { useEffect, useState, useRef } from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProductCard from '../components/ProductCard/ProductCard'
import useReveal from '../hooks/useReveal'
import styles from './Shop.module.css'

const CATEGORIES = ['womens-bags', 'womens-shoes', 'womens-watches', 'sunglasses']

function Shop({ cartItems, setCartItems }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading]   = useState(true)
  const ref = useRef(null)
  useReveal(ref)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const results = await Promise.all(
          CATEGORIES.map(cat =>
            fetch(`https://dummyjson.com/products/category/${cat}`).then(r => r.json())
          )
        )
        const all = results.flatMap(r => r.products)
        setProducts(all)
      } catch (err) {
        console.error('Failed to fetch products', err)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  function addToCart(product, quantity) {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) {
        return prev.map(i =>
          i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
        )
      }
      return [...prev, { ...product, quantity }]
    })
  }

  return (
    <>
      <Navbar cartItems={cartItems} />

      <main className={styles.shop}>
        <div className={styles.shopHeader}>
          <h1 className={styles.heading}>The Edit</h1>
        </div>

        {loading ? (
          <div className={styles.loading}>
            <span>Loading</span>
          </div>
        ) : (
          <div className={styles.grid} ref={ref}>
            {products.map((product, i) => (
              <div
                key={product.id}
                className="reveal"
                style={{ transitionDelay: `${(i % 8) * 0.07}s` }}
              >
                <ProductCard product={product} addToCart={addToCart} />
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  )
}

export default Shop