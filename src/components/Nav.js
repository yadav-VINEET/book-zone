import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ cart }) {
  return (
    <>
      <nav className="navbar navbar-light navbar-expand-lg bg-light">
        <div className="container px-4 px-lg-5">
          <Link to="/" className="navbar-brand">
            Bookzone
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          </div>

          <Link to="cart">
            <div className="btn btn-outline-dark">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {cart.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light"></nav>
    </>
  );
}
