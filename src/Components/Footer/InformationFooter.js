import React from "react";

const InformationFooter = () => {
  return (
    <div>
      <hr />
      <div className="grid sm:grid-cols-5 grid-flow-row gap-8 grid-cols-2 my-4">
        <div className="rounded-sm">
          <h1>
            <a className="ml-5 text-center text-md" href="#">
              <strong>
                Big<span className="text-orange-500">Bazar</span>
              </strong>
            </a>
            <div className="ml-5 mt-4">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-orange-500 hover:text-orange-300 text-sm"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />{" "}
                </svg>
                22/B Mirpur, Dhaka
              </a>

              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-orange-500 hover:text-orange-300 text-sm"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                014xxxxx53
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-orange-500 hover:text-orange-300 text-sm"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Open 8:00 AM to 7:00 PM
              </a>
            </div>
          </h1>
        </div>

        <div className="rounded-sm">
          <h1 className="border-2 mr-10 border-t-white border-l-white border-r-white  border-b-orange-500">
            OUR SERVICES
          </h1>
          <div>
            <ul className="list-none">
              <li>
                <a href="#">About Store</a>
              </li>
              <li>
                <a href="#">New Collection</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Latest News</a>
              </li>
              <li>
                <a href="#">Our Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-sm">
          <h1 className="border-2 mr-10 border-t-white border-l-white border-r-white border-b-orange-500">
            COLLECTION
          </h1>
          <div>
            <ul className="list-none">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Customer Service</a>
              </li>
              <li>
                <a href="#">Search Terms</a>
              </li>
              <li>
                <a href="#"> Affiliates</a>
              </li>
              <li>
                <a href="#">Advanced Search</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-sm">
          <h1 className="border-2 mr-10 border-t-white border-l-white border-r-white  border-b-orange-500">
            INFORMATION
          </h1>
          <div>
            <ul className="list-none">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Checkout</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Portfolio Masonry</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-sm">
          <h1 className="border-2 mr-10 text-xxsm font-semibold border-t-white border-l-white border-r-white  border-b-orange-500">
            WHY BUY FROM US
          </h1>
          <div>
            <ul className="list-none">
              <li>
                <a href="#">Support 24/7</a>
              </li>
              <li>
                <a href="#">Free Shipping</a>
              </li>
              <li>
                <a href="#">Secure Shopping</a>
              </li>
              <li>
                <a href="#">International Shipping</a>
              </li>
              <li>
                <a href="#">Return Shipping</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationFooter;
