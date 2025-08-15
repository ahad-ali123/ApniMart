import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>
            <span className={styles.logoPrimary}>Apni</span>Mart
          </h3>
          <p className={styles.footerText}>
            Your one-stop shop for all your needs. Quality products at
            affordable prices.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li>
              <a href="/" className={styles.footerLink}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" className={styles.footerLink}>
                About
              </a>
            </li>
            <li>
              <a href="/products" className={styles.footerLink}>
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className={styles.footerLink}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Services</h3>
          <ul className={styles.footerLinks}>
            <li>
              <a href="/delivery" className={styles.footerLink}>
                Fast Delivery
              </a>
            </li>
            <li>
              <a href="/returns" className={styles.footerLink}>
                Easy Returns
              </a>
            </li>
            <li>
              <a href="/support" className={styles.footerLink}>
                24/7 Support
              </a>
            </li>
            <li>
              <a href="/warranty" className={styles.footerLink}>
                Product Warranty
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Contact Us</h3>
          <p className={styles.footerText}>123 Shop Street</p>
          <p className={styles.footerText}>Swabi, city street 123</p>
          <p className={styles.footerText}>Email: info@apnimart.com</p>
          <p className={styles.footerText}>Phone: 03195345759</p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Apni Mart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
