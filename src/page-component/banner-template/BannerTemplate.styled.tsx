import breakpoints from "@/themes/breakpoints";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { GiArtificialIntelligence } from "react-icons/gi";
import { LiaCubesSolid } from "react-icons/lia";
import { LuRefreshCw } from "react-icons/lu";
import { MdOutlineHorizontalRule } from "react-icons/md"
import Image from "next/image";
import { FaCloudMeatball } from "react-icons/fa";

export const MainContainter = styled(Box)`
  padding: 100px 5%;
  display: flex;
  justify-content: space-around;
  ${breakpoints.xs} {
    padding: 30px 2%;
    justify-content: space-around;
  }
  ${breakpoints.lg} {
    padding: 100px 5%;
    justify-content: space-around;
  }
`;
export const SecurityTypo = styled(Typography)`
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    font-size: 13px;
    font-weight: 700;
  }
  ${breakpoints.lg} {
    font-size: 30px;
  }
  ${breakpoints.xl} {
    font-size: 50px;
  }
`;
export const BannerTemMain = styled(Box)`
  text-align: center;
  margin-top: 140px;
  ${breakpoints.xs} {
    margin-top: 100px;
    margin-left: 65px;
  }
  ${breakpoints.xs} {
    margin-top: 100px;
    margin-left: 0px;
  }
  ${breakpoints.lg} {
    margin-top: 140px;
    margin-left: 0px;
  }
`;
export const BannerButton = styled(Button)`
  border: 2px dotted rgb(56, 182, 240);
  color: rgb(56, 182, 240);
  padding: 15px 20px;
  margin-top: 10px;
  font-weight: 600;
  margin-top: 10px;
  line-height: 30px;
  opacity: 0;
  transform: translatey(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatey(0);
  }
  ${breakpoints.xs} {
    padding: 5px 10px;
    font-size: 10px;
  }
  ${breakpoints.lg} {
    padding: 15px 20px;
    font-size: 18px;
  }
`;
export const HorizontalLine = styled(MdOutlineHorizontalRule)`
  color: red;
  font-size: 30px;
  margin-top: 10px;
`;
export const DescTypo = styled(Typography)`
  margin-top: 10px;
  line-height: 30px;
  opacity: 0;
  transform: translatex(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
  ${breakpoints.xs} {
    font-size: 10px;
    line-height: 12px;
  }
  ${breakpoints.lg} {
    font-size: 15px;
    line-height: 30px;
  }
  ${breakpoints.xl} {
    font-size: 18px;
    line-height: 40px;
  }
`;
export const AdaptiveBox = styled(Box)`
  margin-left: 200px;
  text-align: center;
  opacity: 0;
  transform: translatex(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
  ${breakpoints.xs} {
    margin-left: 20px;
  }
  ${breakpoints.lg} {
    margin-left: 150px;
  }
  ${breakpoints.xl} {
    margin-left: 200px;
  }
`;
export const PasswordBox = styled(Box)`
  margin-top: 90px;
  text-align: center;
  opacity: 0;
  transform: translatex(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
  ${breakpoints.xs} {
    margin-top: 50px;
    margin-left: -30px;
  }
  ${breakpoints.lg} {
    margin-top: 90px;
    margin-left: 0px;
  }
`;
export const IdentityBox = styled(Box)`
  margin-left: 200px;
  margin-top: 90px;
  text-align: center;
  opacity: 0;
  transform: translatex(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
  ${breakpoints.xs} {
    margin-left: 20px;
    margin-top: 50px;
  }
  ${breakpoints.lg} {
    margin-left: 150px;
    margin-top: 90px;
  }
  ${breakpoints.xl} {
    margin-left: 200px;
    margin-top: 90px;
  }
`;
export const EndpointBox = styled(Box)`
  margin-right: 150px;
  text-align: center;
  width: 150px;
  opacity: 0;
  transform: translatex(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
  ${breakpoints.xs} {
    width: 50px;
    margin-left: -30px;
  }
  ${breakpoints.lg} {
    width: 150px;
    margin-left: 0px;
  }
`;
export const MultiFactorBox = styled(Box)`
  margin-top: 90px;
  margin-left: 200px;
  text-align: center;
  opacity: 0;
  transform: translatex(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
  ${breakpoints.xs} {
    margin-left: 0px;
    margin-top: 50px;
    width: 50px;
  }
  ${breakpoints.lg} {
    margin-left: 150px;
    margin-top: 90px;
    width: 130px;
  }
  ${breakpoints.xl} {
    margin-left: 250px;
    margin-top: 90px;
    width: 150px;
  }
`;
export const MobileDeviceBox = styled(Box)`
  margin-right: 150px;
  margin-top: 90px;
  text-align: center;
  width: 150px;
  opacity: 0;
  transform: translatex(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
  ${breakpoints.xs} {
    margin-top: 50px;
    width: 50px;
    margin-left: -30px;
  }
  ${breakpoints.lg} {
    margin-top: 90px;
    width: 150px;
    margin-left: 0px;
  }
`;
export const TypoSubtitle = styled(Typography)`
  width: 150px;
  text-align: center;
  margin-top: 10px;
  ${breakpoints.xs} {
    font-size: 10px;
    width: 70px;
  }
  ${breakpoints.lg} {
    font-size: 15px;
    width: 130px;
  }
  ${breakpoints.xl} {
    font-size: 17px;
    width: 150px;
  }
`;
export const IconAdaptive = styled(LuRefreshCw)`
  font-size: 35px;
  color: rgb(55, 81, 126);
  ${breakpoints.xs} {
    font-size: 20px;
  }
  ${breakpoints.lg} {
    font-size: 35px;
  }
`;
export const AdaptiveIconBox = styled(Box)`
  border: 1px solid #fff;
  border-radius: 50px;
  width: 60px;
  padding: 10px 5px;
  margin-left: 47px;
  background: rgb(211, 220, 252);
  animation: sway 1s linear infinite alternate;
  @keyframes sway {
    0% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  ${breakpoints.xs} {
    padding: 5px 3px;
    width: 34px;
    margin-left: 20px;
  }
  ${breakpoints.lg} {
    padding: 10px 5px;
    width: 60px;
    margin-left: 40px;
  }
  ${breakpoints.xl} {
    padding: 10px 5px;
    width: 60px;
    margin-left: 47px;
  }
`;
export const IconPassword = styled(LiaCubesSolid)`
  font-size: 35px;
  color: rgb(6, 112, 33);
  ${breakpoints.xs} {
    font-size: 20px;
  }
  ${breakpoints.lg} {
    font-size: 35px;
  }
`;
export const PasswordIconBox = styled(Box)`
  border: 1px solid #fff;
  border-radius: 50px;
  width: 60px;
  padding: 10px 5px;
  margin-left: 47px;
  background: rgb(188, 245, 202);
  animation: sway 1s linear infinite alternate;
  @keyframes sway {
    0% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  ${breakpoints.xs} {
    padding: 5px 3px;
    width: 34px;
    margin-left: 20px;
  }
  ${breakpoints.lg} {
    padding: 10px 5px;
    width: 60px;
    margin-left: 40px;
  }
  ${breakpoints.xl} {
    padding: 10px 5px;
    width: 60px;
    margin-left: 47px;
  }
`;
export const IconIdentity = styled(Image)`
  height: 30px;
  width: 30px;
  ${breakpoints.xs} {
    height: 10px;
    width: 10px;
  }
  ${breakpoints.lg} {
    height: 30px;
    width: 30px;
  }
`;
export const IdentityIconBox = styled(Box)`
  border: 1px solid #fff;
  border-radius: 50px;
  width: 60px;
  padding: 10px 5px;
  margin-left: 47px;
  background: #ebcaea;
  animation: sway 1s linear infinite alternate;
  @keyframes sway {
    0% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  ${breakpoints.xs} {
    padding: 5px 3px;
    width: 34px;
    margin-left: 20px;
  }
  ${breakpoints.lg} {
    padding: 10px 5px;
    width: 60px;
    margin-left: 40px;
  }
  ${breakpoints.xl} {
    padding: 10px 5px;
    width: 60px;
    margin-left: 47px;
  }
`;
export const IconEndpoint = styled(GiArtificialIntelligence)`
  font-size: 35px;
  color: #800000;
  ${breakpoints.xs} {
    font-size: 20px;
  }
  ${breakpoints.lg} {
    font-size: 35px;
  }
`;
export const EndpointIconBox = styled(Box)`
  border: 1px solid #fff;
  border-radius: 50px;
  width: 60px;
  padding: 10px 5px;
  margin-left: 47px;
  background: rgb(232, 187, 187);
  animation: sway 1s linear infinite alternate;
  @keyframes sway {
    0% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  ${breakpoints.xs} {
    padding: 5px 3px;
    width: 34px;
    margin-left: 20px;
  }
  ${breakpoints.lg} {
    padding: 10px 5px;
    width: 60px;
    margin-left: 40px;
  }
  ${breakpoints.xl} {
    padding: 10px 5px;
    width: 60px;
    margin-left: 47px;
  }
`;
export const IconAuthetication = styled(FaCloudMeatball)`
  font-size: 35px;
  color: #f08346;
  ${breakpoints.xs} {
    font-size: 16px;
  }
  ${breakpoints.lg} {
    font-size: 30px;
  }
`;
export const AutheticationIconBox = styled(Box)`
  border: 1px solid #fff;
  border-radius: 50px;
  width: 60px;
  padding: 10px 5px;
  margin-left: 47px;
  background: rgb(240, 221, 209);
  animation: sway 1s linear infinite alternate;
  @keyframes sway {
    0% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  ${breakpoints.xs} {
    padding: 5px 3px;
    width: 34px;
    margin-left: 20px;
  }
  ${breakpoints.lg} {
    padding: 10px 5px;
    width: 60px;
    margin-left: 40px;
  }
  ${breakpoints.xl} {
    padding: 10px 5px;
    width: 60px;
    margin-left: 47px;
  }
`;
export const IconMobileDevice = styled(Image)`
  height: 30px;
  width: 30px;
  ${breakpoints.xs} {
    height: 10px;
    width: 10px;
  }
  ${breakpoints.lg} {
    height: 30px;
    width: 30px;
  }
`;
export const MobileDeviceIconBox = styled(Box)`
  border: 1px solid #fff;
  border-radius: 50px;
  width: 60px;
  padding: 10px 5px;
  margin-left: 47px;
  background: rgb(177, 171, 232);
  animation: sway 1s linear infinite alternate;
  @keyframes sway {
    0% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  ${breakpoints.xs} {
    padding: 5px 3px;
    width: 34px;
    margin-left: 20px;
  }
  ${breakpoints.lg} {
    padding: 10px 5px;
    width: 60px;
    margin-left: 40px;
  }
  ${breakpoints.xl} {
    padding: 10px 5px;
    width: 60px;
    margin-left: 47px;
  }
`;
export const LastSideDetails = styled(Box)`
  ${breakpoints.xs} {
    width: 10%;
  }
  ${breakpoints.md} {
    width: 20%;
  }
  ${breakpoints.lg} {
    width: 30%;
  }
`;
