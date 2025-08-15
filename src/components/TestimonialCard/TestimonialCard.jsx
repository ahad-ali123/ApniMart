// TestimonialCard.jsx
// TestimonialCard.jsx
import styles from "./TestimonialCard.module.css";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.testimonialContent}>
        <p className={styles.testimonialText}>"{testimonial.content}"</p>
      </div>
      <div className={styles.testimonialAuthor}>
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className={styles.authorImage}
        />
        <div className={styles.authorInfo}>
          <h4 className={styles.authorName}>{testimonial.name}</h4>
          <p className={styles.authorRole}>{testimonial.role}</p>
          <div className={styles.rating}>
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`${styles.star} ${
                  i < testimonial.rating ? styles.filled : ""
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
