import { useState, useRef } from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const buttonRef = useRef(null);

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div
      className={`${styles.card} ${isHovered ? styles.hover : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.productImage}
        />
        <div className={styles.overlay}>
          <button
            ref={buttonRef}
            className={`${styles.addButton} ${isAdded ? styles.added : ""}`}
            onClick={handleAddToCart}
          >
            {isAdded ? "Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        <div className={styles.priceContainer}>
          {product.discount ? (
            <>
              <span className={styles.discountedPrice}>
                ${((product.price * (100 - product.discount)) / 100).toFixed(2)}
              </span>
              <span className={styles.originalPrice}>
                ${product.price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className={styles.price}>${product.price.toFixed(2)}</span>
          )}
        </div>
        {product.discount && (
          <span className={styles.discountBadge}>-{product.discount}%</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
