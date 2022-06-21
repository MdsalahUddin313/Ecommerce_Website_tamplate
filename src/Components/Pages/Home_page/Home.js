import React from "react";
import Carosal from "../../carosel/Carosal";
import CarosalOffers from "../../carosel/CarosalOffers";
import Banner from "../../FlashSales/Banner";
import FeatureProducts from "../../FlashSales/FeatureProducts";
import FlashSales from "../../FlashSales/FlashSales";
import Subscription from "../../FlashSales/Subscription";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Header/Navbar";
import Offer from "../../Offers/Offer";

const Home = () => {
  const flashSales = "Flash Sales";

  return (
    <div>
      <Carosal />
      <Offer />
      <FlashSales flashSales={flashSales} />
      <CarosalOffers />
      <Banner />
      <FeatureProducts />
      <Subscription />
    </div>
  );
};

export default Home;
