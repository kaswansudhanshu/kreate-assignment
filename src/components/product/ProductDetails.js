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
  product.price = 99; //Just a dummy price

  // Quantity of product to be added to cart
  const [productQty, setProductQty] = useState(1);

  // Whether product added to cart or not
  const [addedToCart, setAddedToCart] = useState(false);

  // increase the qty to be added
  function increaseQty() {
    setProductQty(() => productQty + 1);
    // set addedToCart False to add more of that item to cart
    setAddedToCart(false);
  }

  // decrease the qty of item to be added , not less than 1
  function decreaseQty() {
    setAddedToCart(false);
    if (productQty === 1) return;
    setProductQty(() => productQty - 1);
  }

  // add items to the cart
  function addToCart() {
    // update cart items count
    setcartCount(() => cartCount + productQty);
    setAddedToCart(true);

    // add items to the cart list
    addToCartList();
  }

  function addToCartList() {
    setCartList(() => {
      // check if item already in list, if Yes just update quantity and return
      if (cartList.includes(product)) return cartList;

      // if new item update the cart list
      const newCartList = [].concat(cartList);
      newCartList.push(product);
      return newCartList;
    });

    setCartItemQty(() => {
      // check if the item already have some qty added to cart
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
            // if added to cart go the cart page
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
