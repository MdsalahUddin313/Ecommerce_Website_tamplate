import React from "react";
import "./header-style.css";
//import bn from "../images/country_flags/bn.png";
//import en from "../images/country_flags/en.png";
const Header_one = () => {
  return (
    <div className="flex items-center shadow-sm justify-between font-mono py-1 my-0">
      <p className="ml-5 transition duration-80 animate-pulse text-gray-500 md:block hidden">
        💥💥স্বাগতম আপনকে BigBazar! প্রতি সপ্তাহান্তে উপহারের মূল্য জিতুন || New
        Coupon code: Happy2022🎉
      </p>
      <div className="flex justify-end ml-3 md:block hidden">
        <div className="">
          <select className="bg-white">
            <option>
              <p>BDT</p>
            </option>
            <option>
              <p>US</p>
            </option>
          </select>

          <select className="mx-3 bg-white">
            <option className="us_selector">English</option>
            <option className="bn_selector">Bangla</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header_one;

/**
 * <img src={bn} alt="bn"></img>
   <img src={en} alt="en"></img>
 */
