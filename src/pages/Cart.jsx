import Navbar from '../components/Navbar/Navbar'
import styles from './Cart.module.css'

function Cart({ cartItems, removeFromCart }) {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <>
      <Navbar cartItems={cartItems} />

      <main className={styles.cart}>
        <h1 className={styles.heading}>YOUR BAG</h1>

        {cartItems.length === 0 ? (
          <p className={styles.empty}>Your shopping bag is empty.</p>
        ) : (
          <section className={styles.cartLayout}>
            <section className={styles.items}>
              {cartItems.map((item) => (
                <article key={item.id} className={styles.item}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.image}
                  />

                  <div className={styles.details}>
                    <h2>{item.title}</h2>

                    <p>Quantity: {item.quantity}</p>

                    <p>${item.price}</p>

                    <button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </section>

            <div className={styles.summary}>
              <h2>ORDER SUMMARY</h2>

              <div className={styles.row}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className={styles.row}>
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <button className={styles.checkoutButton}>
                PROCEED TO CHECKOUT
              </button>
            </div>

            </section>

        )}
      </main>
    </>
  );
}

export default Cart