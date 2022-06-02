import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/productDetails.module.css";

const ProductDetails = ({
  product,
  setcartCount,
  cartCount,
  cartList,
  setCartList,
  cartItemQty,
  setCartItemQty,
}) => {
  product.price = 99;
  const [productQty, setProductQty] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  function increaseQty() {
    setProductQty(() => productQty + 1);
    setAddedToCart(false);
  }

  function decreaseQty() {
    setAddedToCart(false);
    if (productQty === 1) return;
    setProductQty(() => productQty - 1);
  }

  function addToCart() {
    setcartCount(() => cartCount + productQty);
    setAddedToCart(true);
    addToCartList();
  }

  function addToCartList() {
    setCartList(() => {
      if (cartList.includes(product)) return cartList;
      const newCartList = [].concat(cartList);
      newCartList.push(product);
      return newCartList;
    });
    setCartItemQty(() => {
      const newCartItemQty = Object.assign({}, cartItemQty);
      newCartItemQty[product.id] = cartItemQty[product.id]
        ? cartItemQty[product.id] + productQty
        : productQty;
      return newCartItemQty;
    });
  }

  return (
    <div className={styles.productDetails}>
      <div className={styles.productImage}>
        <img src={`${product?.urls.small}`} alt="productImg" />
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
          {!addedToCart ? (
            <button onClick={addToCart}>Add to Cart</button>
          ) : (
            <Link to="/cart">
              <button>Go to Cart</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
