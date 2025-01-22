import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa6";
import { CiGrid41 } from "react-icons/ci";
import Headphone from "../../assets/icons/icon-headphone.svg";
import img1 from "../../assets/category/category-1.svg";
import img2 from "../../assets/category/category-2.svg";
import img3 from "../../assets/category/category-3.svg";
import img4 from "../../assets/category/category-4.svg";
import img5 from "../../assets/category/category-5.svg";

const options = [
  {
    icon: img1,
    title: "Milks and Dairies",
  },
  {
    icon: img2,
    title: "Fruits and Nuts",
  },
  {
    icon: img3,
    title: "Vegetables",
  },
  {
    icon: img4,
    title: "Cereals",
  },
  {
    icon: img5,
    title: "Meat and Seafood",
  },
];

const Navbar = ({ activeLink: initialActiveLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(initialActiveLink || "home");

  useEffect(() => {
    // Update the state if the `initialActiveLink` changes dynamically
    if (initialActiveLink) {
      setActiveLink(initialActiveLink);
    }
  }, [initialActiveLink]);

  const handleLinkClick = (link) => {
    if (activeLink !== link) {
      setActiveLink(link);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  return (
    <nav className="border-y border-gray-400 border-opacity-30 my-4 py-4 px-4">
      <div className="flex justify-between items-center">
        <div
          className="relative flex items-center gap-1 bg-primary px-4 py-3 text-white font-semibold rounded-md hover:bg-[#209961] ease duration-500 cursor-pointer"
          onClick={toggleDropdown}
        >
          <CiGrid41 size={25} />
          <span className="truncate">Browse All Categories</span>
          <button className="focus:outline-none" onClick={toggleDropdown}>
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

          {isOpen && (
            <div className="grid gap-5 px-6 py-10 bg-white border border-primary border-opacity-50 rounded-lg grid-cols-2 absolute top-16 left-0 min-w-[480px] z-[1000]">
              {options.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 shadow-sm border border-primary border-opacity-10 px-3 py-2 rounded-md hover:border-opacity-30 ease duration-200 group"
                >
                  <img className="w-7 h-7" src={item.icon} alt="" />
                  <span className="text-black text-[15px] font-semibold truncate group-hover:text-primary ease duration-200">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-5 min-w-[48vw] justify-between truncate font-bold cursor-pointer">
            <li className="hover:text-orange-600 ease duration-200">
              <Link to="/deals" onClick={() => handleLinkClick("deals")}>
                <span
                  className={`${activeLink === "deals" ? "text-orange-600" : ""} flex items-center gap-1 `}
                >
                  <FaFire className="" />
                  <span className="">Deals</span>
                </span>
              </Link>
            </li>
            <li className="hover:text-primary ease duration-200">
              <Link to="/" onClick={() => handleLinkClick("home")}>
                <span
                  className={`${activeLink === "home" ? "text-primary" : ""} `}
                >
                  Home
                </span>
              </Link>
            </li>
            <li className="hover:text-primary ease duration-200">
              <Link to="/about" onClick={() => handleLinkClick("about")}>
                <span
                  className={`${activeLink === "about" ? "text-primary" : ""} `}
                >
                  About
                </span>
              </Link>
            </li>
            <li className="hover:text-primary ease duration-200">
              <Link to="/shop" onClick={() => handleLinkClick("shop")}>
                <span
                  className={`${activeLink === "shop" ? "text-primary" : ""} `}
                >
                  Shop
                </span>
              </Link>
            </li>
            <li className="hover:text-primary ease duration-200">
              <Link to="/" onClick={() => handleLinkClick("mega menu")}>
                <span
                  className={`${
                    activeLink === "mega menu" ? "text-primary" : ""
                  } `}
                >
                  Mega Menu
                </span>
              </Link>
            </li>
            <li className="hover:text-primary ease duration-200">
              <Link to="/blog" onClick={() => handleLinkClick("blog")}>
                <span
                  className={`${activeLink === "blog" ? "text-primary" : ""} `}
                >
                  Blog
                </span>
              </Link>
            </li>
            <li className="hover:text-primary ease duration-200">
              <Link to="/pages" onClick={() => handleLinkClick("pages")}>
                <span
                  className={`${activeLink === "pages" ? "text-primary" : ""} `}
                >
                  Pages
                </span>
              </Link>
            </li>
            <li className="hover:text-primary ease duration-200">
              <Link to="/contact" onClick={() => handleLinkClick("contact")}>
                <span
                  className={`${
                    activeLink === "contact" ? "text-primary" : ""
                  } `}
                >
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <img src={Headphone} alt="" />
          <div>
            <h1 className="text-primary text-3xl font-bold">1900-888</h1>
            <p className="text-[13px] text-gray-400">24/7 Support Center</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
