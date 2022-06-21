import React from "react";
import menDress from "../Navbar/images/Category/menPajamas/icons8-men's-pajama-30.png";
import womenDress from "../Navbar/images/Category/womenDress/womenDress-30.png";
//import bags from "../Navbar/images/Category/bags/bags-30.png";
import children from "../Navbar/images/Category/children-color/children-30.png";
import electronics from "../Navbar/images/Category/electronics/icons8-electronics-30.png";
import jwellery from "../Navbar/images/Category/jewellery/icons8-jewelry-30.png";
//import health from "../Navbar/images/Category/health/icons8-heart-health-30.png";
import furnitures from "../Navbar/images/Category/furniture/furniture-30.png";

const Category = () => {
  return (
    <div className="bg-slate-100 rounded md:block hidden">
      <h1 className="mb-2">Categories</h1>
      <ul className="list-none  p-5">
        <li className="flex justify-start items-center">
          <img className="m-2" src={menDress} alt="mendress"></img>
          <a className="" href="#">
            Men's Dress
          </a>
          <hr />
        </li>

        <li className="flex justify-start items-center">
          <img className="m-2" src={womenDress} alt="mendress"></img>
          <a className="" href="#">
            Women's Dress
          </a>
          <hr />
        </li>

        <li className="flex justify-start items-center">
          <img className="m-2" src={children} alt="mendress"></img>
          <a className="" href="#">
            Child Dress
          </a>
          <hr />
        </li>

        <li className="flex justify-start items-center">
          <img className="m-2" src={furnitures} alt="furnitures"></img>
          <a className="" href="#">
            Furnitures
          </a>
          <hr />
        </li>

        <li className="flex justify-start items-center">
          <img className="m-2" src={jwellery} alt="jwellery"></img>
          <a className="" href="#">
            Jwellery
          </a>
          <hr />
        </li>

        <li className="flex justify-start items-center">
          <img className="m-2" src={electronics} alt="electronics"></img>
          <a className="" href="#">
            Electronics
          </a>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Category;
