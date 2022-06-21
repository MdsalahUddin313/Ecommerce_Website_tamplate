import React from "react";
import Carousel from "../Navbar/images/carousal_banner/d1.jpg";
import Category from "./Category";
import ProductList from "./ProductList";

const Carosal = () => {
  return (
    <div>
      <div className="grid md:grid-cols-6 grid-rows-1 grid-flow-row m-4 gap-2 grid-cols-1">
        <div className="rounded">
          <Category />
        </div>

        <img
          className="mx-auto col-span-4"
          src={Carousel}
          alt="carosoul images"
        ></img>
        <div>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Carosal;

// <img src={Carousel} alt="carosoul images"></img>
