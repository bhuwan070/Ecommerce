import React from "react";

const OurServices = () => {
  return (
    <section>
      <div className="relative inline-block ">
        <h1 className="text-3xl font-bold text-center text-gray-700 py-5">
          Welcome to Nest
        </h1>
        <svg
          className="absolute bottom-0 left-0 w-full h-4"
          viewBox="0 0 200 10"
        >
          <path
            d="M0,5 Q25,10 50,5 T100,5 T150,5 T200,5"
            fill="transparent"
            stroke="green"
            strokeWidth="3"
          />
        </svg>
      </div>
    </section>
  );
};

export default OurServices;
