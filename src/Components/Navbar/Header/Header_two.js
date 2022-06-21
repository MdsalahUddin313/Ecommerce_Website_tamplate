import React from "react";
//import { Link } from "react-router-dom";
import Header_two_menus from "./Header_two_menus";
const Header_two = () => {
  return (
    <>
      <nav
        className="flex relative font-mono justify-between items-center h-16 bg-gradient-to-r from-purple-500 to-pink-500"
        role="navigation"
      >
        <a className="ml-5" href="#">
          <strong className="text-sm sm:text-center text-gray-700">
            Big<span className="text-start text-orange-500">Bazar</span>
          </strong>
        </a>
        <div className="flex justify-between items-center">
          <div className="md:block hidden">
            <input
              placeholder="  Search product items"
              class="px-8 h-12 py-3 sm:w-50 border-2 w-96 border-orange-500 rounded-full "
            />
          </div>
        </div>

        <div className="flex items-center">
          {/* Whishlist */}
          <a
            href="/"
            className="md:block hidden mx-2 text-white hover:text-yellow-400 rounded-full  bg-Yellow-300 hover:bg-white border-2 hover:border-3 border-white hover:border-red-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5  m-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="/"
            className="md:block hidden mx-2 text-white hover:text-yellow-400 rounded-full bg-Yellow-300 hover:bg-white border-2 hover:border-3 border-white hover:border-red-300"
          >
            {/* Cart */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 m-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </a>
        </div>
      </nav>

      <div class="h-14 bg-gradient-to-r from-purple-500 to-pink-500">
        {" "}
        <Header_two_menus />
      </div>
    </>
  );
};

export default Header_two;
