import CardDetails from "../main/Cards";
import styles from "../../styles/productsList.module.css";

const ProductsList = ({ products, getNextPage, getPrevPage }) => {
  return (
    <div className={styles.productsList}>
      <div className={styles.productsContainer}>
        {products?.map((product, index) => {
          return <CardDetails product={product} key={"prod-" + index} />;
        })}
      </div>
      <div className={styles.pageBtns}>
        <button className={styles.prevBtn} onClick={getPrevPage}>
          Prev.
        </button>
        <button className={styles.nextBtn} onClick={getNextPage}>
          Next.
        </button>
      </div>
    </div>
  );
};

export default ProductsList;
