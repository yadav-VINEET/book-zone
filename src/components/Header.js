import React from "react";

export default function Header() {
  return (
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Latest Releases</h1>
          <p className="lead fw-normal text-white-50 mb-0">Only on Bookzone</p>
        </div>
      </div>
    </header>
  );
}
