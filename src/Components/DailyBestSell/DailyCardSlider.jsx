import Slider from "react-slick";
import PropTypes from "prop-types";
import { GrCart } from "react-icons/gr";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Product1 from "../../assets/products/product-1-1.jpg";
import Product12 from "../../assets/products/product-1-2.jpg";
import Product2 from "../../assets/products/product-2-1.jpg";
import Product22 from "../../assets/products/product-2-2.jpg";
import Product3 from "../../assets/products/product-3-1.jpg";
import Product32 from "../../assets/products/product-3-2.jpg";
import Product4 from "../../assets/products/product-4-1.jpg";
import Product42 from "../../assets/products/product-4-2.jpg";
import Product5 from "../../assets/products/product-5-1.jpg";
import Product52 from "../../assets/products/product-5-2.jpg";
import Product6 from "../../assets/products/product-6-1.jpg";
import Product62 from "../../assets/products/product-6-2.jpg";
import Product7 from "../../assets/products/product-7-1.jpg";
import Product72 from "../../assets/products/product-7-2.jpg";
import Product8 from "../../assets/products/product-8-1.jpg";
import Product82 from "../../assets/products/product-8-2.jpg";
import Rating from "../Home/PopularProduct/Rating";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";

const CardDetails = [
  {
    id: 1,
    image1: Product1,
    image2: Product12,
    companyName: "abcd",
    product_description: "Orgaic branded from nature",
    sold_quantity: "123/90",
    star: "4.0",
    Price: "$123",
    discountedPrice: "$134",
  },
  {
    id: 2,
    image1: Product2,
    image2: Product22,
    companyName: "abcd",
    product_description: "Orgaic branded from nature",
    sold_quantity: "123/90",
    star: "4.0",
    Price: "$123",
    discountedPrice: "$134",
  },
  {
    id: 3,
    image1: Product3,
    image2: Product32,
    companyName: "abcd",
    product_description: "Orgaic branded from nature",
    sold_quantity: "123/90",
    star: "4.0",
    Price: "$123",
    discountedPrice: "$134",
  },
  {
    id: 4,
    image1: Product4,
    image2: Product42,
    companyName: "abcd",
    product_description: "Orgaic branded from nature",
    sold_quantity: "123/90",
    star: "4.0",
    Price: "$123",
    discountedPrice: "$134",
  },
  {
    id: 5,
    image1: Product5,
    image2: Product52,
    companyName: "abcd",
    product_description: "Orgaic branded from nature",
    sold_quantity: "123/90",
    star: "4.0",
    Price: "$123",
    discountedPrice: "$134",
  },
  {
    id: 6,
    image1: Product6,
    image2: Product62,
    companyName: "abcd",
    product_description: "Orgaic branded from nature",
    sold_quantity: "123/90",
    star: "4.0",
    Price: "$123",
    discountedPrice: "$134",
  },

  {
    id: 7,
    image1: Product7,
    image2: Product72,
    companyName: "abcd",
    product_description: "Orgaic branded from nature",
    sold_quantity: "123/90",
    star: "4.0",
    Price: "$123",
    discountedPrice: "$134",
  },
  {
    id: 8,
    image1: Product8,
    image2: Product82,
    companyName: "abcd",
    product_description: "Orgaic branded from nature",
    sold_quantity: "123/90",
    star: "4.0",
    Price: "$123",
    discountedPrice: "$134",
  },
];

const DailyCardSlider = () => {
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div>
      <div>
        <Slider {...settings}>
          {CardDetails.map((card) => (
            <div
              key={card.id}
              className=" h-full p-4 bg-white shadow-2xl rounded-lg flex flex-col items-center justify-center text-center"
              onMouseEnter={() => setHoveredCardId(card.id)}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              <img
                src={hoveredCardId === card.id ? card.image2 : card.image1}
                alt={card.companyName}
                className={`w-full h-60 object-cover rounded-lg transition-transform duration-300 ${
                  hoveredCardId === card.id ? "scale-125" : "scale-100"
                }`}
              />
              <p className="text-gray-500 text-sm mt-2 text-center sm:text-left pl-4 ">
                {card.companyName}
              </p>
              <h3 className="mb-1 text-left pl-2 text-xl text-gray-700 font-extrabold">
                {card.product_description}
              </h3>
              <div className="px-2">
                <Rating rating={card.star} />
              </div>
              <div className="flex px-2">
                <p className="text-primary text-xl font-semibold mt-2">
                  {card.discountedPrice}
                </p>
                <p className="text-gray-400 text-sm mt-3 font-semibold line-through px-5">
                  {card.Price}
                </p>
              </div>
              <p className="text-gray-700 font-semibold text-sm mt-2 text-center sm:text-left pl-2">
                sold:{card.sold_quantity}
              </p>
              <div className="py-5 object-center">
                <a
                  className="flex object-center bg-primary py-3 px-5 rounded-md text-sm sm:text-base text-white font-semibold hover:bg-yellow-500 hover:scale-x-110 transition-all duration-500 ease-in-out"
                  href="#"
                >
                  <GrCart />
                  <span className="px-2 pl-3">Add to Cart</span>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 cursor-pointer hover:bg-gray-400"
      onClick={onClick}
    >
      <AiOutlineRight size={24} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 cursor-pointer hover:bg-gray-400"
      onClick={onClick}
    >
      <AiOutlineLeft size={24} />
    </div>
  );
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
};

PrevArrow.propTypes = {
  onClick: PropTypes.func,
};

export default DailyCardSlider;
