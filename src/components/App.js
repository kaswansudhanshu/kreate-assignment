import { Nav, Cart, Home, Footer } from "./main/index";
import { ProductsList, ProductDetails } from "./product/index";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  // Default Home page products //scrollable
  const [products, setProducts] = useState([]);

  // List of products at the moment on product list page
  const [listProducts, setListProducts] = useState(products);

  // Current page rendered in the list
  const [currPage, setCurrPage] = useState(1);

  // Total number of items in cart
  const [cartCount, setcartCount] = useState(0);

  // Items added to cart
  const [cartList, setCartList] = useState([]);

  // Get quantity of each item in cart
  const [cartItemQty, setCartItemQty] = useState({});

  useEffect(() => {
    // fetch the product for home page once component mounts
    fetchProducts().then((data) => {
      setProducts(data);
      setListProducts(data);
    });
  }, []);

  // fetching the products from server
  const fetchProducts = async (pageNum = 1) => {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?page=${pageNum}&query=grocery&client_id=nG0L9trHtN6c5pWb0fwH7ZJZhoy6eqZOIpILhbYDydg`
    );
    const data = res.data;
    return data.results;
  };

  // skip to the next page
  function nextPage() {
    setCurrPage(() => currPage + 1);
    fetchProducts(currPage + 1).then((data) => {
      setListProducts(data);
    });
  }
  // skip to the prev page if exist
  function prevPage() {
    if (!currPage) return;
    setCurrPage(() => currPage - 1);
    fetchProducts(currPage).then((data) => setListProducts(data));
  }

  return (
    <div className="App">
      <Nav cartCount={cartCount} />
      <Routes>
        <Route
          exact
          path="*"
          element={<Home products={products} currPage={currPage} />}
        />
        <Route
          exact
          path={`/products/pages`}
          element={
            <ProductsList
              products={listProducts}
              currPage={currPage}
              getNextPage={nextPage}
              getPrevPage={prevPage}
            />
          }
        />
        <Route
          exact
          path="/cart"
          element={<Cart products={cartList} cartItemQty={cartItemQty} />}
        />
        <Route
          exact
          path="/product"
          element={
            <ProductDetails
              product={products ? products[0] : ""}
              setcartCount={setcartCount}
              cartCount={cartCount}
              cartList={cartList}
              setCartList={setCartList}
              cartItemQty={cartItemQty}
              setCartItemQty={setCartItemQty}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
