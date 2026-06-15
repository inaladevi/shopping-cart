import styles from "./ProductCard.module.css";
import { useState } from "react";

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <article className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />

      <h3 className={styles.title}>{product.title}</h3>

      <p className={styles.price}>${product.price}</p>

      <div className={styles.quantityControls}>
        <button
          className={styles.quantityButton}
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
        >
          -
        </button>

        <input
          className={styles.quantityInput}
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <button
          className={styles.quantityButton}
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>

      <button
        className={styles.addButton}
        onClick={() => addToCart(product, quantity)}
      >
        Add TO BAG
      </button>
    </article>
  );
}

export default ProductCard;