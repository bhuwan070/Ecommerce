import React from "react";
import { useState, useEffect } from "react";
import loadinggif from "../assets/loading.gif";

const LoadingComp = () => {
  return (
    <section>
      <div className="h-[100vh] w-[100vw] bg-white flex justify-center items-center">
        <div className="w-40 h-40">
          <img src={loadinggif} alt="" />
        </div>
      </div>
    </section>
  );
};

export default LoadingComp;
