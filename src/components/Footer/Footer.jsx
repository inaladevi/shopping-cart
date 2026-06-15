import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <h2 className={styles.brand}>ATELIER NOIR</h2>
          <p className={styles.brandDesc}>
            A curated edit of luxury pieces designed to elevate your everyday.
          </p>
          <div className={styles.socials}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://w3.org"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
            >
              <svg
                xmlns="http://w3.org"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <path d="M12 2a10 10 0 0 0-3.3 19.4c-.1-.6 0-1.5.1-2.1l1.2-5c-.2-.4-.3-.9-.3-1.4 0-1.3.8-2.3 1.7-2.3.8 0 1.2.6 1.2 1.3 0 .8-.5 2-.8 3.2-.2.9.4 1.7 1.3 1.7 1.6 0 2.9-1.7 2.9-4.2 0-2.2-1.6-3.7-3.8-3.7-2.6 0-4.1 2-4.1 4 0 .8.3 1.6.7 2.1a.3.3 0 0 1 .1.3l-.3 1.1c0 .2-.2.2-.4.1-1.3-.6-2.1-2.5-2.1-4.1 0-3.3 2.4-6.4 7-6.4 3.7 0 6.5 2.6 6.5 6.1 0 3.7-2.3 6.6-5.5 6.6-1.1 0-2.1-.6-2.4-1.3l-.7 2.6c-.3 1-1 2.2-1.5 3A10 10 0 1 0 12 2z"></path>
              </svg>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://w3.org"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://w3.org"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4h3a4 4 0 0 0 4 4"></path>
              </svg>
            </a>
          </div>
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

export default Footer;
