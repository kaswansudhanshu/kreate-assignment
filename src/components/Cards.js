import styles from "../styles/home.module.css";

const CardDetails = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.productImg}>
        <img src={`${product.urls.thumb}`} />
      </div>
      <div className={styles.productDetails}>
        <h4>Product Name</h4>
        <p>Seller</p>
        <h5>Price: $ 99</h5>
      </div>
    </div>
  );
};
export default CardDetails;
