import React from "react";
import banner_one from "../Navbar/images/offers/tab1.jpg";
import banner_two from "../Navbar/images/offers/bn1.jpg";
import banner_three from "../Navbar/images/offers/bn2.jpg";

const Banner = () => {
  return (
    <div className="">
      <div className="grid sm:grid-cols-4 grid-cols-2 grid-rows-1 grid-flow-row gap-2 items-center py-8">
        <div className="col-span-2 rounded display-inline-grid ">
          {" "}
          <img
            className="m-auto px-3 hover:opacity-70 transition ease-in-out hover:duration-100"
            src={banner_two}
            alt="newImage"
          ></img>
        </div>
        <div className="col-span-2 rounded">
          {" "}
          <img
            className="m-auto px-3 hover:opacity-70 transition ease-in-out hover:duration-100"
            src={banner_three}
            alt="newImage"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;

/**
 *  <div className="col-span-1">
          {" "}
          <img
            className="m-auto mb-4 pr-3 opacity-100"
            src={banner_one}
            alt="newImage"
          ></img>
        </div>
        <div className="col-span-2">
          {" "}
          <img
            className="m-auto mb-4 pr-3 opacity-100"
            src={banner_two}
            alt="newImage"
          ></img>
        </div>
        <div className="col-span-2">
          {" "}
          <img
            className="m-auto mb-4 pr-3 opacity-100"
            src={banner_three}
            alt="newImage"
          ></img>
        </div>
 */
