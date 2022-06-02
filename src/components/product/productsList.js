import CardDetails from "../main/Cards";

const ProductsList = ({ products, getNextPage, getPrevPage }) => {
  return (
    <div className="productsList" style={styles.productsList}>
      <div className="productsContainer" style={styles.productsContainer}>
        {products?.map((product, index) => {
          return <CardDetails product={product} key={"prod-" + index} />;
        })}
      </div>
      <div style={styles.pageBtns}>
        <button
          className="prevBtn"
          style={styles.prevBtn}
          onClick={getPrevPage}
        >
          Prev.
        </button>
        <button
          className="nextBtn"
          style={styles.nextBtn}
          onClick={getNextPage}
        >
          Next.
        </button>
      </div>
    </div>
  );
};

const styles = {
  productsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    columnGap: "5rem",
    rowGap: "2rem",
    alignItems: "center",
    justifyContent: "center",
  },
  productsList: {
    padding: "1rem 0rem",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  pageBtns: {
    marginTop: "1.5rem",
  },
  prevBtn: {
    position: "absolute",
    left: "50px",
    bottom: "10px",
    background: "transparent",
    border: "1px solid black",
    borderRadius: "10px",
    cursor: "pointer",
  },
  nextBtn: {
    position: "absolute",
    right: "50px",
    bottom: "10px",
    background: "transparent",
    cursor: "pointer",
    border: "1px solid black",
    borderRadius: "10px",
  },
};

export default ProductsList;
