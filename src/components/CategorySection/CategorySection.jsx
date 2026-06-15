import styles from './CategorySection.module.css'

function CategorySection() {
  return (
    <section className={styles.categories}>
      <div className={styles.card}>
        <h3>BAGS</h3>
        <p>Iconic shapes, modern attitude.</p>
      </div>

      <div className={styles.card}>
        <h3>SHOES</h3>
        <p>Crafted for comfort and sophistication.</p>
      </div>

      <div className={styles.card}>
        <h3>CLOTHING</h3>
        <p>Refined pieces for every occasion.</p>
      </div>

      <div className={styles.card}>
        <h3>SCARVES</h3>
        <p>Silk, cashmere and timeless prints.</p>
      </div>
    </section>
  )
}

export default CategorySection