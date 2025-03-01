import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AboutHeroimg from "../../assets/Banner/about-1.png";
import Slider from "react-slick";
import image1 from "../../assets/about/about-2.png";
import image2 from "../../assets/about/about-3.png";
import image3 from "../../assets/about/about-4.png";

const cardData = [
  {
    id: 1,
    imag: image1,
  },
  {
    id: 2,
    imag: image2,
  },
  {
    id: 3,
    imag: image3,
  },
  {
    id: 4,
    imag: image1,
  },
  {
    id: 5,
    imag: image2,
  },
];

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 bg-gray-200 p-3 rounded-full cursor-pointer hover:bg-green-600 transition"
    onClick={onClick}
  >
    <FaArrowRight className="text-green-500 hover:text-white text-xl" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-[-30px] z-20 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full cursor-pointer  hover:bg-green-600 transition"
    onClick={onClick}
  >
    <FaArrowLeft className="text-green-500 hover:text-white text-xl" />
  </div>
);

const AboutHero = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For smaller tablets & large phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For small mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
      <div className="h-[100vh] w-full grid grid-cols-1 md:grid-cols-2">
        {/* image section */}
        <div className=" h-full w-full pl-32 sm:px-16 py-10">
          <img
            className="h-[100vh] w-full rounded-xl"
            src={AboutHeroimg}
            alt=""
          />
        </div>
        {/* text and slider */}
        <div className="h-full w-full pt-20">
          <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 py-5 text-start">
            Welcome to Nest
          </h1>
          <p className="py-5 pr-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum.
          </p>
          <p className="pr-8">
            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
            et Ut placerat legendos interpre.Donec vitae sapien ut libero
            venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis
            commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut
            ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate id
            est laborum.
          </p>
          <div className="center slider py-10 w-[80%]">
            <Slider {...settings}>
              {cardData.map((item) => (
                <div key={item.id}>
                  <div className="px-2">
                    <img src={item.imag} alt="" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
