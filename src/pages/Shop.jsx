import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProductCard from '../components/ProductCard/ProductCard'
import styles from './shop.module.css'

function Shop({ cartItems, setCartItems }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()

      setProducts(data)
    }

    fetchProducts()
  }, [])

  function addToCart(product, quantity) {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        ),
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity,
        },
      ]);
    }
  }

  return (
    <>
      <Navbar cartItems={cartItems} />

      <main className={styles.shop}>
        <h1 className={styles.heading}>SHOP</h1>

        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Shop