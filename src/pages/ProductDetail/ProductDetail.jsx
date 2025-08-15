// ProductDetail.jsx
// ProductDetail.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call
    const fetchProduct = async () => {
      try {
        setLoading(true);
        // In a real app, you would fetch from an API
        const dummyProducts = [
          {
            id: "1",
            name: "Wireless Headphones",
            price: 99.99,
            discount: 15,
            description:
              "Premium wireless headphones with noise cancellation and 30-hour battery life.",
            features: [
              "Active Noise Cancellation",
              "30-hour battery life",
              "Bluetooth 5.0",
              "Built-in microphone",
              "Comfortable over-ear design",
            ],
            images: [
              "https://via.placeholder.com/800x600?text=Headphones+Front",
              "https://via.placeholder.com/800x600?text=Headphones+Side",
              "https://via.placeholder.com/800x600?text=Headphones+Back",
              "https://via.placeholder.com/800x600?text=Headphones+Detail",
            ],
            colors: ["Black", "White", "Blue"],
            stock: 10,
          },
          // Add more dummy products as needed
        ];

        const foundProduct = dummyProducts.find((p) => p.id === id);
        if (foundProduct) {
          setProduct(foundProduct);
          setSelectedImage(foundProduct.images[0]);
        } else {
          navigate("/products");
        }
      } catch (err) {
        setError("Failed to load product");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: quantity,
    });
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= (product.stock || 10)) {
      setQuantity(value);
    }
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!product) {
    return <div className={styles.notFound}>Product not found</div>;
  }

  return (
    <div className={styles.productDetail}>
      <div className={styles.productContainer}>
        {/* Product Images */}
        <div className={styles.imageGallery}>
          <div className={styles.mainImage}>
            <img
              src={selectedImage}
              alt={product.name}
              className={styles.productImage}
            />
          </div>
          <div className={styles.thumbnailContainer}>
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`${styles.thumbnail} ${
                  selectedImage === image ? styles.active : ""
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className={styles.thumbnailImage}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className={styles.productInfo}>
          <h1 className={styles.productTitle}>{product.name}</h1>

          <div className={styles.priceContainer}>
            {product.discount ? (
              <>
                <span className={styles.discountedPrice}>
                  $
                  {((product.price * (100 - product.discount)) / 100).toFixed(
                    2
                  )}
                </span>
                <span className={styles.originalPrice}>
                  ${product.price.toFixed(2)}
                </span>
                <span className={styles.discountBadge}>
                  Save {product.discount}%
                </span>
              </>
            ) : (
              <span className={styles.price}>${product.price.toFixed(2)}</span>
            )}
          </div>

          <div className={styles.rating}>
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`${styles.star} ${i < 4 ? styles.filled : ""}`}
              >
                ★
              </span>
            ))}
            <span className={styles.ratingCount}>(24 reviews)</span>
          </div>

          <p className={styles.productDescription}>{product.description}</p>

          {product.features && (
            <div className={styles.features}>
              <h3 className={styles.featuresTitle}>Features:</h3>
              <ul className={styles.featuresList}>
                {product.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {product.colors && (
            <div className={styles.colorOptions}>
              <h3 className={styles.colorTitle}>Color:</h3>
              <div className={styles.colorSwatches}>
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={styles.colorSwatch}
                    style={{ backgroundColor: color.toLowerCase() }}
                    aria-label={color}
                  />
                ))}
              </div>
            </div>
          )}

          <div className={styles.quantitySelector}>
            <label htmlFor="quantity" className={styles.quantityLabel}>
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              max={product.stock || 10}
              value={quantity}
              onChange={handleQuantityChange}
              className={styles.quantityInput}
            />
          </div>

          <div className={styles.actions}>
            <button
              className={styles.addToCartButton}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button className={styles.buyNowButton}>Buy Now</button>
          </div>

          <div className={styles.stockStatus}>
            {product.stock > 0 ? (
              <span className={styles.inStock}>
                In Stock ({product.stock} available)
              </span>
            ) : (
              <span className={styles.outOfStock}>Out of Stock</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
