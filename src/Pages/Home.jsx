import React from "react";
import Header from "../Components/Home/Header/Header";
import FeaturedCat from "../Components/Home/FeatureSection/FeaturedCat";
import Footer from "../Components/Footer/Footer";
import DailybestSeller from "../Components/DailyBestSell/DailybestSeller";
import PopularSection from "../Components/Home/PopularProduct/PopularSection";
import Deals from "../Components/Home/Deals/Deals";
import TopSection from "../Components/Home/TopSection/TopSection";


const Home = () => {
  return (
    <>
      <Header />
      <FeaturedCat />
      <PopularSection />
      <Deals />
      <DailybestSeller />
      <TopSection />
      <Footer />
    </>
  );
};

export default Home;
