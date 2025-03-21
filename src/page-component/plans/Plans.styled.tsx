import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import breakpoints from "@/themes/breakpoints";

export const MainWrapper = styled(Box)`
  padding: 3% 5%;
`;
export const DispalyBox = styled(Box)`
  display: flex;
  gap: 30px;
  justify-content: center;
  ${breakpoints.xs} {
    flex-direction: column;
  }
  ${breakpoints.md} {
    flex-direction: row;
    flex-wrap: wrap;
  }
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
  color: #3c72fc;
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
  ${breakpoints.xs} {
    font-size: 13px;
    margin-top: 5px;
  }
  ${breakpoints.lg} {
    font-size: 18px;
    margin-top: 0px;
  }
  ${breakpoints.xl} {
    font-size: 20px;
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
  ${breakpoints.xs} {
    font-size: 22px;
  }
  ${breakpoints.lg} {
    font-size: 35px;
  }
  ${breakpoints.xl} {
    font-size: 40px;
  }
`;

export const PlanWrapper = styled(Box)`
  padding: 10px 2%;
  background: linear-gradient(180deg, #3c72fc -1.09%, #00060c 175.27%);
  margin-top: 50px;
  cursor: pointer;
  opacity: 0;
  transform: translatex(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
`;
export const BorderBox = styled(Box)`
  display: flex;
  gap: 60px;
  padding: 20px;
  border-bottom: 1px solid rgba(227, 227, 227, 0.4);
`;
export const BasicPalnTypo = styled(Typography)`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;
export const AmountTypo = styled(Typography)`
  display: flex;
  color: #fff;
  font-size: 35px;
  font-weight: 700;
  margin-top: 10px;
`;
export const MonthTypo = styled(Typography)`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  margin-top: 15px;
  margin-left: 5px;
`;
export const ImageBgIcon = styled(Image)`
  height: 80px;
  width: 80px;
`;
export const ImageIcon = styled(Image)`
  height: 40px;
  width: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const RupeeIcon = styled(CurrencyRupeeIcon)`
  font-size: 30px;
  position: relative;
  top: 5px;
`;
export const ListBox = styled(Box)`
  padding: 40px 20px;
`;
export const LiTypo = styled("li")`
  color: #fff;
  list-style: none;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  line-height: 52px;
`;
export const ButtonPlan = styled(Button)`
  background: linear-gradient(90deg, #3c72fc -10.59%, #00060c 300.59%);
  color: #fff;
  padding: 20px;
  width: 100%;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 20px;
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
export const ImageBox = styled(Box)`
  position: relative;
  height: 80px;
  width: 80px;
  animation: sway2 2s linear infinite alternate;
  @keyframes sway2 {
    0% {
      transform: translatex(15px);
    }
    100% {
      transform: translatex(0px);
    }
  }
`;
export const ImageCircle = styled(Image)`
  position: absolute;
  margin-left: 230px;
  margin-top: 200px;
  animation: sway 2s linear infinite alternate;
  @keyframes sway {
    0% {
      transform: translatey(-15px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  ${breakpoints.xs} {
    margin-left: 195px;
  }
  ${breakpoints.md}{
    margin-left: 215px;
  }
  ${breakpoints.lg}{
    margin-left: 220px;
  }
  ${breakpoints.xl} {
    margin-left: 230px;
  }
`;
