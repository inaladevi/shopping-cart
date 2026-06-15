import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import styles from "./Cart.module.css";
import { Link } from 'react-router-dom'

const SHIPPING_THRESHOLD = 500;
const SHIPPING_COST = 25;

function Cart({ cartItems, removeFromCart }) {
  const [isOrdered, setIsOrdered] = useState(false);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const shipping = subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    setIsOrdered(true);
  };

  return (
    <>
      <Navbar cartItems={cartItems} />

      <main className={styles.cart}>
        {isOrdered ? (
          <div className={styles.successContainer}>
            <div className={styles.successIcon}>✓</div>
            <h1 className={styles.successHeading}>Merci.</h1>
            <p className={styles.successSub}>
              Your order has been placed successfully.
            </p>
            <p className={styles.successDetails}>
              A digital receipt and shipping updates have been sent to your
              inbox.
            </p>
            <Link to="/shop" className={styles.continueShopping}>
              Continue Shopping →
            </Link>
          </div>
        ) : (
          <>
            <h1 className={styles.heading}>Your Bag</h1>

            {cartItems.length === 0 ? (
              <div className={styles.emptyState}>
                <p className={styles.empty}>Your shopping bag is empty.</p>
                <Link to="/shop" className={styles.continueShopping}>
                  Continue Shopping →
                </Link>
              </div>
            ) : (
              <section className={styles.cartLayout}>
                <section className={styles.items}>
                  {cartItems.map((item) => (
                    <article key={item.id} className={styles.item}>
                      <div className={styles.imgWrap}>
                        <img
                          src={item.thumbnail || item.image}
                          alt={item.title}
                          className={styles.image}
                        />
                      </div>

                      <div className={styles.details}>
                        <div className={styles.titleRow}>
                          <h2 className={styles.itemTitle}>{item.title}</h2>
                          <span className={styles.itemTotal}>
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>

                        <p className={styles.itemMeta}>
                          ${item.price.toFixed(2)} × {item.quantity}
                        </p>

                        {item.brand && (
                          <p className={styles.itemBrand}>{item.brand}</p>
                        )}

                        <button
                          className={styles.removeBtn}
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </article>
                  ))}
                </section>

                <div className={styles.summary}>
                  <h2 className={styles.summaryHeading}>Order Summary</h2>

                  <div className={styles.summaryItems}>
                    {cartItems.map((item) => (
                      <div key={item.id} className={styles.summaryItem}>
                        <div className={styles.summaryThumbWrap}>
                          <img
                            src={item.thumbnail || item.image}
                            alt={item.title}
                            className={styles.summaryThumb}
                          />
                          <span className={styles.summaryQtyBadge}>
                            {item.quantity}
                          </span>
                        </div>
                        <div className={styles.summaryItemInfo}>
                          <p className={styles.summaryItemName}>{item.title}</p>
                          <p className={styles.summaryItemPrice}>
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={styles.divider} />

                  <div className={styles.row}>
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className={styles.row}>
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className={styles.free}>Free</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>

                  {shipping > 0 && (
                    <p className={styles.shippingNote}>
                      Add ${(SHIPPING_THRESHOLD - subtotal).toFixed(2)} more for
                      free shipping
                    </p>
                  )}

                  <div className={styles.divider} />

                  <div className={`${styles.row} ${styles.totalRow}`}>
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className={styles.checkoutButton}
                  >
                    Proceed to Checkout
                  </button>

                  <Link to="/shop" className={styles.continueLink}>
                    ← Continue Shopping
                  </Link>
                </div>
              </section>
            )}
          </>
        )}
      </main>
    </>
  );
}

export default Cart;
