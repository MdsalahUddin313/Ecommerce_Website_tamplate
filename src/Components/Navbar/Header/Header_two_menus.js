import React from "react";

const Header_two_menus = () => {
  return (
    <div className="sticky top-0">
      <nav className="flex text-white justify-between items-center p-5 h-10">
        <div className="mt-4">
          <a href="#" className="p-4 m-2 hover:text-orange-500">
            All Categories
          </a>
          <a href="#" className="p-4 m-2 hover:text-orange-500">
            Home
          </a>
          <a href="#" className="p-4 m-2 hover:text-orange-500">
            Shop
          </a>
          <a href="#" className="p-4 m-2 hover:text-orange-500">
            Features
          </a>
          <a href="#" className="p-4 m-2 hover:text-orange-500">
            Blogs
          </a>
          <a href="#" className="p-4 m-2 hover:text-orange-500">
            Vendors
          </a>
        </div>
        <div className="flex justify-between items-center">
          <div
            className="
            md:block hidden rounded-full bg-orange-500 hover:bg-white text-white px-4 py-2 mx-2 hover:text-orange-500"
          >
            <a className="mx-8" href="#">
              Login
            </a>
          </div>
          <div className=" md:block hidden rounded-full border-2 px-4 py-2 mx-2 border-white hover:border-orange-500">
            <a
              href="#"
              className="mx-8
         hover:text-orange-500 font-roboto"
            >
              Sign up
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header_two_menus;
