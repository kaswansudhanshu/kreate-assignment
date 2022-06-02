import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/cart.module.css";
import cartImage from "../../styles/empty_cart.png";

const Cart = (props) => {
  const { products, cartItemQty } = props;
  return (
    <div className={styles.cart}>
      {products.length === 0 ? (
        <div className={styles.emptyCart}>
          <h1>No items in Cart</h1>
          <img src={`${cartImage}`} alt="emptyCart" />
          <p>
            Continue Shopping - <Link to="/">Go To Homepage</Link>
          </p>
        </div>
      ) : (
        products.map((item) => {
          return (
            <CartItem
              product={item}
              key={item.id}
              cartItemQty={cartItemQty}
              // onIncreaseQty={props.onIncreaseQty}
              // onDecreaseQty={props.onDecreaseQty}
              // deleteItem={props.deleteItem}
            />
          );
        })
      )}
    </div>
  );
};

function CartItem(props) {
  const { product, cartItemQty } = props;

  return (
    <React.Fragment>
      <div className={styles.cartContainer}>
        <div className={styles.cartItem}>
          <div className={styles.leftBlock}>
            <img
              src={product.urls.thumb}
              alt=""
              className={styles.cartItemImage}
            />
          </div>
          <div className={styles.rightBlock}>
            <div style={{ fontSize: 25 }}>
              {product.alt_description.toUpperCase()}
            </div>
            <div style={{ color: "#777" }}>$ {product.price}</div>
            <div style={{ color: "#777" }}>Qty: {cartItemQty[product.id]}</div>
            {/* <div className={styles.cartItemActions}>
          <img
          alt="increase"
          className={styles.actionIcons}
          // onClick={() => onIncreaseQty(product)}
          src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          />
          <img
          alt="decrease"
          className={styles.actionIcons}
          // onClick={() => onDecreaseQty(product)}
          src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
          />
          <img
          alt="delete"
          className={styles.actionIcons}
          src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
          // onClick={() => deleteItem(product.id)}
          />
        </div> */}
          </div>
        </div>
        <div className={styles.cartTotal}>
          <h4>Total :</h4>
          <p>$ {product.price * cartItemQty[product.id]} </p>
        </div>
      </div>
      <div>
        <button className={styles.checkoutBtn}>Proceed to Checkout</button>
      </div>
    </React.Fragment>
  );
}

export default Cart;
