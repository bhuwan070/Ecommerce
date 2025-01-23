import React from "react";
import Newsletter from "../../assets/Banner/banner-9.png";

const FooterNewsletter = () => {
  return (
    <section>
      <div className="container flex min-h-[60vh] p-10 border-2 border-gray-500 ">
        {/* content section  */}
        <div className=" flex-1 description border-2 border-gray-500 ">
          <div>
            <h1>Stay home & get your daily needs from our shop</h1>
            <p>
              Start You'r Daily Shopping with <span>Nest Mart</span>{" "}
            </p>
          </div>
          <form action="form-subcriber ">
            <input type="email" placeholder="Your email address" />
            <button className="btn" type="submit">
              Subscribe
            </button>
          </form>
        </div>
        {/* imagesection */}
        <div className=" flex-1 imageSection border-2 border-gray-500 ">
          <img src={Newsletter} alt="newsletter" />
        </div>
      </div>
    </section>
  );
};

export default FooterNewsletter;
