import React from "react";
import TimeCounter from "./Deals/TimeCounter";
import Rating from "./PopularProduct/Rating";
import { GrFormNextLink } from "react-icons/gr";
import popup from "../../assets/popup-1.png"
import { MdClose } from "react-icons/md";


const PopUp = ({onClick}) => {
  return (
    <section className="bg-white border-2 border-opacity-40 border-primary w-[75vw] lg:w-[57vw] px-14 py-10 rounded-3xl">
      <div
        className=" relative bg-contain bg-bottom sm:bg-right bg-no-repeat flex flex-col gap-2"
        style={{ backgroundImage: `url(${popup})` }}
      >
        <MdClose size={25} color="gray" className="absolute top-[-8px] right-[-20px] cursor-pointer" onClick={onClick}/>

        <h2 className="text-orange-400 text-lg font-semibold">
          Deal of the Day
        </h2>
        <h1 className="text-gray-700 text-3xl sm:text-4xl xl:text-5xl w-[90%] sm:w-[70%] lg:w-[65%] xl:w-[60%] font-bold">
          Organic fruit for your family's health
        </h1>

        <div className="flex items-center gap-4 my-4">
          <h1 className="text-primary text-5xl sm:text-6xl font-[750] mt-2 truncate">
            $38{" "}
          </h1>
          <span className="flex flex-col">
            <h1 className="text-orange-400  text-[12px] sm:text-sm font-semibold">26% off</h1>
            <p className="text-gray-400 text-2xl sm:text-3xl line-through font-[650]">
              $52
            </p>
          </span>
        </div>

        <h1 className="text-gray-400 text-semibold">Hurry Up! Offer End In:</h1>
        <div className="my-3">
          <TimeCounter
            initialTime={"15000000"}
            timeClass="border-2 border-primary"
          />
        </div>

        <Rating rating={"4.5"} />

        <button className="w-[140px] text-sm flex justify-center items-center gap-2 bg-primary px-3 py-3 rounded-sm text-white font-semibold hover:w-[155px] hover:bg-orange-500 ease duration-500 my-3">
          Shop Now{" "}
          <span>
            <GrFormNextLink />
          </span>
        </button>
      </div>
    </section>
  );
};

export default PopUp;
