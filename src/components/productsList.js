import CardDetails from "./Cards";

const ProductsList = ({ products, getNextPage, getPrevPage }) => {
  return (
    <div className="productsList" style={styles.productsList}>
      <div className="productsContainer" style={styles.productsContainer}>
        {products?.map((product, index) => {
          return <CardDetails product={product} key={"prod-" + index} />;
        })}
      </div>
      <button className="prevBtn" style={styles.prevBtn} onClick={getPrevPage}>
        Prev.
      </button>
      <button className="nextBtn" style={styles.nextBtn} onClick={getNextPage}>
        Next.
      </button>
    </div>
  );
};

const styles = {
  productsContainer: {
    display: "flex",
    flexWrap: "wrap",
    columnGap: "5rem",
    rowGap: "2rem",
    alignItems: "center",
    justifyContent: "center",
  },
  productsList: {
    padding: "1rem 0rem",
    position: "relative",
  },
  prevBtn: {
    position: "absolute",
    left: "50px",
    bottom: "10px",
    background: "transparent",
    border: "0",
    cursor: "pointer",
    ":hover": {
      color: "red",
    },
  },
  nextBtn: {
    position: "absolute",
    right: "50px",
    bottom: "10px",
    background: "transparent",
    border: "0",
    cursor: "pointer",
  },
};

export default ProductsList;
