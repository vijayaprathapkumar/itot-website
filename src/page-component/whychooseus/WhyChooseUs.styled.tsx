import breakpoints from "@/themes/breakpoints";
import { Box, Button, LinearProgress, Typography } from "@mui/material";
import { keyframes, styled } from "@mui/material/styles";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";

const fadeUpBorder = keyframes`
  0% {
    border-color: transparent;
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    border-color: #3c72fc;
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    border-color: transparent;
    opacity: 0;
    transform: scale(0.8);
  }
`;

const fadeUpBorderBefore = keyframes`
  0% {
    border-color: transparent;
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    border-color: #3c72fc;
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    border-color: transparent;
    opacity: 0;
    transform: scale(0.8);
  }
`;

export const MainWrapper = styled(Box)`
  background-color:  rgb(55, 81, 126);
  margin-top: 30px;
`;
export const ShapeImage = styled(Image)`
  position: absolute;
  margin-top: 25%;
  left: 0;
  z-index: 999;
  height: 300px;
  width: 400px;
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    display: none;
  }
  ${breakpoints.lg} {
    display: block;
  }
`;
export const WhyChooseUsAreBox = styled(Box)`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  margin-top: 100px;
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.md} {
    margin-top: 30px;
    margin-bottom: -10px;
  }
  ${breakpoints.lg} {
    margin-top: 100px;
    margin-bottom: 30px;
  }
`;
export const WhyChooseUsAreTypo = styled(Typography)`
  color:rgb(20, 84, 244);
  font-size: 25px;
  font-weight: 500;
  margin-top: -10px;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }

  ${breakpoints.xs} {
    font-size: 15px;
    margin-top: -5px;
  }
  ${breakpoints.lg} {
    font-size: 20px;
    margin-top: -7px;
  }
  ${breakpoints.xl} {
    font-size: 20px;
    margin-top: -10px;
  }
`;
export const ImageSrc = styled(Image)`
  object-fit: contain;
  ${breakpoints.xs} {
    height: 10px;
    width: 23px;
  }
  ${breakpoints.lg} {
    height: 15px;
    width: 33px;
  }
`;
export const SuccessHedTypo = styled(Typography)`
  font-size: 45px;
  font-weight: 700;
  line-height: 60px;
  margin-top: 20px;
  color: #fff;
  opacity: 0;
  transform: translatex(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    font-size: 25px;
  }
  ${breakpoints.lg} {
    font-size: 30px;
  }
  ${breakpoints.xl} {
    font-size: 35px;
  }
`;
export const MainBoxWrapper = styled(Box)`
  display: flex;
  gap: 130px;
  ${breakpoints.xs} {
    flex-direction: column;
    gap: 50px;
    margin-left: 10px;
    margin-right: 10px;
  }
  ${breakpoints.md}{
    flex-direction: row;
  }
  ${breakpoints.lg} {
    flex-direction: row;
    gap: 80px;
    margin-left: 50px;
    margin-right: 0px;
  }
  ${breakpoints.xl} {
    flex-direction: row;
    gap: 130px;
    margin-left: 80px;
  }
`;
export const ImageChooseUs = styled(Image)`
  position: relative;
  z-index: 1;
  height: 700px;
  width: 700px;
  opacity: 0;
  transform: translatey(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    height: 100%;
    width: 100%;
  }
  ${breakpoints.md} {
    height: 700px;
    width: 500px;
    object-fit: cover;
  }
  ${breakpoints.lg} {
    height: 500px;
    width: 500px;
    object-fit: fill;
  }
  ${breakpoints.xl} {
    height: 700px;
    width: 700px;
  }
`;
export const ImageChooseUsBackground = styled("img")`
  height: 500px;
  width: 700px;
  margin-top: 28.6%;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    height: 100%;
    width: 98%;
    margin-top: 18%;
  }
  ${breakpoints.sm} {
    height: 100%;
    width: 115%;
    margin-top: 21%;
  }
  ${breakpoints.md} {
    height: 500px;
    width: 500px;
    margin-top: 40%;
  }
  ${breakpoints.lg} {
    height: 500px;
    width: 500px;
    margin-top: 0%;
  }
`;
export const ImageChooseUsBackgroundsub = styled("img")`
  height: 500px;
  width: 700px;
  margin-top: 28.6%;
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    height: 100%;
    width: 98%;
    margin-top: 17%;
  }
  ${breakpoints.sm} {
    height: 100%;
    width: 110%;
    margin-top: 19%;
  }
  ${breakpoints.md} {
    height: 500px;
    width: 500px;
    margin-top: 40%;
  }
  ${breakpoints.lg} {
    height: 500px;
    width: 500px;
    margin-top: 0%;
  }
`;
export const TitleHead = styled(Typography)`
  font-size: 25px;
  font-weight: 700;
  opacity: 0;
  transform: translateY(50px);
  margin-top: 20px;
  color: #fff;
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    font-size: 18px;
  }
  ${breakpoints.md} {
    font-size: 18px;
  }
  ${breakpoints.lg} {
    font-size: 22px;
  }
  ${breakpoints.xl} {
    font-size: 22px;
  }
`;
export const TitleDescription = styled(Typography)`
  font-size: 18px;
  color: #fff;
  line-height: 30px;
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    font-size: 13px;
  }
  ${breakpoints.md} {
    font-size: 15px;
  }
  ${breakpoints.lg} {
    font-size: 18px;
  }
  ${breakpoints.xl} {
    font-size: 17px;
  }
`;
export const IconBox = styled(Box)`
  border: 1px;
  padding: 10px;
  display: flex;
  height: 100px;
  margin-top: 20px;
  opacity: 0;
  transform: translatex(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    height: 80px;
    margin-top: 0px;
  }
  ${breakpoints.lg} {
    height: 100px;
    margin-top: 20px;
  }
`;
export const ServiceIcon = styled(DesignServicesRoundedIcon)`
  color: #fff;
  font-size: 50px;
`;
export const CallSupportIcon = styled(SupportAgentRoundedIcon)`
  color: #fff;
  font-size: 50px;
`;
export const MainIconBox = styled(Box)`
  ${breakpoints.xs} {
    flex-direction: column;
  }
  ${breakpoints.lg} {
    margin-top: 0px;
  }
  ${breakpoints.xl} {
    flex-direction: row;
    margin-top: 30px;
  }
`;

