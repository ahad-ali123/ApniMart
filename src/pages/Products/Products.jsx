import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useCart } from "../../context/CartContext";
import styles from "./Products.module.css";

// ✅ Import product images
import img1 from "../../assets/image-1.jpg";
import img2 from "../../assets/image-2.jpg";
import img3 from "../../assets/image-3.jpg";
import img4 from "../../assets/image-4.jpg";
import img5 from "../../assets/image-5.jpg";
import img6 from "../../assets/image-6.jpg";
import img7 from "../../assets/image-7.jpg";
import img8 from "../../assets/image-8.jpg";

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
        const dummyProducts = [
          {
            id: 1,
            name: "Wireless Headphones",
            price: 99.99,
            discount: 15,
            category: "electronics",
            image: img1,
          },
          {
            id: 2,
            name: "Smart Watch",
            price: 199.99,
            discount: 10,
            category: "electronics",
            image: img2,
          },
          {
            id: 3,
            name: "Bluetooth Speaker",
            price: 79.99,
            category: "electronics",
            image: img3,
          },
          {
            id: 4,
            name: "Laptop Backpack",
            price: 49.99,
            category: "accessories",
            image: img4,
          },
          {
            id: 5,
            name: "Wireless Mouse",
            price: 29.99,
            category: "electronics",
            image: img5,
          },
          {
            id: 6,
            name: "Desk Lamp",
            price: 39.99,
            discount: 5,
            category: "home",
            image: img6,
          },
          {
            id: 7,
            name: "Water Bottle",
            price: 19.99,
            category: "accessories",
            image: img7,
          },
          {
            id: 8,
            name: "Notebook Set",
            price: 14.99,
            category: "stationery",
            image: img8,
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
            {["all", "electronics", "accessories", "home", "stationery"].map(
              (cat) => (
                <button
                  key={cat}
                  className={`${styles.filterButton} ${
                    filter === cat ? styles.active : ""
                  }`}
                  onClick={() => setFilter(cat)}
                >
                  {cat === "all"
                    ? "All Products"
                    : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              )
            )}
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
