import React from "react";
import laptop from "../Navbar/images/best selling/laptop90x90.jpg";
import trowser from "../Navbar/images/best selling/trowsers90.90.jpg";
import snikkers from "../Navbar/images/best selling/snikkers90.90.jpg";
import pillow from "../Navbar/images/best selling/pillow90x90.jpg";

const best_selling_products = {
  products: [
    {
      name: "Apple Mi Laptop",
      image: laptop,
      rating: "5 star",
    },
    {
      name: "Men's Trowser",
      image: trowser,
      rating: "5 star",
    },
    {
      name: "Bata Snikkers",
      image: snikkers,
      rating: "5 star",
    },
    {
      name: "Japani Pillow",
      image: pillow,
      rating: "5 star",
    },
  ],
};
const ProductList = () => {
  return (
    <div className="bg-slate-100 rounded">
      <h1 className="mb-5 hover:text-orange-800">Best Selling</h1>

      <ul className="list-none text-start">
        {best_selling_products.products.map((e) => {
          return (
            <>
              <li className="flex justify-start items-start my-2">
                <div>
                  <img className="h-12 mx-2" src={e.image} alt="laptop"></img>
                </div>
                <div>
                  <h1 className="text-xsm">{e.name}</h1>
                  <p className="text-xsm">{e.rating}</p>
                </div>
                <hr />
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
