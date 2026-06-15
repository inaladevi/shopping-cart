import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'


function Navbar({ cartItems = [] }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.topBar}>
        <div className={styles.leftControls}>
          <span>USD $</span>
          <span>EN</span>
        </div>

        <h1 className={styles.logo}>
          <Link to="/">ATELIER NOIR</Link>
        </h1>

        <div className={styles.actions}>
          <button>Search</button>
          <button>Account</button>
          <button>
            <Link to="/cart">
              Cart (
              {cartItems.reduce(
                (total, item) => total + item.quantity, 
                0,
              )}
              )
            </Link>
          </button>
        </div>
      </div>

      <ul className={styles.navLinks}>
        <li>HOME</li>
        <li>
          <Link to="/shop">SHOP</Link>
        </li>
        <li>COLLECTION</li>
        <li>BAGS</li>
        <li>SHOES</li>
        <li>SCARVES</li>
        <li>ABOUT</li>
      </ul>
    </nav>
  );
}

export default Navbar