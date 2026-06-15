import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'

function App() {
  const [cartItems, setCartItems] = useState([])
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
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />
      </Routes>
    </>
  );
}

export default App