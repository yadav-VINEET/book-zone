import React from "react";

export default function CartItem({ title, subtitle, price, image }) {
  return (
    <div className="row mb-4 d-flex justify-content-between align-items-center">
      <div className="col-md-2 col-lg-2 col-xl-2">
        <img src={image} className="img-fluid rounded-3" alt={title} />
      </div>
      <div className="col-md-3 col-lg-3 col-xl-3">
        <h6 className="text-muted">{title}</h6>
        <h6 className="text-black mb-0">{subtitle}</h6>
      </div>
      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
        <button className="btn btn-link px-2">
          <i className="fas fa-minus"></i>
        </button>

        <button className="btn btn-link px-2">
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <h6 className="mb-0">{price}</h6>
      </div>
    </div>
  );
}
