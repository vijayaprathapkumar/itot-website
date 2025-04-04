import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { FaCloudMeatball } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { LiaCubesSolid } from "react-icons/lia";
import { LuRefreshCw } from "react-icons/lu";
import { BsBuilding } from "react-icons/bs";
import { MdSettingsSuggest } from "react-icons/md";
import { TbHomeSignal } from "react-icons/tb";
import { TbAutomation } from "react-icons/tb";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import breakpoints from "@/themes/breakpoints";

export const MainHeadText = styled(Typography)`
  color: #323232;
  font-size: 42px;
  font-weight: 700;
  ${breakpoints.xs} {
    font-size: 22px;
    line-height: 40px;
  }
  ${breakpoints.md} {
    font-size: 42px;
    line-height: 40px;
  }
`;
export const BodyText = styled(Typography)`
  color: #323232;
  font-size: 20px;
  font-weight: 500;
  margin-top: 40px;
  ${breakpoints.xs} {
    font-size: 16px;
    line-height: 30px;
  }
  ${breakpoints.md} {
    font-size: 20px;
    line-height: 40px;
  }
`;
export const MainBox = styled(Box)`
  text-align: center;
  padding: 40px;
`;
export const ImageBox = styled(Box)`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: -20px;
`;
export const ContainerBox = styled(Box)`
  display: flex;
  padding: 40px 0px;
  justify-content: center;
  ${breakpoints.xs} {
    flex-direction: column;
  }
  ${breakpoints.md} {
    flex-direction: row;
  }
`;
export const ItCircleImage = styled(Image)`
  height: 350px;
  width: 350px;
  ${breakpoints.xs} {
    height: 150px;
    width: 150px;
  }
  ${breakpoints.md} {
    height: 350px;
    width: 350px;
  }
`;
export const OtCircleImage = styled(Image)`
  height: 350px;
  width: 350px;
  margin-left: -70px;
  ${breakpoints.xs} {
    height: 150px;
    width: 150px;
    margin-left: -30px;
  }
  ${breakpoints.md} {
    height: 350px;
    width: 350px;
    margin-left: -70px;
  }
`;
export const ConnectCircleImage = styled(Image)`
  height: 210px;
  width: 100px;
  position: absolute;
  margin-left: -85px;
  margin-top: 100px;
  ${breakpoints.xs} {
    height: 95px;
    width: 50px;
    margin-left: -40px;
    margin-top: 80px;
  }
  ${breakpoints.md} {
    height: 215px;
    width: 100px;
    margin-left: -85px;
    margin-top: 125px;
  }
`;
export const ServiceItText = styled(Typography)`
  position: relative;
  top: 180px;
  left: -20px;
  z-index: 1;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  ${breakpoints.xs} {
    top: 85px;
    left: 0px;
    font-size: 14px;
  }
  ${breakpoints.md} {
    top: 180px;
    left: -20px;
    font-size: 20px;
  }
`;
export const ServiceOtText = styled(Typography)`
  position: relative;
  top: 180px;
  left: -20px;
  z-index: 1;
  color: #323232;
  font-size: 20px;
  font-weight: 600;
  ${breakpoints.xs} {
    top: 85px;
    left: 0px;
    font-size: 14px;
  }
  ${breakpoints.md} {
    top: 180px;
    left: -20px;
    font-size: 20px;
  }
`;
export const AbbrevationTextIt = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  ${breakpoints.xs} {
    font-size: 10px;
    font-weight: 600;
    width: 100px;
    margin-left: 20px;
  }
  ${breakpoints.md} {
    font-size: 20px;
    width: 100%;
    margin-left: -10px;
  }
  ${breakpoints.lg} {
    font-size: 18px;
    width: 100%;
    margin-left: -10px;
  }
