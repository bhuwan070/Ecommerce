import React from "react";
import Category1 from "../../assets/Blog/category-1.svg";
import { FaSearch } from "react-icons/fa";
import BlogComponents from "./BlogComponents";

const MainBlog = () => {
  return (
    <section className="my-10 grid grid-cols-4">
      <div className="px-4 col-span-3">
        <div className="flex px-2 gap-4">
          <img className="w-10" src={Category1} alt="" />
          <h1 className="text-[40px] text-gray-700 font-bold tracking-wide">
            Recips Articles
          </h1>
        </div>
        <div>
          <BlogComponents />
        </div>
      </div>
      <div className="col-span-1 px-4">
        <div className="w-full p-4 flex justify-between items-center border-2 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Search for items..."
            className="border-none focus:outline-none w-[75%]"
          />
          <FaSearch className="hover:rotate-90 ease-out duration-500" size={20}/>
        </div>
      </div>
    </section>
  );
};

export default MainBlog;
