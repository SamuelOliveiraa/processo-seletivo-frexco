import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Fruit from "./Pages/Fruit/Fruit";
import Checkout from "./Pages/Checkout/Checkout";
import FakePage from "./Pages/FakePage/FakePage";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Router>
        <Header cart={cart} setCart={setCart} />
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="/about" element={<FakePage />} />
          <Route path="/contact" element={<FakePage />} />
          <Route
            path="/search"
            element={<Search cart={cart} setCart={setCart} />}
          />
          <Route
            path="/checkout"
            element={<Checkout cart={cart} setCart={setCart} />}
          />
          <Route
            path="/fruit/:id"
            element={<Fruit cart={cart} setCart={setCart} />}
          />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
