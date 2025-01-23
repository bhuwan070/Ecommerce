import React from "react";
import Logo from "../../assets/logo.svg";
import { GrLocation } from "react-icons/gr";
import { GrPhone } from "react-icons/gr";
import { GrMailOption } from "react-icons/gr";
import { GrFormClock } from "react-icons/gr";

const FooterNavigatioin = () => {
  return (
    <section className="px-10">
      <div className="grid grid-cols-5 my-5 border-2 border-gray-600 px-10">
        <div className="">
          {/* logo and text  */}
          <div>
            <img src={Logo} alt="" />
            <p className="py-5 font-semibold text-gray-400">
              Awesome grocery store website template
            </p>
          </div>
          <div>
            <div className="flex">
              <GrLocation className="text-xl text-primary mr-4 " />
              <p className="text-center pb-5">
                {" "}
                <span className="font-bold text-lg">Address:</span> 5171 W
                Campbell Ave
              </p>
            </div>

            <p className="text-base">undefined Kent, Utah 53127 US</p>
          </div>
          <div className="flex py-4">
            <GrPhone className="text-xl text-primary mr-4" />
            <p>
              {" "}
              <span className="font-bold text-lg">Call Us:</span>(+91) -
              540-025-124553
            </p>
          </div>
          <div className="flex">
            <GrMailOption className="text-xl text-primary mr-4" />
            <p>
              <span className="font-bold text-lg">Email:</span>sale@Nest.com
            </p>
          </div>
          <div className="flex py-4">
            <GrFormClock className="text-xl text-primary mr-4" />
            <p>
              <span className="font-bold text-lg">Hours:</span>
              10:00 - 18:00, Mon - Sat
            </p>
          </div>
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
    </section>
  );
};

export default FooterNavigatioin;
