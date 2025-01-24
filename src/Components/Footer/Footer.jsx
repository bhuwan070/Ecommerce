import React from "react";
import FooterNewsletter from "./FooterNewsletter";
import FooterFeature from "./FooterFeature";
import FooterNavigation from "./FooterNavigatioin";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <div>
      <FooterNewsletter />
      <FooterFeature />
      <FooterNavigation />
      <FooterBottom />
    </div>
  );
};

export default Footer;
