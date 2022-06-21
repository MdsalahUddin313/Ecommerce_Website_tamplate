import React from "react";
import Category from "../../carosel/Category";
import watch from "../../Navbar/images/Products/FlashSales/applewatch300x300.jpg";
import apple from "../../Navbar/images/Products/FlashSales/appleMacbook300x300.jpg";
import cameras from "../../Navbar/images/Products/FlashSales/camera360300x300.jpg";
import Headphone from "../../Navbar/images/Products/FlashSales/headphone.jpg";
import tv from "../../Navbar/images/Products/FlashSales/sumsungcurveTV300x300.jpg";
//import newSticker from "../../Navbar/images/Stickers/new_sticker_30.png";

const AllProduct = () => {
  const productList = {
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
        name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        image: watch,
        price: 30,
        totalProduct: 15,
        sellingProduct: 9,
        rating: 4.2,
      },
    ],
  };

  return (
    <div>
      <div className="grid grid-cols-6 grid-flow-row grid-rows-1 gap-2">
        <div className="col-span-1">
          <Category />
        </div>
        <div className="col-span-4">
          <div className="">
            {productList.products.map((e) => {
              return (
                <>
                  {" "}
                  <div class="max-w-sm w-60 inline-block m-4 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <img
                        class="p-2 rounded-t-lg"
                        src={e.image}
                        alt="product image"
                      />
                    </a>
                    <div class="px-2 pb-5">
                      <a href="#">
                        <h5 class="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                          {e.name}
                        </h5>
                      </a>
                      <div class="flex items-center mt-2.5 mb-5">
                        <svg
                          class="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          class="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          class="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          class="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          class="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <span class="bg-orange-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                          {e.rating}.0
                        </span>
                      </div>
                      <div class="flex justify-between items-center">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">
                          ${e.price}
                        </span>
                        <a
                          href="#"
                          class="px-5 py-2.5 text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-xxsm text-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-800"
                        >
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="col-span-1 bg-slate-500 rounded-md h-16"></div>
      </div>
    </div>
  );
};

export default AllProduct;
