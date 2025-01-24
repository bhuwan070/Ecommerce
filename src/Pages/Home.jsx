import React from "react";
import Header from "../Components/Home/Header/Header";
import FeaturedCat from "../Components/Home/FeatureSection/FeaturedCat";
import Footer from "../Components/Footer/Footer";
import Rating from "../Components/Home/PopularProduct/rating";
import PopularSection from "../Components/Home/PopularProduct/PopularSection";


const Home = () => {
  return (
    <>
    <Header />
    <FeaturedCat />
    <PopularSection />
      <Footer />
    </>
  );
};

export default Home;
