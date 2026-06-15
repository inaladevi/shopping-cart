import styles from './CategorySection.module.css'
import bagImg from '../../assets/images/bag-category.png'
import shoeImg from '../../assets/images/shoe-category.png'
import clothingImg from '../../assets/images/clothing-category.png'
import scarfImg from '../../assets/images/scarf-category.png'

function CategorySection() {
  return (
    <section className={styles.categories}>
      <div className={styles.card}>
        <img src={bagImg} alt="Bags" />
        <div className={styles.content}>
          <h3>BAGS</h3>
          <p>Iconic shapes, modern attitude.</p>
          <span>SHOP NOW →</span>
        </div>
      </div>

      <div className={styles.card}>
        <img src={shoeImg} alt="Bags" />
        <div className={styles.content}>
          <h3>SHOES</h3>
          <p>Crafted for comfort and sophistication.</p>
          <span>SHOP NOW →</span>
        </div>
      </div>

      <div className={styles.card}>
        <img src={clothingImg} alt="Bags" />
        <div className={styles.content}>
          <h3>CLOTHING</h3>
          <p>Refined pieces for every occasion.</p>
          <span>SHOP NOW →</span>
        </div>
      </div>

      <div className={styles.card}>
        <img src={scarfImg} alt="Bags" />
        <div className={styles.content}>
          <h3>SCARVES</h3>
          <p>Silk, cashmere and timeless prints.</p>
          <span>SHOP NOW →</span>
        </div>
      </div>
    </section>
  )
}

export default CategorySection