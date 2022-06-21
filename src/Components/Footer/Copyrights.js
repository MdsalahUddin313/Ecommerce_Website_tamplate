import React from "react";
import transactionCard from "../Navbar/images/footer_payment_banner/paypal.png";
const Copyrights = () => {
  return (
    <div className="sticky absolute bottom-3">
      <div className="flex justify-between bg-black">
        <p className="mx-4 text-center  text-white ">
          All rights are reserved by @Md Salah uddin
        </p>
        <img
          src={transactionCard}
          className="my-2 py-2"
          alt="traction Images"
        />
      </div>
    </div>
  );
};

export default Copyrights;
