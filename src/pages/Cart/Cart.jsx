// Cart.jsx
// Cart.jsx
import { useEffect } from "react";
import { useCart } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } =
    useCart();

  useEffect(() => {
    document.title = "Your Cart | Apni Mart";
  }, []);

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything to your cart yet</p>
        <Link to="/products" className={styles.shopButton}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <h1 className={styles.title}>Your Shopping Cart</h1>

      <div className={styles.cartContainer}>
        <div className={styles.itemsContainer}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
          ))}
        </div>

        <div className={styles.summary}>
          <h3>Order Summary</h3>
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className={`${styles.summaryRow} ${styles.total}`}>
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <button className={styles.checkoutButton}>Proceed to Checkout</button>
          <button className={styles.clearButton} onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
