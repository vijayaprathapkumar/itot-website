import breakpoints from "@/themes/breakpoints";
import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";

export const Container = styled(Box)`
  padding: 0px 5%;
  margin-top: 90px;
`;

export const HeadingStyled = styled(Box)`
  display: flex;
  justify-content: center;
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ImagesStyled = styled(Image)`
  margin-top: 9px;
`;
export const HeadingTypo = styled(Typography)`
  color: #3b71ca;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  margin-left: 10px;
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const TitleTypo = styled(Typography)`
  text-align: center;
  margin-top: 20px;
  font-size: 40px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const BadgeStyle = styled(Box)`
  position: absolute;
  top: 0px;
  left: 60px;
  background-color: #3b71ca;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  ${breakpoints.xs} {
    top: 0px;
    left: 80px;
  }
  ${breakpoints.md} {
    top: 0px;
    left: 68px;
  }
  ${breakpoints.lg} {
    top: 0px;
    left: 10px;
  }
  ${breakpoints.xl} {
    top: 0px;
    left: 55px;
  }
  ${breakpoints["2xl"]} {
    top: 0px;
    left: 60px;
  }
`;

// Dotted Border with Rotation
export const ImageContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 190px;
  border-radius: 50%;
  margin: auto;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px dotted #3b71ca;
    border-radius: 50%;
    animation: spin 30s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const AnimatedTypography = styled(Typography)`
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimatedsubTypography = styled(Typography)`
  line-height: 32px;
  opacity: 0;
  transform: translatex(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ArrowImage = styled(Image)`
  position: relative;
  left: 90%;
  top: -65%;
  z-index: 999;
  height: 100px;
  width: 100px;
  animation: sway 2s linear infinite alternate;
  @keyframes sway {
    0% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  ${breakpoints.xs} {
    display: none;
  }
  ${breakpoints.md} {
    height: 50px;
    width: 50px;
    display: block;
  }
  ${breakpoints.lg} {
    height: 40px;
    width: 40px;
    top: -75%;
    left: 100%;
  }
  ${breakpoints.xl} {
    left: 90%;
    top: -65%;
    height: 100px;
    width: 100px;
  }
`;
