// About.jsx
// About.jsx
import { useEffect } from "react";
import styles from "./About.module.css";

const About = () => {
  useEffect(() => {
    document.title = "About Us | Apni Mart";
  }, []);

  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <h1>About Apni Mart</h1>
        <p>Your trusted online shopping destination</p>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <h2>Our Story</h2>
            <p>
              Apni Mart was founded in 2023 with a simple mission: to provide
              high-quality products at affordable prices with exceptional
              customer service. What started as a small local business has grown
              into a trusted online shopping destination for thousands of
              customers nationwide.
            </p>
            <p>
              We carefully curate our product selection to ensure we offer only
              the best items that meet our strict quality standards. Our team
              works tirelessly to bring you the latest trends and timeless
              classics across various categories.
            </p>

            <h2>Our Values</h2>
            <div className={styles.values}>
              <div className={styles.valueCard}>
                <h3>Quality</h3>
                <p>
                  We source products from reputable suppliers and conduct
                  rigorous quality checks to ensure you receive only the best.
                </p>
              </div>
              <div className={styles.valueCard}>
                <h3>Customer Satisfaction</h3>
                <p>
                  Your happiness is our priority. Our customer service team is
                  available 24/7 to address any concerns or questions.
                </p>
              </div>
              <div className={styles.valueCard}>
                <h3>Affordability</h3>
                <p>
                  We believe quality shouldn't come at a premium. We work
                  directly with manufacturers to keep prices low.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
