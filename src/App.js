import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Router>
        <Header cart={cart} setCart={setCart}/>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
