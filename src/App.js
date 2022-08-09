import Cards from "./components/Cards";
import Header from "./components/Header";
import Nav from "./components/Nav";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Cart from "./page/Cart";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Nav cart={cart} setCart={setCart} />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </div>
  );
}

export default App;
