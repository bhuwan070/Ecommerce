import React from "react";
import Logo from "../../assets/logo.svg";
import { GrLocation } from "react-icons/gr";
import { GrPhone } from "react-icons/gr";
import { GrMailOption } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa6";
import AppStore from "../../assets/app-store.jpg";
import GooglePlay from "../../assets/google-play.jpg";
import PaymentMethod from "../../assets/payment-method.png";

const FooterNavigatioin = () => {
  return (
    <section className="px-5">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 space-x-4 space-y-4 my-5 overflow-x-hidden px-5">
        <div className="">
          {/* logo and text  */}
          <div>
            <img src={Logo} alt="" />
            <p className="py-5 font-semibold text-gray-400">
              Awesome grocery store website template
            </p>
          </div>
          <div>
            <div className="flex gap-4 items-center">
              <div>
                <GrLocation className="text-xl text-primary" />
              </div>
              <p className="">
                <span className="font-bold text-lg">Address:</span>{" "}
                <span className="">5171 W Campbell Ave</span>
              </p>
            </div>

            <p className="text-base">undefined Kent, Utah 53127 US</p>
          </div>
          <div className="flex gap-4 py-3">
            <GrPhone className="text-xl text-primary" />
            <p>
              {" "}
              <span className="font-bold text-lg">Call Us:</span>(+91) -
              540-025-124553
            </p>
          </div>
          <div className="flex gap-4">
            <GrMailOption className="text-xl text-primary" />
            <p>
              <span className="font-bold text-lg">Email:</span>sale@Nest.com
            </p>
          </div>
          <div className="flex gap-4 py-4">
            <FaRegClock className="text-xl text-primary " />
            <p>
              <span className="font-bold text-lg">Hours:</span>
              10:00 - 18:00, Mon - Sat
            </p>
          </div>
        </div>

        <div className="">
          <p className="text-3xl font-bold text-gray-700 py-3">Company</p>
          <div className="mt-2">
            <ul>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-105 transition-all duration-500 ease-in-out ">
                <a href="">About Us</a>
              </li>
            </ul>
            <ul>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-105 transition-all duration-500 ease-in-out py-2">
                <a href="">Delivary Information</a>
              </li>
            </ul>
            <ul>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-105 transition-all duration-500 ease-in-out py-2">
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <ul>
            <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-105 transition-all duration-500 ease-in-out py-2">
              {" "}
              <a href=""> Terms & Conditions</a>
            </li>
          </ul>
          <ul>
            <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-105 transition-all duration-500 ease-in-out py-2">
              <a href="">Contact Us</a>
            </li>
          </ul>
          <ul>
            <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-105 transition-all duration-500 ease-in-out py-2">
              <a href="">Support Center</a>
            </li>
          </ul>
          <ul>
            <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-105 transition-all duration-500 ease-in-out py-2">
              Careers
            </li>
          </ul>
        </div>
        <div className="">
          <div className=" py-3">
            <h1 className="text-3xl font-bold text-gray-700">Account</h1>
          </div>
          <div>
            <ul>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-105 transition-all duration-500 ease-in-out py-2">
                <a href="#">Sign In</a>
              </li>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-95 transition-all duration-500 ease-in-out py-2">
                <a href="#">Viw Cart</a>
              </li>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-95 transition-all duration-500 ease-in-out py-2">
                <a href="#">My Wishlist</a>
              </li>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-95 transition-all duration-500 ease-in-out py-2">
                <a href="#">Track My Order</a>
              </li>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-95 transition-all duration-500 ease-in-out py-2">
                <a href="#">Help Ticket</a>
              </li>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-95 transition-all duration-500 ease-in-out py-2">
                <a href="#">Shipping Details</a>
              </li>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-95 transition-all duration-500 ease-in-out py-2">
                <a href="#">Compare products</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <div className="py-3">
            <h1 className="text-3xl font-bold text-gray-700">Corporate</h1>
          </div>
          <div>
            <ul>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-105 transition-all duration-500 ease-in-out py-2">
                <a href="#">Become a Vendor</a>
              </li>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-95 transition-all duration-500 ease-in-out py-2">
                <a href="#">Affiliate Program</a>
              </li>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-95 transition-all duration-500 ease-in-out py-2">
                <a href="#">Farm Business</a>
              </li>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-95 transition-all duration-500 ease-in-out py-2">
                <a href="#">Farm Careers</a>
              </li>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-95 transition-all duration-500 ease-in-out py-2">
                <a href="#">Our Suppliers</a>
              </li>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-95 transition-all duration-500 ease-in-out py-2">
                <a href="#">Accessibility</a>
              </li>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-95 transition-all duration-500 ease-in-out py-2">
                <a href="#">Promotions</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="py-3">
            <h1 className="text-3xl font-bold text-gray-700">Popular</h1>
          </div>
          <div>
            <ul>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-105 transition-all duration-500 ease-in-out py-2">
                <a href="#">Milk & Flavoured Milk</a>
              </li>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-95 transition-all duration-500 ease-in-out py-2">
                <a href="#">Butter and margarine</a>
              </li>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-95 transition-all duration-500 ease-in-out py-2">
                <a href="#">Eggs Substitutes</a>
              </li>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-95 transition-all duration-500 ease-in-out py-2">
                <a href="#">Marmalades</a>
              </li>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-95 transition-all duration-500 ease-in-out py-2">
                <a href="#">Sour Cream and Dips</a>
              </li>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-95 transition-all duration-500 ease-in-out py-2">
                <a href="#">Tea & Kpmbucha</a>
              </li>
              <li className="text-base font-semibold hover:text-primary text-gray-700 hover:scale-95 transition-all duration-500 ease-in-out py-2">
                <a href="#">Cheese</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 sm:mt-0 pl-10 sm:pl-0">
          <div>
            <h1 className="text-3xl font-semibold text-gray-500 pb-3">
              Install App
            </h1>
            <p className="text-sm font-semibold text-gray-500 pb-5">
              From App Store or Google Play
            </p>
            <div className=" flex flex-col sm:flex-row">
              <div className="py-2">
                <img
                  src={AppStore}
                  alt=""
                  className="h-[50px] hover:scale-105 transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="py-2">
                <img
                  src={GooglePlay}
                  alt=""
                  className="h-[50px] hover:scale-105 transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
          <div className="pb-10">
            <p className="text-base font-semibold text-gray-500 py-2">
              {" "}
              Secore Payment Gateways
            </p>
            <img src={PaymentMethod} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterNavigatioin;
