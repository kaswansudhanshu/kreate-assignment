import { useEffect, useState } from "react";
import styles from "../styles/home.module.css";
import CardDetails from "./Cards";
import ProductCards from "./ProductCards";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get(
      "https://api.unsplash.com/search/photos?page=1&query=office&client_id=nG0L9trHtN6c5pWb0fwH7ZJZhoy6eqZOIpILhbYDydg"
    );
    const data = res.data;
    setProducts(data.results);
  };

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
          <button type="button">View All</button>
        </div>
        {products ? <ProductCards products={products} /> : ""}
      </div>

      <div className={styles.newArrivalList}>
        <div className={styles.newArrivalHeader}>
          <h3>New Arrival</h3>
          <button type="button">View All</button>
        </div>
        {products ? <ProductCards products={products} /> : ""}
      </div>
    </div>
  );
};

export default Home;
