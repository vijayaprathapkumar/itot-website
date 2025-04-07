import breakpoints from "@/themes/breakpoints";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export const MainBannerBox = styled(Box)`
  padding: 40px 5%;
  background: rgb(55, 81, 126);
  display: flex;
  gap: 240px;
  margin-top: -96px;
  ${breakpoints.xs} {
    flex-direction: column;
    gap: 100px;
  }
  ${breakpoints.sm} {
    flex-direction: row;
    padding: 50px 2%;
  }
  ${breakpoints.md} {
    padding: 50px 3%;
  }
  ${breakpoints.lg} {
    padding: 100px 4%;
    gap: 140px;
  }
  ${breakpoints.xl} {
    padding: 70px 5%;
    gap: 140px;
  }
`;

export const TitleHead = styled(Typography)`
  font-size: 48px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  line-height: 56px;
  margin: 0px 0px 10px;
  opacity: 0;
  transform: translatex(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
  ${breakpoints.xs} {
    font-size: 28px;
    line-height: 36px;
  }
  ${breakpoints.md} {
    font-size: 38px;
    line-height: 46px;
  }
  ${breakpoints.lg} {
    font-size: 38px;
    line-height: 56px;
  }
`;
export const DescriptionText = styled(Typography)`
  font-size: 24px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 30px;
  opacity: 0;
  transform: translatex(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
  ${breakpoints.xs} {
    font-size: 14px;
  }
  ${breakpoints.md} {
    font-size: 20px;
  }
  ${breakpoints.lg} {
    font-size: 20px;
  }
`;
export const ImageBanner = styled(Image)`
  height: 500px;
  width: 500px;
  margin-top: 40px;
  animation: sway 5s linear infinite alternate;
  @keyframes sway {
    0% {
      transform: translateY(-10px);
    }
    100% {
      transform: translatey(40px);
    }
  }
  ${breakpoints.xs} {
    height: 300px;
    width: 300px;
  }
  ${breakpoints.md} {
    height: 400px;
    width: 400px;
  }
  ${breakpoints.lg} {
    height: 500px;
    width: 500px;
  }
  ${breakpoints.xl} {
    height: 500px;
    width: 700px;
  }
`;
export const ContentBox = styled(Box)`
  margin-top: 100px;
  ${breakpoints.sm} {
    margin-top: 80px;
  }
  ${breakpoints.md} {
    margin-top: 130px;
  }
`;

export const ButtonStarted = styled(Button)`
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  color: rgb(255, 255, 255);
  padding: 10px 28px 11px;
  border-radius: 50px;
  transition: 0.5s;
  margin: 10px 0px 0px;
  background: rgb(71, 178, 228);
  opacity: 0;
  transform: translatey(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
  ${breakpoints.xs} {
    font-size: 12px;
  }
  ${breakpoints.lg} {
    font-size: 16px;
  }
`;
