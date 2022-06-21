import React from "react";
import apple from "../Navbar/images/Products/FlashSales/appleMacbook300x300.jpg";
import cameras from "../Navbar/images/Products/FlashSales/camera360300x300.jpg";
import trowser from "../Navbar/images/Products/FlashSales/trowser300x300.jpg";
import snikkers from "../Navbar/images/Products/FlashSales/snikkers300x300.jpg";
import tv from "../Navbar/images/Products/FlashSales/sumsungcurveTV300x300.jpg";
//import CarosalOffers from "../carosel/CarosalOffers";

const FlashSales = ({ flashSales }) => {
  const myStyle = {
    width: "45%",
  };
  const flash_product = {
    products: [
      {
        name: "Apple Macbook",
        image: apple,
        price: 120,
        totalProduct: 15,
        sellingProduct: 12,
        rating: 4.2,
      },
      {
        name: "Trowser",
        image: trowser,
        price: 20,
        totalProduct: 15,
        sellingProduct: 11,
        rating: 4.0,
      },
      {
        name: "Sumsung Tv",
        image: tv,
        price: 100,
        totalProduct: 15,
        sellingProduct: 10,
        rating: 4.5,
      },
      {
        name: "Cameras",
        image: cameras,
        price: 45,
        totalProduct: 15,
        sellingProduct: 5,
        rating: 4.5,
      },
      {
        name: "Snikkers",
        image: snikkers,
        price: 30,
        totalProduct: 15,
        sellingProduct: 9,
        rating: 4.2,
      },
    ],
  };
  return (
    <div>
      <h1 className="text-center font-serif font-semibold sm:text-md text-sm">
        {flashSales}
      </h1>
      <div className="grid md:grid-cols-5 grid-cols-2 grid-rows-1 gap-2 grid-flow-row ">
        {flash_product.products.map((e) => {
          return (
            <>
              <div className="text-center font-mono">
                <img className="mx-auto h-25" src={e.image} alt="images"></img>
                <h1 className="font-bold text-sm">{e.name}k</h1>
                <h1>${e.price}</h1>
                <p>{e.rating}</p>
                <div className="m-2 mx-6 w-90">
                  <p className="text-start">
                    {e.sellingProduct}/{e.totalProduct}
                  </p>
                  <div class="w-90 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      class="bg-orange-400 h-2.5 rounded-full"
                      style={myStyle}
                    ></div>
                  </div>
                </div>
                <div>
                  <button className="bg-orange-400 mb-4 hover:bg-white rounded-full text-white hover:text-orange-400 hover:border-2 border-orange-400">
                    <p className="mx-3">Add to Cart</p>
                  </button>
                </div>
                <hr />
              </div>
            </>
          );
        })}

        {/*Pr1 */}

        {/*pr1 end */}
      </div>
    </div>
  );
};

export default FlashSales;
