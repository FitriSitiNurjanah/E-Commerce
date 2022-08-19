import "./App.css";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/productDetail" element={<ProductDetail />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