export const AnimatedBox = styled(Box)`
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const AnimatedProgressBar = styled(LinearProgress)`
  height: 15px;
  margin-top: 8px;
  background: #000;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const TypoProgress = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    font-size: 13px;
  }
  ${breakpoints.md} {
    font-size: 15px;
  }
  ${breakpoints.lg} {
    font-size: 18px;
  }
  ${breakpoints.xl} {
    font-size: 20px;
  }
`;
export const BackgroundBox = styled(Box)`
  position: absolute;
  z-index: 99;
`;
export const PlayButton = styled(Box)`
  position: absolute;
  margin-top: 15%;
  right: 25%;
  cursor: pointer;
  z-index: 999;
  opacity: 0;
  transform: translatex(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  ::after {
    position: absolute;
    content: "";
    width: 110%;
    height: 110%;
    border: 10px solid #3c72fc;
    opacity: 0.7;
    left: -15px;
    top: -13px;
    border-radius: 50%;
    animation: ${fadeUpBorderBefore} 3s ease-out infinite;
    animation-delay: 1.5s;
  }

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    margin-top: 160%;
    right: 40%;
  }
  ${breakpoints.sm} {
    margin-top: 90%;
    right: 45%;
  }
  ${breakpoints.md} {
    margin-top: 27%;
    right: 25%;
  }
  ${breakpoints.lg} {
    margin-top: 18%;
    right: 20%;
  }
`;
export const IframeVideo = styled("iframe")`
  height: 800px;
  width: 515px;
  ${breakpoints.xs} {
    height: 350px;
    width: 350px;
  }
  ${breakpoints.md} {
    height: 550px;
    width: 450px;
  }
  ${breakpoints.lg} {
    height: 500px;
    width: 980px;
  }
`;
export const PlayButtonIcon = styled(FaPlay)`
  font-size: 30px;
  ${breakpoints.xs} {
    font-size: 20px;
  }
  ${breakpoints.lg} {
    font-size: 30px;
  }
`;
export const ButtonAnimate = styled(Button)`
  position: relative;
  z-index: 999;
  ::after {
    position: absolute;
    content: "";
    width: 120%;
    height: 120%;
    border: 10px solid #3c72fc;
    opacity: 0.7;
    left: -17px;
    top: -15px;
    border-radius: 50%;
    animation: ${fadeUpBorder} 3s ease-in-out infinite;
  }
  ::before {
    position: absolute;
    content: "";
    width: 110%;
    height: 110%;
    border: 10px solid #3c72fc;
    opacity: 0.7;
    left: -15px;
    top: -13px;
    border-radius: 50%;
    animation: ${fadeUpBorder} 3s ease-in-out infinite;
    animation-delay: 1.5s; /* Delay to ensure ::after animates first */
  }
`;
