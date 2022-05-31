import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";
// import Menu from "./Menu";

const Nav = (props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/" onClick={(e) => e.preventDefault()}>
          <img
            src="https://kreateworld.in/_next/static/media/logo-full.f542a263.svg"
            alt="logo"
          />
        </a>
      </div>
      <div className={styles.searchField}>
        <input
          name="search"
          type="search"
          className={styles.searchInput}
          placeholder="Search"
        />
        <div className={styles.searchBtn}>🔍</div>
      </div>
      <div className={styles.cartIconContainer}>
        <Link to="/cart">
          <img
            className={styles.cartIcon}
            src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
            alt=""
          />
        </Link>
        <span
          className={styles.cartCount}
          style={{ display: props.count ? "block" : "none" }}
        >
          {props.count}
        </span>
      </div>
    </div>
  );
};

export default Nav;
