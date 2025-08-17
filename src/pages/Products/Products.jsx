import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useCart } from "../../context/CartContext";
import styles from "./Products.module.css";

const Products = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    document.title = "Products | Apni Mart";

    // Simulate API call
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // In a real app, you would fetch from an API
        const dummyProducts = [
          {
            id: 1,
            name: "Wireless Headphones",
            price: 99.99,
            discount: 15,
            category: "electronics",
            image: "../src/assets/image-1.jpg",
          },
          {
            id: 2,
            name: "Smart Watch",
            price: 199.99,
            discount: 10,
            category: "electronics",
            image: "../src/assets/image-2.jpg",
          },
          {
            id: 3,
            name: "Bluetooth Speaker",
            price: 79.99,
            category: "electronics",
            image: "../src/assets/image-3.jpg",
          },
          {
            id: 4,
            name: "Laptop Backpack",
            price: 49.99,
            category: "accessories",
            image: "../src/assets/image-4.jpg",
          },
          {
            id: 5,
            name: "Wireless Mouse",
            price: 29.99,
            category: "electronics",
            image: "../src/assets/image-5.jpg",
          },
          {
            id: 6,
            name: "Desk Lamp",
            price: 39.99,
            discount: 5,
            category: "home",
            image: "../src/assets/image-6.jpg",
          },
          {
            id: 7,
            name: "Water Bottle",
            price: 19.99,
            category: "accessories",
            image: "../src/assets/image-7.jpg",
          },
          {
            id: 8,
            name: "Notebook Set",
            price: 14.99,
            category: "stationery",
            image: "../src/assets/image-8.jpg",
          },
        ];

        setProducts(dummyProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <div className={styles.products}>
      <section className={styles.hero}>
        <h1>Our Products</h1>
        <p>Quality products at affordable prices</p>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.filterControls}>
            <button
              className={`${styles.filterButton} ${
                filter === "all" ? styles.active : ""
              }`}
              onClick={() => setFilter("all")}
            >
              All Products
            </button>
            <button
              className={`${styles.filterButton} ${
                filter === "electronics" ? styles.active : ""
              }`}
              onClick={() => setFilter("electronics")}
            >
              Electronics
            </button>
            <button
              className={`${styles.filterButton} ${
                filter === "accessories" ? styles.active : ""
              }`}
              onClick={() => setFilter("accessories")}
            >
              Accessories
            </button>
            <button
              className={`${styles.filterButton} ${
                filter === "home" ? styles.active : ""
              }`}
              onClick={() => setFilter("home")}
            >
              Home
            </button>
            <button
              className={`${styles.filterButton} ${
                filter === "stationery" ? styles.active : ""
              }`}
              onClick={() => setFilter("stationery")}
            >
              Stationery
            </button>
          </div>

          {loading ? (
            <div className={styles.loading}>Loading products...</div>
          ) : (
            <div className={styles.productsGrid}>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
