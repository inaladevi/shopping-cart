import styles from "./ProductCard.module.css";
import { useState } from "react";

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <article className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />

      <h3>{product.title}</h3>

      <p>${product.price}</p>
      <div>
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
          -
        </button>

        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>

      <button onClick={() => addToCart(product, quantity)}>
        Add To Cart</button>
    </article>
  );
}

export default ProductCard;