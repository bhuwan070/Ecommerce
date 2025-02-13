import React from "react";
import AboutHeroimg from "../../assets/Banner/about-1.png";

const AboutHero = () => {
  return (
    <section>
      <div className="h-[100vh] flex flex-1">
        {/* image section */}
        <div className="pl-32 py-10">
          <img className="h-[100vh] rounded-xl" src={AboutHeroimg} alt="" />
        </div>
        {/* text and slider */}
        <div>
          <h1>Welcome to Nest</h1>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
