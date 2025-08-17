// Contact.jsx
// Contact.jsx
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | Apni Mart";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className={styles.contact}>
      <section className={styles.hero}>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>Get in Touch</h2>
              <p>
                Have questions about our products or services? Fill out the form
                and our team will get back to you within 24 hours.
              </p>

              <div className={styles.infoItem}>
                <h3>Address</h3>
                <p>123 Shop Street, Swabi City, CC 12345</p>
              </div>

              <div className={styles.infoItem}>
                <h3>Email</h3>
                <p>info@apnimart.com</p>
              </div>

              <div className={styles.infoItem}>
                <h3>Phone</h3>
                <p>(+92) 3195345759</p>
              </div>
            </div>

            <div className={styles.contactForm}>
              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <h3>Thank you for contacting us!</h3>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
