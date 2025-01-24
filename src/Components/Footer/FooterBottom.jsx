import React from "react";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
const FooterBottom = () => {
  return (
    <section className="mb-8 w-auto overflow-x-hidden">
      <div className="flex justify-between items-center">
        <div className="px-4">
          <p className="text-gray-600">
            ©2024,<span className="text-primary">Nest-</span>HTML Ecommerce
            Template
          </p>
          <p className="text-gray-600">All rights reserved</p>
        </div>
        <div className="">
          <div className=" hidden md:flex justify-around pl-20">
            <div className="px-20">
              <div className="flex px-5">
                <LiaPhoneVolumeSolid className=" text-5xl pr-4" />
                <h1 className="text-3xl text-primary">1900-6666</h1>
              </div>
              <p className="text-sm text-center">Working 8:00-22:00</p>
            </div>
            <div>
              <div className="flex mr-4 px-5">
                <LiaPhoneVolumeSolid className=" text-5xl pr-4" />
                <h1 className="text-3xl text-primary">1900-8888</h1>
              </div>
              <p className="text-sm text-center">24/7 support Center</p>
            </div>
          </div>
        </div>
        <div className=" hidden md:block px-10">
          <div className=" flex">
            <h1 className="mr-4">Follow Us:</h1>
            <div className="text-3xl rounded-full text-primary px-1 hover:scale-110 transition-all duration-500 ease-in-out">
              <AiFillFacebook />
            </div>
            <div className="text-3xl rounded-full text-primary px-1 hover:scale-110 transition-all duration-500 ease-in-out">
              <AiFillInstagram />
            </div>
            <div className="text-3xl rounded-full text-primary px-1 hover:scale-110 transition-all duration-500 ease-in-out">
              <AiFillTwitterCircle />
            </div>
            <div className="text-3xl rounded-full text-primary px-1 hover:scale-110 transition-all duration-500 ease-in-out">
              <FaPinterest />
            </div>
            <div className="text-3xl rounded-full text-primary px-1 hover:scale-110 transition-all duration-500 ease-in-out">
              <IoLogoYoutube />
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Up to 15% discount on your first subscribe
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterBottom;
