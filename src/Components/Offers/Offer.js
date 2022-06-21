import React from "react";
import one from "../Navbar/images/offers/banner-left1.jpg";
import two from "../Navbar/images/top_categories/1.jpg";
import three from "../Navbar/images/top_categories/3.electronics.jpg";
import four from "../Navbar/images/top_categories/2.fashion.jpg";
import five from "../Navbar/images/top_categories/3.electronics.jpg";
import six from "../Navbar/images/top_categories/4.furniture.jpg";

const Offer = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-6 grid-flow-row gap-2 grid-row-1 text-center mx-auto grid-cols-2">
        <img className="sm:block hidden" src={one} alt="one"></img>
        <img className="sm:block hidden mx-auto" src={two} alt="one"></img>
        <img className="mx-auto" src={four} alt="one"></img>
        <img className="mx-auto" src={five} alt="one"></img>
        <img className="mx-auto" src={six} alt="one"></img>
        <img className="mx-auto" src={three} alt="one"></img>
      </div>
    </div>
  );
};

export default Offer;