`;
export const AbbrevationTextOt = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  ${breakpoints.xs} {
    font-size: 10px;
    font-weight: 600;
    width: 100px;
    margin-left: 0px;
  }
  ${breakpoints.md} {
    font-size: 18px;
    width: 100%;
    margin-left: 20px;
  }
`;
export const AdaptiveBox = styled(Box)`
  position: relative;
  left: 80px;
  margin-top: -20px;
  text-align: center;
  display: flex;
  ${breakpoints.xs} {
    flex-direction: row-reverse;
    left: 0px;
    width: 240px;
  }
  ${breakpoints.md} {
    flex-direction: row;
    left: 90px;
    width: 150px;
  }
  ${breakpoints.lg} {
    flex-direction: row;
    left: 100px;
    width: 250px;
  }
`;
export const PasswordBox = styled(Box)`
  position: relative;
  left: 30px;
  margin-top: 10px;
  text-align: center;
  display: flex;
  ${breakpoints.xs} {
    flex-direction: row-reverse;
    left: -25px;
    margin-top: 20px;
    width: 240px;
  }
  ${breakpoints.md} {
    flex-direction: row;
    left: 10px;
    margin-top: 10px;
    width: 150px;
  }
  ${breakpoints.lg} {
    flex-direction: row;
    left: 50px;
    margin-top: 10px;
    width: 250px;
  }
`;
export const IdentityBox = styled(Box)`
  position: relative;
  left: 50px;
  margin-top: 30px;
  text-align: center;
  display: flex;
  ${breakpoints.xs} {
    flex-direction: row-reverse;
    left: -70px;
    margin-top: 20px;
    width: 240px;
  }
  ${breakpoints.md} {
    flex-direction: row;
    left: 20px;
    margin-top: 30px;
    width: 100px;
  }
  ${breakpoints.lg} {
    flex-direction: row;
    left: 60px;
    margin-top: 30px;
    width: 200px;
  }
`;
export const EndpointBox = styled(Box)`
  position: relative;
  left: -5px;
  margin-top: 30px;
  text-align: center;
  display: flex;
  ${breakpoints.xs} {
    flex-direction: row-reverse;
    left: -18px;
    margin-top: 20px;
    width: 240px;
  }
  ${breakpoints.md} {
    flex-direction: row;
    left: -5px;
    margin-top: 30px;
    width: 140px;
  }
  ${breakpoints.lg} {
    flex-direction: row;
    left: 10px;
    margin-top: 30px;
    width: 240px;
  }
`;
export const MultiFactorBox = styled(Box)`
  position: relative;
  left: 43px;
  margin-top: 25px;
  text-align: center;
  display: flex;
  ${breakpoints.xs} {
    flex-direction: row-reverse;
    left: -24px;
    margin-top: 20px;
    width: 240px;
  }
  ${breakpoints.md} {
    flex-direction: row;
    left: 10px;
    margin-top: 30px;
    width: 120px;
  }
  ${breakpoints.lg} {
    flex-direction: row;
    left: 60px;
    margin-top: 30px;
    width: 220px;
  }
`;
export const MobileDeviceBox = styled(Box)`
  position: relative;
  left: 142px;
  margin-top: 10px;
  text-align: center;
  display: flex;
  ${breakpoints.xs} {
    flex-direction: row-reverse;
    left: -40px;
    margin-top: 20px;
    width: 240px;
  }
  ${breakpoints.md} {
    flex-direction: row;
    left: 110px;
    margin-top: 10px;
    width: 100px;
  }
  ${breakpoints.lg} {
    flex-direction: row;
    left: 160px;
    margin-top: 10px;
    width: 200px;
  }
`;
export const TypoSubtitle = styled(Typography)`
  text-align: center;
  margin-top: 10px;
  ${breakpoints.xs} {
    font-size: 14px;
  }
  ${breakpoints.md} {
    font-size: 15px;
  }
`;
export const IconAdaptive = styled(LuRefreshCw)`
  font-size: 35px;
  color: rgb(55, 81, 126);
  ${breakpoints.xs} {
    font-size: 20px;
  }
  ${breakpoints.md} {
    font-size: 35px;
  }
`;
export const AdaptiveIconBox = styled(Box)`
  border: 1px solid #fff;
  border-radius: 50px;
  width: 60px;
  height: 60px;
  padding: 10px 5px;
  margin-left: 17px;
  background: rgb(235, 240, 247);
  ${breakpoints.xs} {
    width: 50px;
    margin-left: 0px;
    margin-right: 17px;
  }
  ${breakpoints.md} {
    width: 60px;
    margin-left: 10px;
    margin-right: 0px;
  }
`;
export const IconPassword = styled(LiaCubesSolid)`
  font-size: 35px;
  color: rgb(6, 112, 33);
  ${breakpoints.xs} {
    font-size: 20px;
  }
  ${breakpoints.md} {
    font-size: 35px;
  }
`;
export const PasswordIconBox = styled(Box)`
  border: 1px solid #fff;
  border-radius: 50px;
  width: 60px;
  height: 60px;
  padding: 10px 5px;
  margin-left: 17px;
  background: rgb(235, 240, 247);
  ${breakpoints.xs} {
    width: 50px;
    margin-left: 0px;
    margin-right: 17px;
  }
  ${breakpoints.md} {
    width: 60px;
    margin-left: 17px;
    margin-right: 0px;
  }
`;
export const IconIdentity = styled(Image)`
  height: 30px;
  width: 30px;
  ${breakpoints.xs} {
    height: 20px;
    width: 20px;
  }
  ${breakpoints.md} {
    height: 30px;
    width: 30px;
  }
`;
export const IdentityIconBox = styled(Box)`
  border: 1px solid #fff;
  border-radius: 50px;
  width: 60px;
  padding: 10px 5px;
  margin-left: 17px;
  background: rgb(235, 240, 247);
  ${breakpoints.xs} {
    width: 50px;
    margin-left: 0px;
    margin-right: 17px;
  }
  ${breakpoints.md} {
    width: 60px;
    margin-left: 17px;
    margin-right: 0px;
  }
`;
export const IconEndpoint = styled(GiArtificialIntelligence)`
  font-size: 35px;
  color: #800000;
  ${breakpoints.xs} {
    font-size: 20px;
  }
  ${breakpoints.md} {
    font-size: 35px;
  }
`;
export const EndpointIconBox = styled(Box)`
  border: 1px solid #fff;
  border-radius: 50px;
  width: 60px;
  padding: 10px 5px;
  margin-left: 17px;
  background: rgb(235, 240, 247);
  ${breakpoints.xs} {
    width: 50px;
    margin-left: 0px;
    margin-right: 17px;
  }
  ${breakpoints.md} {
    width: 60px;
    margin-left: 17px;
    margin-right: 0px;
  }
`;
export const IconAuthetication = styled(FaCloudMeatball)`
  font-size: 35px;
  color: #f08346;
  ${breakpoints.xs} {
    font-size: 20px;
  }
  ${breakpoints.md} {
    font-size: 35px;
  }
`;
export const AutheticationIconBox = styled(Box)`
  border: 1px solid #fff;
  border-radius: 50px;
  width: 60px;
  padding: 10px 5px;
  margin-left: 17px;
  background: rgb(235, 240, 247);
  ${breakpoints.xs} {
    width: 50px;
    margin-left: 0px;
    margin-right: 17px;
  }
  ${breakpoints.md} {
    width: 60px;
    margin-left: 17px;
    margin-right: 0px;
  }
`;
export const IconMobileDevice = styled(Image)`
  height: 30px;
  width: 30px;
  ${breakpoints.xs} {
    height: 20px;
    width: 20px;
  }
  ${breakpoints.md} {
    height: 30px;
    width: 30px;
  }
`;
export const MobileDeviceIconBox = styled(Box)`
  border: 1px solid #fff;
  border-radius: 50px;
  width: 60px;
  padding: 10px 5px;
  margin-left: 17px;
  background: rgb(235, 240, 247);
  ${breakpoints.xs} {
    width: 50px;
    margin-left: 0px;
    margin-right: 17px;
  }
  ${breakpoints.md} {
    width: 60px;
    margin-left: 17px;
    margin-right: 0px;
  }
`;
export const BmsBox = styled(Box)`
  position: relative;
  left: -90px;
  margin-top: -20px;
  text-align: center;
  display: flex;
  ${breakpoints.xs} {
    left: 15px;
    margin-top: 20px;
    width: 200px;
  }
  ${breakpoints.md} {
    left: -90px;
    margin-top: -20px;
    width: 100px;
  }
  ${breakpoints.lg} {
    left: -90px;
    margin-top: -20px;
    width: 200px;
  }
`;
export const BmsIconBox = styled(Box)`
  border: 1px solid #fff;
  border-radius: 50px;
  width: 60px;
  padding: 10px 5px;
  margin-right: 17px;
  background: rgb(246, 240, 210);
  ${breakpoints.xs} {
    width: 50px;
  }
  ${breakpoints.md} {
    width: 60px;
  }
`;
export const TypoOtSubtitle = styled(Typography)`
  text-align: center;
  margin-top: 10px;
  ${breakpoints.xs} {
    font-size: 14px;
  }
  ${breakpoints.md} {
    font-size: 15px;
  }
`;
export const IconBms = styled(BsBuilding)`
  font-size: 30px;
  color: rgb(55, 81, 126);
  ${breakpoints.xs} {
    font-size: 20px;
  }
  ${breakpoints.md} {
    font-size: 35px;
  }
`;
export const SystemIntegratedBox = styled(Box)`
  position: relative;
  left: 5px;
  margin-top: 20px;
  text-align: center;
  display: flex;
  ${breakpoints.xs} {
    left: 15px;
    width: 200px;
  }
  ${breakpoints.md} {
    left: 5px;
    width: 120px;
  }
  ${breakpoints.lg} {
    left: 5px;
    width: 220px;
  }
`;
export const SystemIntegratedIconBox = styled(Box)`
  border: 1px solid #fff;
  border-radius: 50px;
  width: 60px;
  padding: 10px 5px;
  margin-right: 17px;
  background: rgb(246, 240, 210);
  ${breakpoints.xs} {
    width: 50px;
  }
  ${breakpoints.md} {
    width: 60px;
  }
`;
export const IconSystemIntegrated = styled(MdSettingsSuggest)`
  font-size: 35px;
  color: rgb(6, 112, 33);
  ${breakpoints.xs} {
    font-size: 20px;
  }
  ${breakpoints.md} {
    font-size: 35px;
  }
`;
export const HomeAutomationBox = styled(Box)`
  position: relative;
  left: 30px;
  margin-top: 40px;
  text-align: center;
  display: flex;
  ${breakpoints.xs} {
    left: 15px;
    margin-top: 20px;
    width: 200px;
  }
  ${breakpoints.md} {
    left: 30px;
    margin-top: 40px;
    width: 120px;
  }
  ${breakpoints.lg} {
    left: 30px;
    margin-top: 40px;
    width: 220px;
  }
`;
export const HomeAutomationIconBox = styled(Box)`
  border: 1px solid #fff;
  border-radius: 50px;
  width: 60px;
  padding: 10px 5px;
  margin-right: 17px;
  background: rgb(246, 240, 210);
  ${breakpoints.xs} {
    width: 50px;
  }
  ${breakpoints.md} {
    width: 60px;
  }
`;
export const IconHomeAutomation = styled(TbHomeSignal)`
  font-size: 30px;
  color: #800000;
  ${breakpoints.xs} {
    font-size: 20px;
  }
  ${breakpoints.md} {
    font-size: 35px;
  }
`;
export const IandPAnutomationBox = styled(Box)`
  position: relative;
  left: 10px;
  margin-top: 45px;
  text-align: center;
  display: flex;
  ${breakpoints.xs} {
    left: 15px;
    margin-top: 20px;
    width: 300px;
  }
  ${breakpoints.md} {
    left: 10px;
    margin-top: 45px;
    width: 130px;
  }
  ${breakpoints.lg} {
    left: 10px;
    margin-top: 45px;
    width: 309px;
  }
  ${breakpoints.xl} {
    left: 10px;
    margin-top: 45px;
    width: 330px;
  }
`;
export const IandPAnutomationIconBox = styled(Box)`
  border: 1px solid #fff;
  border-radius: 50px;
  width: 60px;
  height: 60px;
  padding: 10px 5px;
  margin-right: 15px;
  background: rgb(246, 240, 210);
  ${breakpoints.xs} {
    width: 50px;
  }
  ${breakpoints.md} {
    width: 60px;
  }
`;
export const IconIandPAnutomation = styled(TbAutomation)`
  font-size: 30px;
  color: #f08346;
  ${breakpoints.xs} {
    font-size: 20px;
  }
  ${breakpoints.md} {
    font-size: 35px;
  }
`;
export const EneregyBox = styled(Box)`
  position: relative;
  left: -70px;
  margin-top: 50px;
  text-align: center;
  display: flex;
  ${breakpoints.xs} {
    left: 15px;
    margin-top: 20px;
    width: 200px;
  }
  ${breakpoints.md} {
    left: -70px;
    margin-top: 10px;
    width: 120px;
  }
  ${breakpoints.lg} {
    left: -70px;
    margin-top: 50px;
    width: 220px;
  }
`;
export const EneregyIconBox = styled(Box)`
  border: 1px solid #fff;
  border-radius: 50px;
  width: 60px;
  padding: 10px 5px;
  margin-right: 17px;
  background: rgb(246, 240, 210);
  ${breakpoints.xs} {
    width: 50px;
  }
  ${breakpoints.md} {
    width: 60px;
  }
`;
export const IconEneregy = styled(MdOutlineEnergySavingsLeaf)`
  font-size: 35px;
  color: rgb(157, 13, 126);
  ${breakpoints.xs} {
    font-size: 20px;
  }
  ${breakpoints.md} {
    font-size: 35px;
  }
`;
