import breakpoints from "@/themes/breakpoints";
import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

export const MainBox = styled(Box)`
  position: relative;
  z-index: -1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      rgba(104, 131, 179, 0.7),
      rgba(215, 221, 232, 0.7)
    ),
    url("/images/whoweare/bg3.avif") no-repeat center center;
    background-size: cover;
    z-index: -1;
  }

`;

export const ImageOneBox = styled(Box)`
  position: absolute;
  right: 0;
  ${breakpoints.xs} {
    margin-top: 400px;
  }
  ${breakpoints.md} {
    margin-top: 470px;
  }
  ${breakpoints.lg} {
    margin-top: 0px;
  }
`;
export const ImageTwoBox = styled(Box)`
  position: absolute;
  left: 36%;
  animation: sway2 3s linear infinite alternate;
  opacity: 0;
  transform: translateY(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

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
    left: 79%;
  }
  ${breakpoints.sm} {
    left: 43%;
  }
  ${breakpoints.md} {
    left: 42%;
  }
  ${breakpoints.lg} {
    left: 36%;
  }
  ${breakpoints.xl} {
    left: 40%;
  }
  ${breakpoints["2xl"]} {
    left: 36%;
  }
`;
export const ImageThreeBox = styled(Box)`
  position: absolute;
  left: 32%;
  margin-top: 170px;
  animation: sway 3s linear infinite alternate;
  opacity: 0;
  transform: translateY(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  @keyframes sway {
    0% {
      transform: translateX(-20px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  ${breakpoints.xs} {
    left: 64%;
    margin-top: 90px;
  }
  ${breakpoints.sm} {
    left: 39%;
    margin-top: 100px;
  }
  ${breakpoints.md} {
    margin-top: 130px;
  }
  ${breakpoints.lg} {
    left: 32%;
    margin-top: 110px;
  }
  ${breakpoints.xl} {
    left: 35%;
    margin-top: 150px;
  }
  ${breakpoints["2xl"]} {
    left: 32.5%;
    margin-top: 170px;
  }
`;
export const ImageFourBox = styled(Box)`
  position: absolute;
  left: 5%;
  opacity: 0;
  transform: translateY(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    left: 8%;
  }
  ${breakpoints.md} {
    left: 3%;
  }
  ${breakpoints.lg} {
    left: 3%;
  }
`;
export const ImageFiveBox = styled(Box)`
  position: absolute;
  z-index: 999;
  left: 23%;
  margin-top: 11.5%;
  opacity: 0;
  transform: translatex(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
  ${breakpoints.xs} {
    left: 45%;
    margin-top: 28%;
  }
  ${breakpoints.sm} {
    left: 27%;
    margin-top: 15%;
  }
  ${breakpoints.md} {
    left: 24%;
    margin-top: 15%;
  }
  ${breakpoints.lg} {
    left: 25%;
    margin-top: 14.5%;
  }
`;
export const ImageSixBox = styled(Box)`
  position: absolute;
  left: -120px;
  z-index: -1;
  margin-top: 50px;
  opacity: 0;
  transform: translateY(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    left: -75px;
    margin-top: 28px;
  }
  ${breakpoints.md} {
    left: -110px;
    margin-top: 28px;
  }
  ${breakpoints.lg} {
    left: -120px;
    margin-top: 50px;
  }
`;
export const ImageSrc = styled(Image)`
  object-fit: contain;
  opacity: 0;
  transform: translateY(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    height: 10px;
    width: 23px;
  }
  ${breakpoints.lg} {
    height: 15px;
    width: 33px;
  }
`;
export const ImageSign = styled(Image)`
  object-fit: contain;
  ${breakpoints.xs} {
    height: 50px;
    width: 110px;
  }
  ${breakpoints.lg} {
    height: 90px;
    width: 150px;
  }
`;
export const ImageCircle = styled(Image)`
  animation: spin 8s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
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
    height: 450px;
    width: 450px;
  }
  ${breakpoints.xl} {
    height: 500px;
    width: 500px;
  }
`;
export const ImageBig = styled(Image)`
  object-fit: fill;
  border: 6px solid #fff;
  border-radius: 50%;
  ${breakpoints.xs} {
    height: 250px;
    width: 250px;
  }
  ${breakpoints.md} {
    height: 350px;
    width: 350px;
  }
  ${breakpoints.lg} {
    height: 450px;
    width: 450px;
  }
  ${breakpoints.xl} {
    height: 550px;
    width: 550px;
  }
`;
export const ImageSub = styled(Image)`
  object-fit: fill;
  border: 6px solid #fff;
  border-radius: 50%;
  ${breakpoints.xs} {
    height: 180px;
    width: 180px;
  }
  ${breakpoints.md} {
    height: 220px;
    width: 220px;
  }
  ${breakpoints.lg} {
    height: 240px;
    width: 240px;
  }
  ${breakpoints.xl} {
    height: 340px;
    width: 340px;
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
export const WhoWeAreBox = styled(Box)`
  display: flex;
  gap: 10px;
  opacity: 0;
  transform: translateY(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const WhoWeAreTypo = styled(Typography)`
  color: rgb(55, 81, 126);
  font-size: 25px;
  font-weight: 600;
  margin-top: -10px;
  ${breakpoints.xs} {
    font-size: 15px;
    margin-top: -5px;
  }
  ${breakpoints.lg} {
    font-size: 20px;
    margin-top: -7px;
  }
  ${breakpoints.xl} {
    font-size: 25px;
    margin-top: -10px;
  }
`;
export const SuccessHedTypo = styled(Typography)`
  font-size: 45px;
  font-weight: 700;
  line-height: 60px;
  margin-top: 30px;
  opacity: 0;
  transform: translatex(0px);
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
    font-size: 40px;
  }
`;
export const SubHedTypo = styled(Typography)`
  font-size: 25px;
  font-weight: 700;
  line-height: 60px;
  margin-top: 10px;
  opacity: 0;
  transform: translatex(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    font-size: 15px;
  }
  ${breakpoints.lg} {
    font-size: 20px;
  }
  ${breakpoints.xl} {
    font-size: 25px;
  }
`;
export const DescriptionTypo = styled(Typography)`
  font-size: 18px;
  margin-top: 30px;
  line-height: 30px;
  color: #000;
  width: 120%;
  transform: translateY(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    font-size: 12px;
    width: 90%;
  }
  ${breakpoints.lg} {
    font-size: 15px;
    width: 100%;
  }
  ${breakpoints.xl} {
    font-size: 18px;
    width: 120%;
  }
`;
export const DescriptionBodyText = styled(Typography)`
  font-size: 18px;
  margin-top: 10px;
  line-height: 30px;
  color: #000;
  width: 120%;
  opacity: 0;
  transform: translateY(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    font-size: 12px;
    width: 90%;
  }
  ${breakpoints.lg} {
    font-size: 15px;
    width: 100%;
  }
  ${breakpoints.xl} {
    font-size: 18px;
    width: 120%;
  }
`;
export const CircleCheckIcon = styled(FaCircleCheck)`
  color: rgb(55, 81, 126);
  font-size: 25px;
  opacity: 0;
  transform: translateY(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    font-size: 15px;
  }
  ${breakpoints.lg} {
    font-size: 20px;
  }
  ${breakpoints.xl} {
    font-size: 25px;
  }
`;
export const ListItemTypo = styled(Typography)`
  font-size: 18px;
  font-weight: 700;
  margin-left: -10px;
  opacity: 0;
  transform: translateY(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    font-size: 12px;
    margin-left: -20px;
  }
  ${breakpoints.lg} {
    font-size: 15px;
    margin-left: -15px;
  }
  ${breakpoints.xl} {
    font-size: 18px;
    margin-left: -10px;
  }
`;
export const GridMain = styled(Grid)`
  display: flex;
  gap: 30px;
  width: 700px;
  margin-left: -14px;
  ${breakpoints.xs} {
    flex-direction: column;
    width: 300px;
    gap: 0px;
  }
  ${breakpoints.md} {
    flex-direction: row;
    width: 500px;
  }
  ${breakpoints.lg} {
    flex-direction: row;
    width: 700px;
  }
`;
export const ButtonExplore = styled(Button)`
  padding: 20px;
  background: linear-gradient(to right, rgb(23, 72, 206), #004b93);
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background: #000;
  }
  opacity: 0;
  transform: translateY(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    font-size: 12px;
    padding: 10px;
  }
  ${breakpoints.lg} {
    font-size: 16px;
    padding: 15px;
  }
  ${breakpoints.xl} {
    padding: 20px;
  }
`;
export const EnsureBox = styled(Box)`
  ${breakpoints.xs} {
    margin-top: 400px;
  }
  ${breakpoints.md} {
    margin-top: 30px;
  }
  ${breakpoints.lg} {
    margin-top: 0px;
  }
`;
export const GridTypo = styled(Grid)`
  ${breakpoints.xs} {
    margin-top: -12px;
  }
  ${breakpoints.md} {
    margin-top: 23px;
  }
  ${breakpoints.lg} {
    margin-top: 23px;
  }
`;
