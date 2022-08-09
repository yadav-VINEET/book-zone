import React from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";

export default function Home({ cart, setCart }) {
  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <Cards cart={cart} setCart={setCart} />
    </>
  );
}
