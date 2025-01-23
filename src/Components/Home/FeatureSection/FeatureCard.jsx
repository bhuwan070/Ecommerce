import React from "react";
import { GrFormNextLink } from "react-icons/gr";

const FeatureCard = (props) => {
  const { bgImg, text1, text2, text3 } = props;

  return (
    <div
      className="flex items-center pl-20 md:pl-6 md:pr-3 lg:pl-12 rounded-xl bg-no-repeat bg-center bg-cover w-full h-[275px]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex flex-col justify-between h-[60%]">
        <h1 className="font-bold text-gray-700 text-3xl md:text-xl lg:text-2xl truncate">
          {text1}
          <br />
          {text2}
          <br />
          {text3}
        </h1>
        <button className="w-[150px] text-sm flex justify-center items-center gap-2 bg-primary px-3 py-2 rounded-md text-white font-semibold hover:w-[155px] hover:bg-orange-500 ease duration-500 ">
          Shop Now{" "}
          <span>
            <GrFormNextLink />
          </span>
        </button>

      </div>
    </div>
  );
};

export default FeatureCard;
