import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Cards({ cart, setCart }) {
  let [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((result) => result.json())
      .then((data) => setBooks(data.books));
  }, []);

  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {books.map((element, key) => {
              const addToCart = () => {
                let mycart = cart;
                if (cart.includes(element)) {
                  alert("Item Already Exists");
                } else {
                  setCart((currentCart) => [...currentCart, element]);
                }
              };

              return (
                <Card
                  key={key}
                  title={element.title}
                  image={element.image}
                  price={element.price}
                  id={element.isbn13}
                  addToCart={addToCart}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
