import React from "react";
import apple from "../Navbar/images/Products/FlashSales/appleMacbook300x300.jpg";
import cameras from "../Navbar/images/Products/FlashSales/camera360300x300.jpg";
import Headphone from "../Navbar/images/Products/FlashSales/headphone.jpg";
import Watch from "../Navbar/images/Products/FlashSales/applewatch300x300.jpg";
import tv from "../Navbar/images/Products/FlashSales/sumsungcurveTV300x300.jpg";
import newSticker from "../Navbar/images/Stickers/new_sticker_30.png";
const FeatureProducts = () => {
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
        name: "Headphone",
        image: Headphone,
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
        name: "Watch",
        image: Watch,
        price: 30,
        totalProduct: 15,
        sellingProduct: 9,
        rating: 4.2,
      },
    ],
  };
  return (
    <div className="my-5 py-4">
      <div className="text-center">
        <img
          className="inline-block m-auto mb-4 pr-3 opacity-100 transition-opacity animate-pulse ease-in-out duration-100 "
          src={newSticker}
          alt="newImage"
        ></img>
        <h1 className="inline-block text-center my-4 font-serif font-semibold sm:text-md text-sm">
          New <span className="text-orange-400">Products</span>
        </h1>
      </div>
      <div className="grid md:grid-cols-5 grid-cols-2 grid-rows-1 gap-2 grid-flow-row ">
        {flash_product.products.map((e) => {
          return (
            <>
              <div className="text-center font-mono">
                <img className="mx-auto h-25" src={e.image} alt="images"></img>
                <h1 className="font-bold text-sm">{e.name}k</h1>
                <h1>${e.price}</h1>
                <p>{e.rating}</p>
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

export default FeatureProducts;
