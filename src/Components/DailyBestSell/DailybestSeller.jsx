import DailyCardSlider from "./DailyCardSlider";
import { FaLongArrowAltRight } from "react-icons/fa";
import Banner1 from "../../assets/Banner/banner-4.png";
const DailybestSeller = () => {
  return (
    <section className="pb-5 border-2 border-gray-500 min-h-[90vh] w-full overflow-hidden">
      <div className="flex justify-between px-2 mb-8">
        <h1 className=" text-3xl font-semibold text-gray-500 py-4">
          Daily Best Sells
        </h1>
        <div>
          <ul className="flex justify-around pt-6">
            <li className="px-2">
              <button className="text-lg font-semibold text-gray-500 hover:text-primary hover:scale-105 transition-all duration-500 ease-in-out">
                Featured
              </button>
            </li>
            <li className="px-2">
              <button className="text-lg font-semibold text-gray-500 hover:text-primary hover:scale-105 transition-all duration-500 ease-in-out">
                Popular
              </button>
            </li>
            <li className="px-2">
              <button className="text-lg font-semibold text-gray-500 hover:text-primary hover:scale-105 transition-all duration-500 ease-in-out">
                New Added
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-8 p-4">
        {/* static cart  */}
        <div className="h-[100%] w-full mx-4">
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
          <DailyCardSlider />
        </div>
      </div>
    </section>
  );
};

export default DailybestSeller;
