const Menu = () => {
  return (
    <div className="menu" style={styles.menu}>
      <nav style={styles.menuList}>
        <div>
          <button>
            <img
              style={styles.menuIcon}
              src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
              alt="menu-icon"
            ></img>
          </button>
        </div>
        <div id="show-menu" style={{ visibility: "hidden" }}>
          <ul id="menu-list ">
            <li>
              <a href="./index.html">Home</a>
            </li>
            <li>
              <a href="#">Library</a>
            </li>
            <li>
              <a href="#">Liked Songs</a>
            </li>
            <li>
              <a href="#">Playlists</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const styles = {
  menu: {
    // flex: "1",
    position: "relative",
    top: "80px",
    left: "-20px",
  },
  menuList: {
    top: "20%",
    flex: "1",
  },
  menuIcon: {
    width: "10px",
    height: "10px",
  },
};

export default Menu;
