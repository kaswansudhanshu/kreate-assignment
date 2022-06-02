import { Link } from "react-router-dom";
import styles from "../../styles/home.module.css";

const CardDetails = ({ product }) => {
  return (
    <Link to="/product" style={{ textDecoration: "none", color: "black" }}>
      <div className={styles.card}>
        <div className={styles.productImg}>
          <img src={`${product.urls.thumb}`} alt="prodcutImage" />
        </div>
        <div className={styles.productDetails}>
          <h5>Product {product.likes}</h5>
          <p>Seller</p>
          <h5>Price: $ 99</h5>
        </div>
      </div>
    </Link>
  );
};
export default CardDetails;
