import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

export default function Cart({ cart, setCart }) {
  const getTotal = () => {
    let price;
    let total = 0;
    if (cart.length == 0) {
      return 0;
    }
    for (let i = 0; i < cart.length; i++) {
      price = parseFloat(cart[i].price.replace("$", ""));
      total += price;
    }
    return total;
  };
  let total = getTotal();
  return (
    <>
      <section className="h-100 h-custom py-5">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            Shopping Cart
                          </h1>
                          <h6 className="mb-0 text-muted">
                            {cart.length} {cart.length <= 1 ? "item" : "items"}
                          </h6>
                        </div>
                        <hr className="my-4" />

                        {cart.map((x) => {
                          return (
                            <CartItem
                              key={x.title}
                              title={x.title}
                              subtitle={x.subtitle}
                              image={x.image}
                              price={x.price}
                            />
                          );
                        })}
                        <div className="pt-5">
                          <h6 className="mb-0">
                            <Link to="/" className="text-body">
                              <i className="fas fa-long-arrow-alt-left me-2"></i>
                              Back to shop
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <aside className="col-lg-3">
                      <div className="card mb-3">
                        <div className="card-body">
                          <form>
                            <div className="form-group">
                              {" "}
                              <label>Have coupon?</label>
                              <div className="input-group">
                                {" "}
                                <input
                                  type="text"
                                  className="form-control coupon"
                                  name=""
                                  placeholder="Coupon code"
                                />{" "}
                                <span className="input-group-append">
                                  {" "}
                                  <button className="btn btn-primary btn-apply coupon">
                                    Apply
                                  </button>{" "}
                                </span>{" "}
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <dl className="dlist-align">
                            <dt>Total price:</dt>
                            <dd className="text-right ml-3">{"$" + total}</dd>
                          </dl>
                          <dl className="dlist-align">
                            <dt>Discount:</dt>
                            {total - 10 > 0 && (
                              <dd className="text-right text-danger ml-3">
                                - $10.00
                              </dd>
                            )}
                          </dl>
                          <dl className="dlist-align">
                            <dt>Total:</dt>
                            <dd className="text-right text-dark b ml-3">
                              <strong>
                                {"$" + (total - 10 <= 0 ? 0 : total - 10)}
                              </strong>
                            </dd>
                          </dl>
                          <hr />{" "}
                          <Link
                            to="/"
                            className="btn btn-out btn-primary btn-square btn-main"
                            data-abc="true"
                          >
                            {" "}
                            Make Purchase{" "}
                          </Link>{" "}
                          <Link
                            to="/"
                            className="btn btn-out btn-success btn-square btn-main mt-2"
                            data-abc="true"
                          >
                            Continue Shopping
                          </Link>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
