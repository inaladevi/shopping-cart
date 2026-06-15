import { useState } from 'react'
import styles from './ProductCard.module.css'

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded]       = useState(false)

  const img   = product.thumbnail || product.image
  const title = product.title
  const price = product.price

  function handleAdd() {
    addToCart(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <article className={styles.card}>
      <div className={styles.imgWrap}>
        <img src={img} alt={title} className={styles.image} />
        <div className={styles.overlay}>
          <button className={styles.quickAdd} onClick={handleAdd}>
            {added ? 'Added ✓' : 'Quick Add'}
          </button>
        </div>
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>${price}</p>
      </div>

      <div className={styles.quantityControls}>
        <button className={styles.qBtn} onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
        <input
          className={styles.qInput}
          type="number"
          value={quantity}
          min={1}
          onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
        />
        <button className={styles.qBtn} onClick={() => setQuantity(q => q + 1)}>+</button>
      </div>

      <button className={`${styles.addButton} ${added ? styles.added : ''}`} onClick={handleAdd}>
        {added ? 'Added to Bag ✓' : 'Add to Bag'}
      </button>
    </article>
  )
}

export default ProductCard