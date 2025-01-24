import React, { useState } from 'react'
import { GrCart } from "react-icons/gr";
import Rating from '../PopularProduct/Rating'
import product1_1 from "../../../assets/products/product-1-1.jpg"
import product1_2 from "../../../assets/products/product-1-2.jpg"
import product2_1 from "../../../assets/products/product-2-1.jpg"
import product2_2    from "../../../assets/products/product-2-2.jpg"
import product3_1 from "../../../assets/products/product-3-1.jpg"
import product3_2 from "../../../assets/products/product-3-2.jpg"
import product4_1 from "../../../assets/products/product-4-1.jpg"
import product4_2 from "../../../assets/products/product-4-2.jpg"
import product5_1 from "../../../assets/products/product-5-1.jpg"
import product5_2 from "../../../assets/products/product-5-2.jpg"
import product6_1 from "../../../assets/products/product-6-1.jpg"
import product6_2 from "../../../assets/products/product-6-2.jpg"
import product7_1 from "../../../assets/products/product-7-1.jpg"
import product7_2 from "../../../assets/products/product-7-2.jpg"
import product8_1 from "../../../assets/products/product-8-1.jpg"
import product8_2 from "../../../assets/products/product-8-2.jpg"
import product9_1 from "../../../assets/products/product-9-1.jpg"
import product9_2 from "../../../assets/products/product-9-2.jpg"
import product10_1 from "../../../assets/products/product-10-1.jpg"
import product10_2 from "../../../assets/products/product-10-2.jpg"
import product11_1 from "../../../assets/products/product-11-1.jpg"
import product11_2 from "../../../assets/products/product-11-2.jpg"
import product12_1 from "../../../assets/products/product-12-1.jpg"
import product12_2 from "../../../assets/products/product-12-2.jpg"
import product13_1 from "../../../assets/products/product-13-1.jpg"
import product13_2 from "../../../assets/products/product-13-2.jpg"
import product14_1 from "../../../assets/products/product-14-1.jpg"
import product14_2 from "../../../assets/products/product-14-2.jpg"
import product15_1 from "../../../assets/products/product-15-1.jpg"
import product15_2 from "../../../assets/products/product-15-2.jpg"

const Cards = [
  {
    top: "Hot",
    img1: product1_1,
    img2: product1_2,
    placeholder: "Snack",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    star: "4.0",
    producer: "NestFood",
    disPrice: "$28.85",
    fullPrice: "$32.0",
    category: "Fruits",
  },
  {
    top: "Sale",
    img1: product2_1,
    img2: product2_2,
    placeholder: "Hodo Foods",
    title: "All Natural Italian-Style Chicken Meatballs",
    star: "4.5",
    producer: "Stouffer",
    disPrice: "$52.85",
    fullPrice: "$55.8",
    category: "Pet Foods",
  },
  {
    top: "New",
    img1: product3_1,
    img2: product3_2,
    placeholder: "Snack",
    title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    star: "3.5",
    producer: "StarKist",
    disPrice: "$48.85",
    fullPrice: "$52.2",
    category: "Fruits",
  },
  {
    img1: product4_1,
    img2: product4_2,
    placeholder: "Vegetables",
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    star: "3.5",
    producer: "NestFood",
    disPrice: "$17.95",
    fullPrice: "$19.8",
    category: "Vegetables",
  },
  {
    top: "-14%",
    img1: product5_1,
    img2: product5_2,
    placeholder: "Pet Foods",
    title: "Blue Diamond Almonds Lightly Salted Vegetables",
    star: "4.0",
    producer: "NestFood",
    disPrice: "$23.65",
    fullPrice: "$25.3",
    category: "Pet Foods",
  },
  {
    top: "Sale",
    img1: product6_1,
    img2: product6_2,
    placeholder: "Hodo Foods",
    title: "Chobani Complete Vanilla Greek Yogurt",
    star: "3.5",
    producer: "NestFood",
    disPrice: "$54.85",
    fullPrice: "$55.8",
    category: "Milks & Dairies",
  },
  {
    img1: product7_1,
    img2: product7_2,
    placeholder: "Meats",
    title: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
    star: "4.5",
    producer: "NestFood",
    disPrice: "$32.85",
    fullPrice: "$33.0",
    category: "Milks & Dairies",
  },
  {
    top: "Hot",
    img1: product8_1,
    img2: product8_2,
    placeholder: "Snack",
    title: "Encore Seafoods Stuffed Alaskan Salmon",
    star: "2.5",
    producer: "NestFood",
    disPrice: "$35.85",
    fullPrice: "$32.0",
    category: "Meats & Seafood",
  },
  {
    top: "New",
    img1: product9_1,
    img2: product9_2,
    placeholder: "Coffee",
    title: "Gorton’s Beer Battered Fish Fillets with soft paper",
    star: "3.0",
    producer: "Old El Paso",
    disPrice: "$23.85",
    fullPrice: "$28.0",
    category: "Coffee & Tea",
  },
  {
    img1: product10_1,
    img2: product10_2,
    placeholder: "Cream",
    title: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
    star: "4.0",
    producer: "Tyson",
    disPrice: "$28.85",
    fullPrice: "$32.0",
    category: "Milks & Dairies",
  },
  {
    top: "Sale",
    img1: product11_1,
    img2: product11_2,
    placeholder: "Hodo Foods",
    title: "All Natural Italian-Style Chicken Meatballs",
    star: "4.5",
    producer: "Stouffer",
    disPrice: "$31.32",
    fullPrice: "$37.12",
    category: "Meats & Seafood",
  },
  {
    top: "Sale",
    img1: product12_1,
    img2: product12_2,
    placeholder: "Snack",
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    star: "3.0",
    producer: "NestFood",
    disPrice: "$28.85",
    fullPrice: "$32.0",
    category: "Meats & Seafood",
  },
  {
    img1: product13_1,
    img2: product13_2,
    placeholder: "Vegetables",
    title: "Blue Diamond Almonds Lightly Salted Vegetables",
    star: "3.5",
    producer: "NestFood",
    disPrice: "$19.85",
    fullPrice: "$23.13",
    category: "Vegetables",
  },
  {
    img1: product14_1,
    img2: product14_2,
    placeholder: "Snack",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    star: "4.0",
    producer: "NestFood",
    disPrice: "$28.85",
    fullPrice: "$32.0",
    category: "Vegetables"
  },
  {
    top: "Hot",
    img1: product15_1,
    img2: product15_2,
    placeholder: "Coffee",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    star: "4.5",
    producer: "Tyson",
    disPrice: "$22.85",
    fullPrice: "$30.0",
    category: "Coffee & Tea",
  },
];

