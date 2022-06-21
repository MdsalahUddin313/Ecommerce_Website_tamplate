import React from "react";
import brands from "../Navbar/images/footer_comapny_names/foo1.jpg";
import brands_two from "../Navbar/images/footer_comapny_names/foot2.png";

const BrandNames = () => {
  return (
    <>
      <div className="text-center mx-auto">
        <div>
          <hr />
          <img src={brands} className="mx-auto mt-5" alt="Brand Names"></img>
        </div>
        <div className="text-gray-600 mb-5 mt-3">
          <a className="hover:text-orange-500 mx-4 p-3" href="#">
            About Store
          </a>
          <a className="hover:text-orange-500 mx-4 p-3" href="#">
            New Collection
          </a>
          <a className="hover:text-orange-500 mx-4 p-3" href="#">
            Contact Us
          </a>
          <a className="hover:text-orange-500 mx-4 p-3" href="#">
            Latest News
          </a>
          <a className="hover:text-orange-500 mx-4 p-3" href="#">
            Our Sitemap
          </a>
        </div>

        <p className="text-gray-700 mb-4">
          **$50 off orders $350+ with the code BOO50. $75 off orders $500+ with
          the code BOO75. $150 off orders $1000+ with the code BOO150. Valid
          from October 28, 2016 to October 31, 2016. Offer may not be combined
          with any other offers or promotions, is non-exchangeable and
          non-refundable. Offer valid within the US only.
        </p>
        <div>
          <img
            src={brands_two}
            className="my-5 mx-auto"
            alt="Brand Names"
          ></img>
        </div>
      </div>
    </>
  );
};

export default BrandNames;
