import React from "react";
import Newsletter from "../../assets/Banner/banner-9.png";
import backgroundImg from "../../assets/Banner/banner-10.png";
import Bg1 from "../../assets/icons/icon-email-2.svg";
const FooterNewsletter = () => {
  return (
    <section
      className="mx-5 mb-5 rounded-xl bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="container flex flex-col-reverse lg:flex-row  min-h-[50vh] p-5 sm:p-10 gap-8">
        {/* content section  */}
        <div className=" flex-1 description text-center lg:text-left">
          <div>
            <h1 className="px-5 sm:px-10 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 mb-4 sm:mb-8">
              Stay home & get your daily
              <br /> needs from our shop
            </h1>
            <p className="px-5 sm:px-10 mb-4  sm:mb-10 text-base sm:text-lg font-semibold text-gray-500">
              Start You'r Daily Shopping with{" "}
              <span className="text-primary">Nest Mart</span>{" "}
            </p>
          </div>
          <div className=" px-2 sm:px-10">
            <form
              action="#"
              className="relative flex justify-between items-center bg-white rounded-full pl-4 md:pl-7 max-w-[85%]"
            >
              <img src={Bg1} alt="" />
              <input
                className="absolute left-12 md:left-16 focus:outline-none max-w-[70%] placeholder-gray-400 placeholder-opacity-75 text-[12px] md:text-sm lg:text-lg"
                type="email"
                placeholder="Your email address"
              />
              <button
                type="submit"
                className=" bg-primary rounded-full px-5 py-3 md:px-7 md:py-4 lg:px-10 lg:py-5 text-white tracking-wider hover:bg-[#209961] ease duration-200 z-50"
              >
                Suscribe
              </button>
            </form>
          </div>
        </div>
        {/* imagesection */}
        <div className=" flex-1">
          <img src={Newsletter} alt="newsletter" className="" />
        </div>
      </div>
    </section>
  );
};

export default FooterNewsletter;
