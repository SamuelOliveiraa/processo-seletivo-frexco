import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Router>
        <Header cart={cart} setCart={setCart}/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
