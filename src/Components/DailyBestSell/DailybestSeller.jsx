import DailyCardSlider from "./DailyCardSlider";
import { FaLongArrowAltRight } from "react-icons/fa";
import Banner1 from "../../assets/Banner/banner-4.png";
import { useState } from "react";
const DailybestSeller = () => {
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  return (
    <section className="pb-5  min-h-[90vh] w-full overflow-hidden">
      <div className="flex justify-between px-2 sm:px-8 mb-6 sm:mb-8">
        <h1 className=" text-2xl sm:text-4xl font-semibold text-gray-500 py-3 sm:py-4">
          Daily Best Sells
        </h1>
        <div>
          <ul className="flex justify-around pt-4 px-2 sm:pt-6">
            {["Featured", "Popular", "New Added"].map((category) => (
              <li key={category} className="px-2">
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`text-base sm:text-lg font-semibold 
                    ${
                      selectedCategory === category
                        ? "text-primary scale-105"
                        : "text-gray-500"
                    }
                     hover:text-primary hover:scale-105 transition-all duration-500 ease-in-out`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row gap-8 px-2 sm:p-4">
        {/* static cart  */}
        <div className="h-[100%] w-full mx-1 sm:mx-4">
          <div
            className=" relative h-[600px] sm:h-[550px] sm:w-96 bg-center bg-cover rounded-3xl mx-4"
            style={{ backgroundImage: `url(${Banner1})` }}
          >
            <div className=" absolute pl-6 sm:pl-8 md:pl-10 text-4xl sm:text-2xl md:text-4xl font-bold  text-gray-700 top-10">
              <h2>
                Bring nature <br /> into your <br /> home
              </h2>
            </div>
            <div className="absolute pl-6 sm:pl-8 md:pl-10 bottom-20 sm:bottom-28 md:bottom-44 object-center">
              <a
                className="flex  bg-primary py-2 px-4 rounded-md text-sm sm:text-base text-white font-semibold hover:bg-yellow-500 hover:scale-x-110 transition-all duration-500 ease-in-out"
                href="#"
              >
                Shop Now
                <FaLongArrowAltRight className="mt-1 ml-2" />
              </a>
            </div>
          </div>
        </div>
        {/* slider  */}
        <div className="w-full h-full">
          <DailyCardSlider selectedCategory={selectedCategory} />
        </div>
      </div>
    </section>
  );
};

export default DailybestSeller;
