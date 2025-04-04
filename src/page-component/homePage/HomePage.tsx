import React from "react";
import Process from "../process/Process";
import WhyChooseUs from "../whychooseus/WhyChooseUs";
import Digital from "../digital/Digital";
import BannerItot from "../banner-itot/BannerItot";
import Itot from "../it-ot/Itot";

const HomePage = () => {
  return (
    <>
      <BannerItot />
      <Itot />
      <Digital />
      {/* <Banner /> */}
      <Process />
    </>
  );
};

export default HomePage;
