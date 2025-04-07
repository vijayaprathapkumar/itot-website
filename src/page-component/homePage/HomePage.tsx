import React from "react";
import Digital from "../digital/Digital";
import BannerItot from "../banner-itot/BannerItot";
import AboutUs from "../aboutUs/AboutUs";

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
