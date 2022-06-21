import React from "react";
import fb from "../Navbar/images/Social_media/icons8-facebook-50.png";
import tt from "../Navbar/images/Social_media/icons8-twitter-50.png";
import yt from "../Navbar/images/Social_media/icons8-instagram-50.png";

const Subscription = () => {
  return (
    <div className="bg-orange-400 rounded-md my-2 mb-10">
      <div className="grid sm:grid-cols-2 grid-cols-1 grid-rows-1 grid-flow-row">
        <div className="py-4 flex items-center">
          <p className="text-center ml-10 mr-5 font-serif text-white font-semibold text-sm">
            Follow Us On
          </p>
          <img src={fb} alt="fb" className="mx-3 h-8"></img>
          <img src={yt} alt="fb" className="mx-3 h-8"></img>
          <img src={tt} alt="fb" className="mx-3 h-8"></img>
        </div>
        <div className="flex py-4 mx-4">
          <span className="inline-flex items-center px-3 text-sm text-orange-800 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-orange-600 dark:text-orange-400 dark:border-orange-600">
            Subscribe
          </span>
          <input
            type="text"
            id="website-admin"
            className="mr-10 text-center rounded-none rounded-r-lg bg-orange-50 border border-orange-300 text-orange-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-orange-300 p-2.5  dark:bg-orange-700 dark:border-orange-600 dark:placeholder-orange-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Subscribe with your email"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscription;

/*
<div class="flex">
        <span class="inline-flex items-center px-3 text-sm text-orange-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          Subscribe
        </span>
        <input
          type="text"
          id="website-admin"
          class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your Email and Subscribe"
        />
      </div>
*/
