import styles from './Hero.module.css'
import heroImage from '../../assets/images/hero.png'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className={styles.overlay}>
        <p className={styles.eyebrow}>NEW SEASON</p>

        <h2 className={styles.title}>
          Timeless
          <br />
          by Design
        </h2>

        <p className={styles.description}>
          Luxury pieces curated for the modern wardrobe.
        </p>

        <Link to="/shop" className={styles.button}>
          SHOP COLLECTION
        </Link>
      </div>
    </section>
  );
}

export default Hero