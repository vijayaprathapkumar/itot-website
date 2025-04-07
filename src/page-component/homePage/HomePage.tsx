import React from "react";
import Process from "../process/Process";
import Digital from "../digital/Digital";
import BannerItot from "../banner-itot/BannerItot";
import Itot from "../it-ot/Itot";
import WhoWeAre from "../whoweare/WhoWeAre";
import AboutUs from "../aboutUs/AboutUs";
import WhyChooseUs from "../whychooseus/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <BannerItot />
      {/* <Itot /> */}
      <Digital />
      <AboutUs />
      {/* <Process /> */}
    </>
  );
};

export default HomePage;
