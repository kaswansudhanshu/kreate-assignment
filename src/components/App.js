import { Nav, Cart, Home, Footer } from "./main/index";
import { ProductsList, ProductDetails } from "./product/index";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [listProducts, setListProducts] = useState(products);
  const [currPage, setCurrPage] = useState(1);
  const [cartCount, setcartCount] = useState(0);
  const [cartList, setCartList] = useState([]);
  const [cartItemQty, setCartItemQty] = useState({});

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setListProducts(data);
    });
  }, []);

  const fetchProducts = async (pageNum = 1) => {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?page=${pageNum}&query=grocery&client_id=nG0L9trHtN6c5pWb0fwH7ZJZhoy6eqZOIpILhbYDydg`
    );
    const data = res.data;
    return data.results;
  };

  function nextPage() {
    setCurrPage(() => currPage + 1);
    fetchProducts(currPage + 1).then((data) => {
      setListProducts(data);
    });
  }

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
