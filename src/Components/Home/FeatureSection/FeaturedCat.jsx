import React from "react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import cat1 from "../../../assets/Cat/cat-13.png";
import cat2 from "../../../assets/Cat/cat-12.png";
import cat3 from "../../../assets/Cat/cat-11.png";
import cat4 from "../../../assets/Cat/cat-9.png";
import cat5 from "../../../assets/Cat/cat-3.png";
import cat6 from "../../../assets/Cat/cat-1.png";
import cat7 from "../../../assets/Cat/cat-2.png";
import cat8 from "../../../assets/Cat/cat-4.png";
import cat9 from "../../../assets/Cat/cat-5.png";
import cat10 from "../../../assets/Cat/cat-14.png";
import FeatureCard from "./FeatureCard";
import Bgimg1 from "../../../assets/Banner/banner-1.png";
import Bgimg2 from "../../../assets/Banner/banner-2.png";
import Bgimg3 from "../../../assets/Banner/banner-3.png";

const cards = [
  {
    bgColor: "#fff3cd",
    img: cat1,
    title: "Cake & Milk",
    no: "26 items",
  },
  {
    bgColor: "#ffe69c",
    img: cat2,
    title: "Organic Kiwi",
    no: "28 items",
  },
  {
    bgColor: "#a3cfbb",
    img: cat3,
    title: "Peach",
    no: "14 items",
  },
  {
    bgColor: "#f1aeb5",
    img: cat4,
    title: "Red Apple",
    no: "54 items",
  },
  {
    bgColor: "#f8d7da",
    img: cat5,
    title: "Snack",
    no: "56 items",
  },
  {
    bgColor: "#f8d7da",
    img: cat6,
    title: "Vegetables",
    no: "72 items",
  },
  {
    bgColor: "#9eeaf9",
    img: cat7,
    title: "Strawberry",
    no: "36 items",
  },
  {
    bgColor: "#9eeaf9",
    img: cat8,
    title: "Black Plum",
    no: "76 items",
  },
  {
    bgColor: "#fff3cd",
    img: cat9,
    title: "Custard Apple",
    no: "34 items",
  },
  {
    bgColor: "#f8d7da",
    img: cat10,
    title: "Coffee & Tea",
    no: "69 items",
  },
];

const FeaturedCat = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="px-3 py-4">
      <div className="flex justify-between items-center mb-10 px-3">
        <h1 className="text-gray-700 text-[33px] font-bold">Featured Categories</h1>
        <div className="flex gap-4">
          {/* Custom Prev and Next Buttons */}
          <div
            className="bg-gray-100 hover:bg-primary group p-2 rounded-full cursor-pointer shadow-lg ease duration-300"
            onClick={() => sliderRef.current.slickPrev()} // Move to the previous slide
          >
            <GrFormPreviousLink
              size={30}
              className="text-gray-500 group-hover:text-white ease duration-300"
            />
          </div>
          <div
            className="bg-gray-100 group hover:bg-primary p-2 rounded-full cursor-pointer shadow-lg ease duration-300"
            onClick={() => sliderRef.current.slickNext()} // Move to the next slide
          >
            <GrFormNextLink
              size={30}
              className="text-gray-500 group-hover:text-white ease duration-300"
            />
          </div>
        </div>
      </div>
      <div className="slider-container mt-4 overflow-hidden">
        <Slider ref={sliderRef} {...settings}>
          {cards.map((item, index) => (
            <div key={index} className="">
              <div className="relative mx-3 py-5 rounded-lg border-2 border-opacity-0  border-primary hover:border-opacity-25 ease duration-500 group">
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="absolute inset-0 rounded-lg opacity-60 " // Tailwind's opacity class
                ></div>
                <div className="relative flex flex-col items-center justify-center gap-1 ">
                  <img src={item.img} alt="" className="w-[80px]" />
                  <h1 className="font-semibold text-gray-700 group-hover:text-primary ease duration-300">
                    {item.title}
                  </h1>
                  <p className="text-gray-500">{item.no}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-12 px-3 gap-8 md:gap-6 ">
        <FeatureCard
          bgImg={Bgimg1}
          text1="Everyday Fresh &"
          text2="Clean with Our"
          text3="Products"
        />
        <FeatureCard
          bgImg={Bgimg2}
          text1="Make your Breakfast"
          text2="Healthy and Easy"
        />
        <FeatureCard
          bgImg={Bgimg3}
          text1="The best Organic"
          text2="Products Online"
        />
      </div>
    </section>
  );
};

export default FeaturedCat;
