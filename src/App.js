import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Search from './Pages/Search/Search'
import Fruit from "./Pages/Fruit/Fruit";
import Checkout from "./Pages/Checkout/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Router>
        <Header cart={cart} setCart={setCart} />
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="/search" element={<Search cart={cart} setCart={setCart} />} />
          <Route path="/about" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="/contact" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
          <Route path="/fruit/:id" element={<Fruit cart={cart} setCart={setCart} />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
