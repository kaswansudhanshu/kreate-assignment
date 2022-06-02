import { Link } from "react-router-dom";
import styles from "../../styles/home.module.css";
import ProductCards from "../product/ProductCards";

const Home = ({ products }) => {
  return (
    <div className="Home_Component">
      <div className={styles.mainSlider}>
        <div className={styles.sliderImages}>
          <img
            src="https://kreateworld.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fskincare.ff43f68e.jpg&w=1920&q=75"
            alt="sliderImage"
          />
        </div>
      </div>

      <div className={styles.trendingList}>
        <div className={styles.trendingHeader}>
          <h3>Trending Item</h3>
          <Link to={`/products/pages`} className={styles.viewAll}>
            View All
          </Link>
        </div>
        {products ? <ProductCards products={products} /> : ""}
      </div>

      <div className={styles.newArrivalList}>
        <div className={styles.newArrivalHeader}>
          <h3>New Arrival</h3>
          <Link to={`/products/pages`} className={styles.viewAll}>
            View All
          </Link>
        </div>
        {products ? <ProductCards products={products} /> : ""}
      </div>
    </div>
  );
};

export default Home;
