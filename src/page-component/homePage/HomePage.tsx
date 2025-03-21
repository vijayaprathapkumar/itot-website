import React from "react";
import BannerTemplate from "../banner-template/BannerTemplate";
import Process from "../process/Process";
import WhyChooseUs from "../whychooseus/WhyChooseUs";
import Digital from "../digital/Digital";
import BannerItot from "../banner-itot/BannerItot";


const HomePage = () => {
  return (
    <>
      <BannerItot />
      <WhyChooseUs />
      <BannerTemplate />
      <Digital />
      {/* <Banner /> */}
      <Process />

    </>
  );
};

export default HomePage;
