import React from "react";
import { useState, useEffect, useRef } from "react";
import Header from "../Components/Home/Header/Header";
import FeaturedCat from "../Components/Home/FeatureSection/FeaturedCat";
import Footer from "../Components/Footer/Footer";
import DailybestSeller from "../Components/DailyBestSell/DailybestSeller";
import PopularSection from "../Components/Home/PopularProduct/PopularSection";
import Deals from "../Components/Home/Deals/Deals";
import TopSection from "../Components/Home/TopSection/TopSection";
import PopUp from "../Components/Home/PopUp";
import LoadingComp from "../Components/LoadingComp";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const popupRef = useRef(null);

  useEffect(() => {
    setShowPopup(true); // Change to true when you want it to pop up
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false); // Close popup when clicking outside
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  
    useEffect(() => {
      // Simulate a loading time or wait for an API call
      const timer = setTimeout(() => setLoading(false), 1000); // 3 seconds
      return () => clearTimeout(timer);
    }, []);
  

  return (
    <>
      {loading ? (
        <LoadingComp />
      ) : (
        <div className="relative">
          <div className={`${showPopup ? "blur-sm" : ""}`}>
            <Header />
            <FeaturedCat />
            <PopularSection />
            <Deals />
            <DailybestSeller />
            <TopSection />
            <Footer />
          </div>

          {showPopup && (
            <div
              className="fixed z-[1000] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              ref={popupRef}
            >
              <PopUp onClick={() => setShowPopup(false)} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
