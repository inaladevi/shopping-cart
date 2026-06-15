import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar({ cartItems = [] }) {
  const cartCount = cartItems.reduce((t, i) => t + i.quantity, 0)
  const checkActive = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.topBar}>
        <div className={styles.leftControls}>
          <span>USD $</span>
          <span>EN</span>
        </div>

        <Link to="/" className={styles.logo}>
          ATELIER NOIR
        </Link>

        <div className={styles.actions}>
          <button className={styles.link} aria-label="Search">
            <svg
              xmlns="http://w3.org"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button className={styles.link} aria-label="Account">
            <svg
              xmlns="http://w3.org"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
          <Link
            to="/cart"
            className={`${styles.link} ${styles.cartIconWrapper}`}
            aria-label="Cart"
          >
            <svg
              xmlns="http://w3.org"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>

            {/* Only show badge if there are items in the basket */}
            {cartCount > 0 && (
              <span className={styles.cartBadge}>{cartCount}</span>
            )}
          </Link>
        </div>
      </div>

      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/" className={checkActive}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className={checkActive}>
            Shop
          </NavLink>
        </li>
        <li>
          <span className={styles.link}>Collection</span>
        </li>
        <li>
          <span className={styles.link}>Bags</span>
        </li>
        <li>
          <span className={styles.link}>Shoes</span>
        </li>
        <li>
          <span className={styles.link}>Scarves</span>
        </li>
        <li>
          <span className={styles.link}>About</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar