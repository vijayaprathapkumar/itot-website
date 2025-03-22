import breakpoints from "@/themes/breakpoints";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";


export const MainBannerBox = styled(Box)`
  padding: 40px 5%;
  background: #f6fcff;
  ${breakpoints.sm} {
    padding: 0 2%;
  }
  ${breakpoints.md} {
    padding: 0 3%;
  }
  ${breakpoints.lg} {
    padding: 100px 4%;
  }
  ${breakpoints.xl} {
    padding: 80px 5%;
  }
`;
export const DotIcon = styled(Image)`
  margin-top: 30px;
`;

export const MainHeadTypo = styled(Typography)`
  margin-top: 15px;
  font-weight: 700;
  font-size: 45px;
  color: #255778;
  opacity: 0;
  transform: translatex(50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
  ${breakpoints.xs} {
    font-size: 20px;
    margin-top: 50px;
  }
  ${breakpoints.md} {
    font-size: 25px;
  }
  ${breakpoints.lg} {
    font-size: 45px;
    margin-top: 10px;
  }
  ${breakpoints.xl} {
    font-size: 45px;
    margin-top: 15px;
  }
`;
export const DescriptionTypo = styled(Typography)`
  font-size: 18px;
  color: grey;
  line-height: 35px;
  margin-top: 10px;
  width: 700px;
  opacity: 0;
  transform: translatex(-50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
  ${breakpoints.xs} {
    font-size: 12px;
    width: 320px;
  }
  ${breakpoints.md} {
    font-size: 15px;
  }
  ${breakpoints.lg} {
    font-size: 18px;
    width: 600px;
  }
  ${breakpoints.xl} {
    font-size: 18px;
    width: 650px;
  }
`;
export const ButtonExplore = styled(Button)`
  background: #c6d62a;
  color: #000;
  padding: 20px 30px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 50px;
  margin-top: 50px;
  opacity: 0;
  transform: translatey(-50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
  ${breakpoints.xs} {
    font-size: 12px;
    padding: 10px 15px;
  }
  ${breakpoints.xl} {
    font-size: 15px;
    padding: 20px 30px;
  }
`;
export const StackBanner = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${breakpoints.xs} {
    flex-direction: column;
    padding-top: 10px;
  }
  ${breakpoints.md} {
    flex-direction: row;
  }
  ${breakpoints.xl} {
    padding-top: 50px;
  }
`;
export const StackButton = styled(Box)`
  align-items: center;
`;
export const ImageCircle = styled(Image)`
  object-fit: contain;
  ${breakpoints.xs} {
    height: 300px;
    width: 370px;
  }
  ${breakpoints.sm} {
    height: 500px;
    width: 750px;
  }
  ${breakpoints.lg} {
    height: 600px;
    width: 520px;
  }
  ${breakpoints.xl} {
    height: 700px;
    width: 650px;
    margin-left: 100px;
  }
`;

export const MainSpinBox = styled(Box)`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`;

export const DashboardBox = styled(Box)`
  position: absolute;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after,
  &::before {
    position: absolute;
    content: "";
    width: 250%;
    height: 250%;
    border-radius: 50%;
    left: -75%;
    top: -75%;
    rotate: 200deg;
  }

  &::after {
    border-bottom: 5px solid red;
    z-index: 1;
  }
  &::before {
    border-top: 5px solid red;
    z-index: 999;
  }

  ${breakpoints.xs} {
    right: 170px;
    top: 50px;
    &::after,
    &::before {
      width: 250%;
      height: 150%;
      left: -50px;
      top: 20px;
    }
  }
  ${breakpoints.md} {
    top: 60px;
    right: 210px;
    &::after,
    &::before {
      width: 500%;
      height: 200%;
      left: -45%;
      top: 80%;
    }
  }
  ${breakpoints.lg} {
    top: 60px;
    right: 210px;
    &::after,
    &::before {
      width: 500%;
      height: 200%;
      left: -45%;
      top: 80%;
    }
  }
  ${breakpoints.xl} {
    top: 60px;
    right: 210px;
    &::after,
    &::before {
      width: 500%;
      height: 200%;
      left: -45%;
      top: 80%;
    }
  }
`;
export const RotateImage = styled(Image)`
  height: 500px;
  width: 500px;
  position: relative;
  z-index: 2;
  margin-top: 280px;
  margin-left: 270px;
  ${breakpoints.xs} {
    height: 200px;
    width: 200px;
    margin-top: 150px;
    margin-left: 170px;
  }
  ${breakpoints.md} {
    height: 300px;
    width: 300px;
    margin-top: 280px;
    margin-left: 270px;
  }
  ${breakpoints.xl} {
    height: 500px;
    width: 500px;
  }
`;

export const GenBox = styled(Box)`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translatex(-50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }

  &::after,
  &::before {
    position: absolute;
    content: "";
    width: 250%;
    height: 250%;
    border-radius: 50%;
    left: -75%;
    top: -75%;
  }

  &::after {
    border-right: 5px solid grey;
    z-index: 1;
  }

  ${breakpoints.xs} {
    right: 190px;
    top: 50px;
    &::after,
    &::before {
      width: 150%;
      height: 150%;
      left: 60px;
      top: 40px;
    }
  }
  ${breakpoints.md} {
    top: 0px;
    right: 120px;
    &::after,
    &::before {
      width: 250%;
      height: 250%;
      left: 35%;
      top: 55%;
    }
  }
  ${breakpoints.lg} {
    top: 0px;
    right: 70px;
    &::after,
    &::before {
      width: 350%;
      height: 350%;
      left: -30%;
      top: 0%;
    }
  }
  ${breakpoints.xl} {
    top: 0px;
    right: 70px;
    &::after,
    &::before {
      width: 350%;
      height: 350%;
      left: -30%;
      top: 0%;
    }
  }
  ${breakpoints["2xl"]} {
    top: 0px;
    right: 70px;
    &::after,
    &::before {
      width: 350%;
      height: 350%;
      left: 0%;
      top: 0%;
    }
  }
`;

export const SubDetailsBox = styled(Box)`
  background: #255778;
  position: relative;
  left: 390px;
  top: -30px;
  padding-left: 30px;
  width: 250px;
  height: 200px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 50px 0px 0px 50px;
  opacity: 0;
  transform: translatey(50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -60px;
    transform: translateY(-50%);
    border-style: solid;
    border-width: 100px 0 100px 60px;
    border-color: transparent transparent transparent #255778;
  }
  ${breakpoints.xs} {
    left: 65px;
    width: 170px;
    height: 140px;
    top: -10px;
    &::after {
      right: -40px;
      border-width: 70px 0 70px 40px;
    }
  }
  ${breakpoints.md} {
    left: 200px;
    &::after {
      right: -39.5px;
    }
  }
  ${breakpoints.lg} {
    left: 360px;
    width: 200px;
    height: 180px;
    top: -20px;
    &::after {
      right: -54px;
      border-width: 91px 0 91px 55px;
    }
  }
  ${breakpoints.xl} {
    left: 320px;
    width: 250px;
    height: 200px;
    top: -30px;
    &::after {
      right: -59px;
      border-width: 100px 0 100px 60px;
    }
  }
  ${breakpoints["2xl"]} {
    left: 390px;
  }
`;

export const SubDetailsTypo = styled(Typography)`
  color: #fff;
`;

export const LinkingBorder = styled(Box)`
  position: relative;
  left: 280px;
  top: 75px;
  border: 2px solid grey;
  width: 170px;
  opacity: 0;
  transform: translatex(50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
  ${breakpoints.xs} {
    left: 20px;
    width: 50px;
    top: 60px;
  }
  ${breakpoints.md} {
    left: 165px;
    top: 70px;
  }
  ${breakpoints.lg} {
    left: 252px;
    top: 70px;
    width: 110px;
  }
  ${breakpoints.xl} {
    width: 100px;
    left: 250px;
    top: 75px;
  }
  ${breakpoints["2xl"]} {
    left: 280px;
    width: 130px;
  }
`;
export const TypoDesc = styled(Typography)`
  font-size: 10px;
  color: #fff;
  ${breakpoints.xs} {
    font-size: 9px;
  }
  ${breakpoints.lg} {
    font-size: 12px;
  }
`;
export const SearchIcon = styled(SearchOutlinedIcon)`
  color: #000;
  font-size: 30px;
`;
export const SearchBox = styled(Box)`
  background: #fff;
  padding: 15px;
  border-radius: 50px;
  ${breakpoints.xs} {
    padding: 5px;
  }
  ${breakpoints.xl} {
    padding: 15px;
  }
`;
export const ImageDotBox = styled(Box)`
  position: absolute;
  left: 5%;
  animation: sway2 3s linear infinite alternate;
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;
  margin-top: -90px;
  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  @keyframes sway2 {
    0% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  ${breakpoints.xs} {
    margin-top: 0px;
  }
  ${breakpoints.md} {
    margin-top: -100px;
  }
  ${breakpoints.lg} {
    margin-top: -40px;
  }
  ${breakpoints.xl} {
    margin-top: -100px;
  }
`;
export const ImageDot = styled(Image)`
  ${breakpoints.xs} {
    height: 70px;
    width: 30px;
  }
  ${breakpoints.md} {
    height: 100px;
    width: 40px;
  }
  ${breakpoints.xl} {
    height: 120px;
    width: 50px;
    margin-top: 20px;
  }
`;
