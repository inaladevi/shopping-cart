import Navbar from '../components/Navbar/Navbar'

function Cart({ cartItems, removeFromCart }) {
  return (
    <>
      <Navbar cartItems={cartItems} />

      <main>
        <h1>Cart</h1>

        <section>
          {cartItems.length === 0 ? (
            <p>Your Cart Is Empty</p>
          ) : (
            cartItems.map((item) => (
              <article key={item.id}>
                <h2>{item.title}</h2>

                <p>Price: ${item.price}</p>

                <p>Quantity: {item.quantity}</p>

                <button onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </article>
            ))
          )}
        </section>
      </main>
    </>
  );
}

export default Cart