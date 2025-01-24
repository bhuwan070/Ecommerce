import React from "react";
import Banner1 from "../../assets/Banner/banner-4.png";
import { FaLongArrowAltRight } from "react-icons/fa";
const DailybestSeller = () => {
  return (
    <section className="pb-5 border-2 border-gray-500">
      <div className="container">
        <div className="flex justify-between px-2 mb-8">
          <h1 className=" text-3xl font-semibold text-gray-500 py-4">
            Daily Best Sells
          </h1>
          <div>
            <ul className="flex justify-around pt-6">
              <li className="px-2">
                <button className="text-lg font-semibold text-gray-500 hover:text-primary hover:scale-105 transition-all duration-500 ease-in-out">
                  Featured
                </button>
              </li>
              <li className="px-2">
                <button className="text-lg font-semibold text-gray-500 hover:text-primary hover:scale-105 transition-all duration-500 ease-in-out">
                  Popular
                </button>
              </li>
              <li className="px-2">
                <button className="text-lg font-semibold text-gray-500 hover:text-primary hover:scale-105 transition-all duration-500 ease-in-out">
                  New Added
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-[70vh] w-full mx-autp px-4 mb-5">
          <div
            className=" h-full w-full sm:w-[60%] md:w-[25%] rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: `url(${Banner1})` }}
          >
            <div className="absolute pl-10 text-4xl font-bold text-wrap text-gray-700 top-10 text-banner">
              <h2>
                Bring nature <br /> into your <br /> home
              </h2>
            </div>
            <div className="absolute pl-10 bottom-44 ">
              <a
                className="flex  bg-primary py-2 px-3 rounded-md text-base text-white font-semibold hover:bg-yellow-500 hover:scale-x-110 transition-all duration-500 ease-in-out"
                href="#"
              >
                Shop Now
                <FaLongArrowAltRight className="mt-1 ml-2" />
              </a>
            </div>
          </div>
          <div className="slide"></div>
        </div>
      </div>
    </section>
  );
};

export default DailybestSeller;
