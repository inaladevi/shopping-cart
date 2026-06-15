import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <h2 className={styles.brand}>ATELIER NOIR</h2>

          <p>
            A curated edit of luxury pieces designed to elevate your everyday.
          </p>
        </div>

        <div>
          <h3 className={styles.heading}>SHOP</h3>

          <ul className={styles.list}>
            <li>All Products</li>
            <li>Bags</li>
            <li>Shoes</li>
            <li>Clothing</li>
            <li>Scarves</li>
          </ul>
        </div>

        <div>
          <h3 className={styles.heading}>CUSTOMER CARE</h3>

          <ul className={styles.list}>
            <li>Contact Us</li>
            <li>Shipping & Delivery</li>
            <li>Returns & Exchanges</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h3 className={styles.heading}>ABOUT</h3>

          <ul className={styles.list}>
            <li>Our Story</li>
            <li>Sustainability</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h3 className={styles.heading}>JOIN THE ATELIER</h3>

          <p>Be the first to know about new arrivals and exclusive offers.</p>

          <div className={styles.newsletter}>
            <input
              className={styles.input}
              type="email"
              placeholder="Enter your email"
            />

            <span className={styles.arrow}>→</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Atelier Noir</p>

        <div className={styles.links}>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer