import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import logo from "../../../assets/logo.svg";


const options = ['All Categories', 'Milks and Dairies', 'Fruits and Nuts', 'Vegatables', 'Cereals', 'Meat and Seafood']

const SearchNav = () => {

  const [isOpen, setIsOpen] = useState(false); // Track dropdown open state
  const [selectedOption, SetSelectedOption] = useState("All Categories")

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  const onOptionClicked = (value) => {
    SetSelectedOption(value);
    setIsOpen(false);
  }

  return (
    <>
      <nav className="px-6 py-4">
        <div className="flex justify-between items-center gap-4">
          <div className="max-w-[180px]">
            <img src={logo} alt="" className="min-w-[140px]" />
          </div>
          <div>
            <form
              action="#"
              className="relative min-w-[40vw] flex items-center border-2 border-opacity-50 border-primary rounded gap-3 px-4 py-3"
            >
              <div className="w-[25%] cursor-pointer" onClick={toggleDropdown}>
                <div className="flex items-center justify-around">
                  <span className="text-[15px] font-semibold truncate">
                    {selectedOption}
                  </span>
                  <button
                    className="focus:outline-none"
                    onClick={toggleDropdown}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-3 h-3 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                </div>
                {isOpen && (
                  <div className="min-w-[200px] absolute left-0 z-10 mt-4 bg-white shadow-lg">
                    {options.map((item, index) => (
                      <div
                        onClick={() => onOptionClicked(item)}
                        key={index}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Input */}
              <span className="text-lg text-gray-400">|</span>
              <div className="w-[70%] flex justify-between items-center">
                <input
                  type="text"
                  placeholder="Search for items..."
                  className="border-none focus:outline-none w-[75%]"
                />
                <FaSearch color="gray" />
              </div>
            </form>
          </div>

          {/* Icons */}
          <div className="hidden md:flex gap-4">
            <div className="flex flex-wrap justify-center gap-1">
              <FaRegHeart size={25} />
              <h1 className="text-base text-gray-500 font-semibold">
                Wishlist
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-1">
              <GrCart size={25} />
              <h1 className="text-base text-gray-500 font-semibold">Cart</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-1">
              <FaRegUser size={25} />
              <h1 className="text-base text-gray-500 font-semibold">Account</h1>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SearchNav;
