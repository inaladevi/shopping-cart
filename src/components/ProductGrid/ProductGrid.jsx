import styles from './ProductGrid.module.css'

function ProductGrid() {
  return (
    <section className={styles.products}>
      <h2 className={styles.heading}>NEW ARRIVALS</h2>

      <div className={styles.grid}>
        <article className={styles.card}>
          <div className={styles.image}></div>
          <h3>LE 5 À 7 HOBO BAG</h3>
          <p>$2,550</p>
        </article>

        <article className={styles.card}>
          <div className={styles.image}></div>
          <h3>SIGNATURE LOAFERS</h3>
          <p>$890</p>
        </article>

        <article className={styles.card}>
          <div className={styles.image}></div>
          <h3>WOOL BLAZER</h3>
          <p>$1,490</p>
        </article>

        <article className={styles.card}>
          <div className={styles.image}></div>
          <h3>SILK SCARF</h3>
          <p>$320</p>
        </article>
      </div>
    </section>
  )
}

export default ProductGrid