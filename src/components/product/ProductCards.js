import CardDetails from "../main/Cards";
import styles from "../../styles/home.module.css";

const ProductCards = ({ products }) => {
  // horizontal scroll buttons
  const scrollRight = (e) => {
    e.target.parentElement.scrollLeft += 200;
  };
  const scrollLeft = (e) => {
    e.target.parentElement.scrollLeft -= 200;
  };

  return (
    <div className={styles.productCards}>
      <button className={styles.scrollLeftBtn} onClick={(e) => scrollLeft(e)}>
        {"<"}
      </button>
      {products
        ? products.map((product) => {
            return <CardDetails product={product} key={product.id} />;
          })
        : ""}
      <button className={styles.scrollRightBtn} onClick={(e) => scrollRight(e)}>
        {">"}
      </button>
    </div>
  );
};

export default ProductCards;
