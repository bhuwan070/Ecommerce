import React from "react";
import Banner from "../assets/Blog/header-bg.png";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineNavigateNext } from "react-icons/md";

const PageContainer = (props) => {
  const { HeadingText } = props;
  return (
    <section className="w-full h-[280px] p-4">
      <div
        className="w-full h-full bg-no-repeat bg-center bg-cover rounded-3xl"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="h-full flex ml-20 tracking-wide items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4 text-gray-700">
              {HeadingText}
            </h1>
            <div className="flex items-center gap-3 font-bold">
              <p className="flex items-center gap-1 text-primary">
                {" "}
                <BiHomeAlt />
                Home
              </p>
              <MdOutlineNavigateNext size={15} />
              <p className="text-gray-500">{HeadingText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageContainer;
