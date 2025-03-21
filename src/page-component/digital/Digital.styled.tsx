import breakpoints from "@/themes/breakpoints";
import { Box, Typography, Button, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export const MainBannerBox = styled(Box)`
  background: #f6f8fb;
  padding: 0 5%;
  ${breakpoints.xs} {
    padding: 30px 2%;
  }
  ${breakpoints.sm} {
    padding: 20px 2%;
  }
  ${breakpoints.md} {
    padding: 20px 3%;
  }
  ${breakpoints.lg} {
    padding: 20px 4%;
  }
  ${breakpoints.xl} {
    padding: 40px 5%;
  }
`;
export const MainHeadTypo = styled(Typography)`
  margin-top: 15px;
  font-weight: 500;
  font-size: 40px;
  color: darkblue;
  opacity: 0;
  transform: translatex(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
  ${breakpoints.xs} {
    font-size: 20px;
  }
  ${breakpoints.md} {
    font-size: 25px;
  }
  ${breakpoints.lg} {
    font-size: 20px;
  }
  ${breakpoints.xl} {
    font-size: 40px;
  }
`;
export const DescriptionTypo = styled(Typography)`
  font-size: 18px;
  color: grey;
  line-height: 35px;
  opacity: 0;
  transform: translatey(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatey(0);
  }
  ${breakpoints.xs} {
    font-size: 12px;
  }
  ${breakpoints.md} {
    font-size: 15px;
  }
  ${breakpoints.xl} {
    font-size: 18px;
  }
`;
export const ButtonExplore = styled(Button)`
  background: rgb(237, 92, 227);
  color: #fff;
  padding: 20px 30px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 50px 50px 50px 0px;
  margin-top: 50px;
  opacity: 0;
  transform: translatey(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatey(0);
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

export const ButtonPlan = styled(Button)`
  background: linear-gradient(90deg, #3c72fc -10.59%, #00060c 300.59%);
  color: #fff;
  padding: 20px 30px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 50px;
  margin-top: 50px;
  opacity: 0;
  transform: translatey(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatey(0);
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
  gap: 40px;
  margin-top: 70px;
  align-items: center;
  ${breakpoints.xs} {
    flex-direction: column;
    margin-top: 0px;
  }
  ${breakpoints.lg} {
    flex-direction: row;
  }
`;
export const InfoBox = styled(Box)`
  ${breakpoints.lg} {
    width: 50%;
  }
  ${breakpoints.xl} {
    width: 30%;
  }
`;
export const CardBox = styled(Box)`
  ${breakpoints.lg} {
    width: 100%;
  }
  ${breakpoints.xl} {
    width: 70%;
  }
`;
export const ServiceTypo = styled(Typography)`
  color: skyblue;
  font-size: 20px;
  font-weight: 700;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const IconStyle = styled(Image)`
  height: 50px;
  width: 50px;
`;
export const CardContainer = styled(CardContent)`
  opacity: 0;
  transform: translatex(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
`;
