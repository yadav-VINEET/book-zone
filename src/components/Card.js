import React from "react";

export default function Card({ title, price, image, addToCart }) {
  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          <img className="card-img-top" src={image} alt={title} />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{title}</h5>
              {price}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <button
                onClick={addToCart}
                className="btn btn-outline-dark mt-auto"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
