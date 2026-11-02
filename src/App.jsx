import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'

function App() {
    const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('atelier_noir_cart')
      const parsed = savedCart ? JSON.parse(savedCart) : []
      return Array.isArray(parsed) ? parsed : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('atelier_noir_cart', JSON.stringify(cartItems))
    } catch {
      // storage unavailable (e.g. private mode): the cart still works for this session
    }
  }, [cartItems])
  
  function removeFromCart(productId) {
    setCartItems(cartItems.filter(
      (item) => item.id !== productId));
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home cartItems={cartItems} />} />

        <Route
          path="/shop"
          element={<Shop cartItems={cartItems} setCartItems={setCartItems} />}
        />

        <Route
          path="/cart"
          element={
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} setCartItems={setCartItems} />
          }
        />
      </Routes>
    </>
  );
}

export default App