const PopularSection = () => {

    const [activeCategory, SetActiveCategory] = useState("All");

    const filterCards = 
        activeCategory === "All"
        ? Cards
        : Cards.filter((card) => card.category === activeCategory);

        const breakpointColumns = {
          default: 5,
          1300: 4,
          1100: 3,
          768: 2,
          500: 1,
        };



  return (
    <section className="px-2 py-7 my-7">
      <div className="flex flex-col gap-6 truncate lg:gap-0 lg:flex-row lg:justify-between lg:items-center px-3">
        <h1 className="text-gray-700 text-3xl font-bold">Popular Products</h1>
        <div>
          <ul className="flex flex-wrap gap-6">
            {[
              "All",
              "Milks & Dairies",
              "Coffee & Tea",
              "Pet Foods",
              "Meats & Seafood",
              "Vegetables",
              "Fruits",
            ].map((category, index) => (
              <li
                key={index}
                className={`${
                  activeCategory === category ? "text-primary" : "text-gray-800"
                } text-[15px] font-semibold cursor-pointer hover:text-primary hover:-translate-y-1 ease duration-300`}
                onClick={() => SetActiveCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid sd:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 hx:grid-cols-5 my-6">
        {filterCards.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col gap-1 rounded-2xl border-[1px] group hover:shadow-lg hover:border-primary hover:border-opacity-40 px-6 py-4 m-3 justify-center ease duration-300"
          >
            <div className="relative w-56 h-56 mx-auto my-2">
              <img
                src={item.img1}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform ease duration-200 group-hover:opacity-0 group-hover:scale-110"
              />
              <img
                src={item.img2}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-transform group-hover:opacity-100 group-hover:scale-110 ease duration-500"
              />
            </div>
            <h1 className="text-[13px] font-semibold text-gray-500 hover:text-primary cursor-pointer ease duration-300">
              {item.placeholder}
            </h1>
            <p className="text-base text-gray-700 font-bold hover:text-primary cursor-pointer ease duration-300">
              {item.title}
            </p>
            <Rating rating={item.star} />
            <h1 className="text-gray-400 font-semibold text-sm">
              By{" "}
              <span className="text-primary font-bold hover:text-orange-500 ease duration-300">
                {item.producer}
              </span>
            </h1>
            <div className="flex justify-between items-center mt-4 truncate">
              <h1 className="text-primary text-lg font-bold">
                {item.disPrice}{" "}
                <span className="text-gray-400 text-sm line-through font-semibold mx-4">
                  {item.fullPrice}
                </span>
              </h1>
              <button className="flex items-center gap-2 bg-[#3BB77E] text-primary font-semibold bg-opacity-15 hover:bg-opacity-100 hover:text-white hover:-translate-y-1 rounded-[4px] px-4 py-[6px] ease duration-300">
                <GrCart />
                Add
              </button>
            </div>
            {item.top && (
              <div
                className={`${
                  item.top === "Hot" ? "bg-pink-500" : "bg-primary"
                } ${item.top === "Sale" ? "bg-sky-500" : "bg-primary"}
                ${
                  item.top === "-14%" ? "bg-orange-500" : "bg-primary"
                } absolute text-white text-semibold text-[13px] top-0 left-0 rounded-tl-2xl rounded-br-2xl px-[18px] py-[5px]`}
              >
                {item.top}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularSection