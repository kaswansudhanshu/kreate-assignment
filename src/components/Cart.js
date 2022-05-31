import styles from "../styles/cart.module.css";

const Cart = (props) => {
  const { products } = props;
  return (
    <div className={styles.cart}>
      {!products ? (
        <h1>No items in Cart</h1>
      ) : (
        products.map((item) => {
          return (
            <CartItem
              product={item}
              key={item.id}
              onIncreaseQty={props.onIncreaseQty}
              onDecreaseQty={props.onDecreaseQty}
              deleteItem={props.deleteItem}
            />
          );
        })
      )}
    </div>
  );
};

function CartItem(props) {
  const { product, onIncreaseQty, onDecreaseQty, deleteItem } = props;
  const { title, price, qty } = product;
  return (
    <div className={styles.cartItem}>
      <div className={styles.leftBlock}>
        <img src={product.img} alt="" className={styles.cartItemImage} />
      </div>
      <div className={styles.rightBlock}>
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>$ {price}</div>
        <div style={{ color: "#777" }}>Qty: {qty}</div>
        <div className={styles.cartItemActions}>
          {/* Buttons */}
          <img
            alt="increase"
            className={styles.actionIcons}
            onClick={() => onIncreaseQty(product)}
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          />
          <img
            alt="decrease"
            className={styles.actionIcons}
            onClick={() => onDecreaseQty(product)}
            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
          />
          <img
            alt="delete"
            className={styles.actionIcons}
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            onClick={() => deleteItem(product.id)}
          />
        </div>
      </div>
    </div>
  );
}

export default Cart;
