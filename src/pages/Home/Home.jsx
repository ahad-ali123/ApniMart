import { useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import { useCart } from "../../context/CartContext";
import styles from "./Home.module.css";

// ✅ Import product images
import img1 from "../../assets/image-1.jpg";
import img2 from "../../assets/image-2.jpg";
import img3 from "../../assets/image-3.jpg";
import img4 from "../../assets/image-4.jpg";

// ✅ Import testimonial images
import man1 from "../../assets/man-1.jpg";
import man2 from "../../assets/man-2.jpg";
import man3 from "../../assets/man-3.jpg";

const Home = () => {
  const { addToCart } = useCart();

  useEffect(() => {
    document.title = "Apni Mart - Home";
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      discount: 15,
      image: img1,
    },
    { id: 2, name: "Smart Watch", price: 199.99, discount: 10, image: img2 },
    { id: 3, name: "Bluetooth Speaker", price: 79.99, image: img3 },
    { id: 4, name: "Laptop Backpack", price: 49.99, image: img4 },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Frequent Shopper",
      content:
        "I love shopping at Apni Mart! The products are high quality and the delivery is always fast.",
      rating: 5,
      image: man1,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Tech Enthusiast",
      content:
        "Great selection of electronics at competitive prices. Highly recommend!",
      rating: 4,
      image: man2,
    },
    {
      id: 3,
      name: "Emily Wilson",
      role: "First-time Buyer",
      content:
        "Excellent customer service. They helped me find exactly what I was looking for.",
      rating: 5,
      image: man3,
    },
  ];

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Welcome to <span>Apni Mart</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Discover amazing products at unbeatable prices
          </p>
          <a href="/products" className={styles.heroButton}>
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        <div className={styles.productsGrid}>
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
        <div className={styles.seeMore}>
          <a href="/products" className={styles.seeMoreLink}>
            View All Products →
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${styles.section} ${styles.testimonialsSection}`}>
        <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
