import { useState } from "react";
import styles from "../styles/productDetails.module.css";

const ProductDetails = ({ product, setcartCount, cartCount }) => {
  const [productQty, setProductQty] = useState(1);

  function increaseQty() {
    setProductQty(() => productQty + 1);
  }
  function decreaseQty() {
    if (productQty === 1) return;
    setProductQty(() => productQty - 1);
  }

  function addToCart() {
    setcartCount(() => cartCount + productQty);
  }

  return (
    <div className={styles.productDetails}>
      <div className={styles.productImage}>
        <img src={`${product?.urls.small}`} />
      </div>
      <div className={styles.productDescription}>
        <div>
          <h3>{product?.alt_description.toUpperCase()}</h3>
          <p>Seller Name</p>
        </div>
        <div className={styles.pincode}>
          <p>Delivery</p>
          <input type="number" placeholder="Pincode" />
          <button>Check</button>
        </div>
        <div className={styles.cartOptions}>
          <p>Qty:</p>
          <button onClick={decreaseQty}>-</button>
          <p className={styles.productQty}>{productQty}</p>
          <button onClick={increaseQty}>+</button>
        </div>
        <div className={styles.addToCart}>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
