import Nav from "./Navbar";
import Cart from "./Cart";
import Home from "./Home";
import Footer from "./Footer";
// import Menu from "./Menu";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
