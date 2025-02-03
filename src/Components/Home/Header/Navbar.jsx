import React, { useState, useEffect, useRef } from "react";
import NavItem from "./NavItem";
import DropdownNavItem from "./PageDropdown";
import { FaFire } from "react-icons/fa6";
import { CiGrid41 } from "react-icons/ci";
import Headphone from "../../../assets/icons/icon-headphone.svg";
import img2 from "../../../assets/category/category-2.svg";
import img3 from "../../../assets/category/category-3.svg";
import img4 from "../../../assets/category/category-4.svg";
import img5 from "../../../assets/category/category-5.svg";
import img1 from "../../../assets/category/category-1.svg";
import DropBtn from "../DropBtn";

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

const pageList = ["About us", "Contact", "Shop", "Blog", "Login", "Register"];

const Navbar = ({ activeLink: initialActiveLink }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(initialActiveLink || "home");

  const categoryDropdownRef = useRef(null);

  const toggleCategoryDropdown = (event) => {
    event.stopPropagation();
    setIsCategoryOpen((prev) => !prev);
    setIsPageOpen(false);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(event.target)
      ) {
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (initialActiveLink) {
      setActiveLink(initialActiveLink);
    }
  }, [initialActiveLink]);

  const handleLinkClick = (link) => {
    if (activeLink !== link) {
      setActiveLink(link);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-y border-gray-400 border-opacity-30 my-4 py-3 px-4">
      <div className="flex justify-between items-center">
        {/* First Dropdown */}
        <div
          ref={categoryDropdownRef}
          className="relative flex items-center gap-1 bg-primary px-4 py-3 text-white font-semibold rounded-md hover:bg-[#209961] ease duration-500 cursor-pointer"
          onClick={toggleCategoryDropdown}
        >
          <CiGrid41 size={25} />
          <span className="truncate">Browse All Categories</span>
          <DropBtn
            styles={`w-3 h-3 transition-transform ${
              isCategoryOpen ? "rotate-180" : ""
            }`}
          />
          {isCategoryOpen && (
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

        {/* Navigation Links */}
        <div className="hidden lg:block relative">
          <ul className="flex gap-5 min-w-[48vw] justify-between truncate font-bold cursor-pointer">
            <NavItem
              to="/deals"
              label="Deals"
              icon={FaFire}
              activeLink={activeLink}
              onClick={handleLinkClick}
            />
            <NavItem
              to="/"
              label="Home"
              activeLink={activeLink}
              onClick={handleLinkClick}
            />
            <NavItem
              to="/about"
              label="About"
              activeLink={activeLink}
              onClick={handleLinkClick}
            />
            <NavItem
              to="/shop"
              label="Shop"
              activeLink={activeLink}
              onClick={handleLinkClick}
            />
            <NavItem
              to="/"
              label="Mega Menu"
              activeLink={activeLink}
              onClick={handleLinkClick}
            />
            <NavItem
              to="/blog"
              label="Blog"
              activeLink={activeLink}
              onClick={handleLinkClick}
            />

            <DropdownNavItem
              label="Pages"
              items={pageList}
              activeLink={activeLink}
              onClick={handleLinkClick}
            />

            <NavItem to="/contact" label="Contact" activeLink={activeLink} onClick={handleLinkClick} />
          </ul>
        </div>

        {/* Support Section */}
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
