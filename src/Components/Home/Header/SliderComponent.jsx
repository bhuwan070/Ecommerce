import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../../../assets/Banner/slider-1.png";
import Slider2 from "../../../assets/Banner/slider-2.png";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import "./SliderComponent.css";
import Bg1 from "../../../assets/icons/icon-email-2.svg";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="bg-white hidden md:block hover:bg-primary opacity-0 group-hover:opacity-80 ease duration-200"
      onClick={onClick}
      style={{
        borderRadius: "100%",
        padding: "15px",
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        zIndex: "1",
        cursor: "pointer",
        color: "black",
      }}
    >
      <GrNext className="hover:text-white ease duration-200" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="bg-white hidden md:block hover:bg-primary opacity-0 group-hover:opacity-80 ease duration-200"
      onClick={onClick}
      style={{
        borderRadius: "100%",
        padding: "15px",
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        zIndex: "1",
        cursor: "pointer",
        color: "black",
      }}
    >
      <GrPrevious className="hover:text-white ease duration-200 z-10" />
    </div>
  );
};

const SliderComponent = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots custom-dots",
    // autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="px-6 py-10">  
      <div className="slider-container group max-w-[100%]">
        <Slider {...settings}>
          <div
            className=""
          >
            <img
              className="rounded-3xl h-[350px] lg:h-[400px] xl:h-[500px] object-cover"
              src={Slider2}
              alt=""
            />
            <div className="flex flex-col gap-5 md:gap-7 lg:gap-10 absolute top-1/2 left-[6%] translate-y-[-50%]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-700">
                Fresh Vegetables <br /> Big discount
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-500">
                Save up to 50% off on your first order
              </p>
              <form
                action="#"
                className="relative flex justify-between items-center bg-white rounded-full pl-4 md:pl-7 max-w-[85%]"
              >
                <img className="" src={Bg1} alt="" />
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
          <div
            className=""
          >
            <img
              className="rounded-3xl h-[350px] lg:h-[400px] xl:h-[500px]  object-cover"
              src={Slider1}
              alt=""
            />
            <div className="flex flex-col gap-5 md:gap-7 lg:gap-10 absolute top-1/2 left-[6%] translate-y-[-50%]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-700">
                Don't miss amazing <br /> grocery deals
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-500">
                Sign up for daily newsletter
              </p>
              <form
                action="#"
                className="relative flex justify-between items-center bg-white rounded-full pl-4 md:pl-7 max-w-[85%]"
              >
                <img className="" src={Bg1} alt="" />
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
        </Slider>
      </div>
    </section>
  );
};

export default SliderComponent;
