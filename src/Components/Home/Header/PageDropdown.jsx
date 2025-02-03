import { useState, useRef } from "react";
import DropBtn from "../DropBtn";// Assuming you have a DropBtn component

const DropdownNavItem = ({ label, items, onClick }) => {
  const [isPageOpen, setIsPageOpen] = useState(false);
  const pagesDropdownRef = useRef();
  const [hoverTimeout, setHoverTimeout] = useState(null);


  const handleMouseEnter = () => {
      // Clear any pending timeout to close the dropdown
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        setHoverTimeout(null);
      }
      setIsPageOpen(true);
    };
  
    const handleMouseLeave = () => {
      // Set a timeout to close the dropdown after a small delay
      const timeout = setTimeout(() => {
        setIsPageOpen(false);
      }, 200); // Delay in milliseconds
      setHoverTimeout(timeout);
    };

  return (
    <li
      ref={pagesDropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer hover:text-primary ease duration-200"
    >
      <div className="flex gap-1 items-center cursor-pointer">
        <span>{label}</span>
        <DropBtn
          styles={`w-3 h-3 transition-transform ${
            isPageOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isPageOpen && (
        <div className="min-w-[200px] px-2 py-3 absolute left-[560px] top-10 z-[1000] mt-4 bg-white rounded-md border-[1px] border-opacity-25 border-black shadow-lg">
          {items.map((item, index) => (
            <div
              key={index}
              className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-primary hover:bg-opacity-70"
              onClick={() => onClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </li>
  );
};

export default DropdownNavItem;
