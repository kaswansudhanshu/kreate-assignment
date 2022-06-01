import Nav from "./Navbar";
import Cart from "./Cart";
import Home from "./Home";
import Footer from "./Footer";
import ProductsList from "./productsList";
import ProductDetails from "./ProductDetails";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [listProducts, setListProducts] = useState(products);
  const [currPage, setCurrPage] = useState(1);
  const [cartCount, setcartCount] = useState(1);
  const [cartList, setCartList] = useState([]);

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
    fetchProducts(currPage).then((data) => {
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
        <Route exact path="*" element={<Home products={products} />} />
        <Route
          exact
          path="/products"
          element={
            <ProductsList
              products={listProducts}
              currPage={currPage}
              getNextPage={nextPage}
              getPrevPage={prevPage}
            />
          }
        />
        <Route exact path="/cart" element={<Cart />} />
        <Route
          exact
          path="/details"
          element={
            <ProductDetails
              product={products ? products[0] : ""}
              setcartCount={setcartCount}
              cartCount={cartCount}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
