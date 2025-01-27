import React from "react";
import TimeCounter from "./TimeCounter";
import AddtoCartButton from "../PopularProduct/AddtoCartButton";
import Rating from "../PopularProduct/Rating";
import Bgimg1 from "../../../assets/Banner/banner-5.png";
import Bgimg2 from "../../../assets/Banner/banner-6.png";
import Bgimg3 from "../../../assets/Banner/banner-7.png";
import Bgimg4 from "../../../assets/Banner/banner-8.png";

const Cards = [
  {
    img: Bgimg1,
    timecounter: (
      <TimeCounter initialTime={23173000} counterStyles="justify-center" />
    ),
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: "4.5",
    produucer: "NestFood",
    disPrice: "$32.85",
    fullPrice: "$33.8",
    // initialTime: "15000000",
  },
  {
    img: Bgimg2,
    timecounter: (
      <TimeCounter initialTime={12345467} counterStyles="justify-center" />
    ),
    title: "Perdue Simply Smart Organics Gluten Free",
    rating: "4.0",
    produucer: "Old El Paso",
    disPrice: "$24.85",
    fullPrice: "$$26.8",
    // initialTime: "2000000",
  },
  {
    img: Bgimg3,
    timecounter: (
      <TimeCounter initialTime={1500600} counterStyles="justify-center" />
    ),
    title: "Signature Wood-Fired Mushroom and Caramelized",
    rating: "3.5",
    produucer: "Progresso",
    disPrice: "$12.86",
    fullPrice: "$15.7",
    // initialTime: "17899879",
  },
  {
    img: Bgimg4,
    timecounter: (
      <TimeCounter initialTime={9340000} counterStyles="justify-center" />
    ),
    title: "Simply Lemonade with Raspberry Juice",
    rating: "4.0",
    produucer: "Yoplait",
    disPrice: "$15.85",
    fullPrice: "$16.9",
    // initialTime: "24324234",
  },
];

const Deals = () => {
  return (
    <section className="px-3">
      <h1 className="text-gray-700 text-[33px] font-bold mb-10 ml-3">Deals of the Day</h1>
      <div className="grid grid-cols-1 sr:grid-cols-2 lg:grid-cols-3 hx:grid-cols-4 gap-4">
        {Cards.map((item, index) => (
          <div key={index} className="relative group mb-32 sr:mb-40 px-1 flex justify-center">
            <div className="w-full">
              <img src={item.img} alt="" className="w-full rounded-2xl" />
            </div>
            <div className="flex flex-col items-center w-[92%] absolute top-[40%] border-black p-3 group-hover:-translate-y-2 ease duration-300">
              <div className="w-[90%]">{item.timecounter}</div>
              <div className=" w-[80%] sr:w-full h-[200px] flex flex-col gap-1 bg-white mt-4 px-7 py-6 rounded-lg shadow-lg">
                <h1 className="text-base text-gray-700 font-bold hover:text-primary cursor-pointer ease duration-300">
                  {item.title}
                </h1>
                <Rating rating={item.rating} />
                <p className="text-gray-400 font-semibold text-sm">
                  By{" "}
                  <span className="text-primary font-bold hover:text-orange-500 ease duration-300">
                    {item.produucer}
                  </span>
                </p>
                <div className="flex justify-between items-center mt-4">
                  <h1 className="text-primary text-lg font-bold truncate">
                    {item.disPrice}{" "}
                    <span className="text-gray-400 text-sm line-through font-semibold mx-4">
                      {item.fullPrice}
                    </span>
                  </h1>

                  <AddtoCartButton
                    buttonClass="flex items-center gap-2 bg-[#3BB77E] z-10 text-primary font-semibold bg-opacity-15 hover:bg-opacity-100 hover:text-white hover:-translate-y-1 rounded-[4px] px-4 py-[6px] ease duration-300"
                    text="Add"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <TimeCounter initialTime={150000} /> */}
    </section>
  );
};

export default Deals;
