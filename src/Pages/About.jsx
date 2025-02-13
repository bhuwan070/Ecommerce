import React from "react";
import SearchNav from "../Components/Home/Header/SearchNav";
import Navbar from "../Components/Home/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import AboutHero from "../Components/About/AboutHero";
import OurServices from "../Components/About/OurServices";
import HistorySection from "../Components/About/HistorySection";
import Team from "../Components/About/Team";
import Progress from "../Components/About/Progress";

const About = () => {
  return (
    <>
      <SearchNav />
      <Navbar />
      <AboutHero />
      <OurServices />
      <HistorySection />
      <Progress />
      <Team />
      <Footer />
    </>
  );
};

export default About;
