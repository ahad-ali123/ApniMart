// CartItem.jsx
// CartItem.jsx
import { useState } from "react";
import styles from "./CartItem.module.css";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      onRemove(item.id);
    }, 300);
  };

  return (
    <div className={`${styles.cartItem} ${isRemoving ? styles.removing : ""}`}>
      <div className={styles.itemImage}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={styles.itemDetails}>
        <h3 className={styles.itemName}>{item.name}</h3>
        <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
      </div>
      <div className={styles.quantityControl}>
        <button
          className={styles.quantityButton}
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className={styles.quantityInput}
        />
        <button
          className={styles.quantityButton}
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
      <div className={styles.itemTotal}>
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      <button className={styles.removeButton} onClick={handleRemove}>
        ×
      </button>
    </div>
  );
};

export default CartItem;
