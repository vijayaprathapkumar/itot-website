import breakpoints from "@/themes/breakpoints";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export const MainBannerBox = styled(Box)`
  margin-top: 30px;
  padding: 0 5%;
  background: #051634;
  background-size: cover;
  ${breakpoints.xs} {
    padding: 30px 3%;
  }
  ${breakpoints.sm} {
    padding: 40px 3%;
  }
  ${breakpoints.md} {
    padding: 0 3%;
  }
  ${breakpoints.lg} {
    padding: 100px 4%;
  }
  ${breakpoints.xl} {
    padding: 100px 5%;
  }
`;
export const DotIcon = styled(Image)`
  margin-top: 30px;
`;
export const InterTypo = styled(Typography)`
  border: 1px solid rgb(179, 214, 245);
  padding-left: 10px;
  color: #3d90d9;
  background: rgb(240, 246, 250);
  width: 120px;
  border-radius: 20px;
  font-size: 18px;
  margin-top: 70px;
  opacity: 0;
  transform: translatey(50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
`;
export const MainHeadTypo = styled(Typography)`
  margin-top: 50px;
  font-weight: 700;
  font-size: 30px;
  color: #fff;
  opacity: 0;
  transform: translatex(50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

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
  ${breakpoints.xl} {
    font-size: 30px;
  }
`;
export const DescriptionTypo = styled(Typography)`
  font-size: 18px;
  color: grey;
  line-height: 35px;
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
    width: 340px;
  }
  ${breakpoints.md} {
    font-size: 15px;
  }
  ${breakpoints.lg} {
    font-size: 18px;
    width: 700px;
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
  ${breakpoints.xs} {
    flex-direction: column;
  }
  ${breakpoints.sm} {
    flex-direction: row;
  }
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

export const RotatingContainer = styled(Box)({
  position: "relative",
  width: 300,
  height: 300,
  display: "flex",
  marginLeft: "-220px",
  marginTop: "270px",
  justifyContent: "center",
  alignItems: "center",
  animation: "spin 30s linear infinite",
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
  [breakpoints.xs]: {
    marginLeft: "50px",
    marginTop: "100px",
  },
  [breakpoints.sm]: {
    marginLeft: "25px",
    marginTop: "100px",
  },
  [breakpoints.md]: {
    marginLeft: "25px",
    marginTop: "100px",
  },
  [breakpoints.lg]: {
    marginLeft: "-250px",
  },
  [breakpoints.xl]: {
    marginTop: "160px",
  },
});

export const RotateBox = styled(Image)`
  position: absolute;
  width: 90px;
  height: 90px;
  background: #fff;
  border-radius: 50%;
  padding: 10px;
  object-fit: contain;
  ${breakpoints.xs} {
    width: 50px;
    height: 50px;
  }
  ${breakpoints.lg} {
    width: 90px;
    height: 90px;
  }
`;

export const MainSpinBox = styled(Box)`
  position: relative;
  width: 300;
  height: 300;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DashboardBox = styled(Box)`
  width: 150px;
  height: 150px;
  position: relative;
  top: 140px;
  right: 220px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  ${breakpoints.xs} {
    height: 90px;
    width: 120px;
    right: 150px;
    top: 50px;
  }
  ${breakpoints.sm} {
    height: 80px;
    width: 80px;
    top: 50px;
    right: 180px;
  }
  ${breakpoints.md} {
    top: 100px;
    right: 180px;
  }
  ${breakpoints.lg} {
  top: 50px;
    height: 130px;
    width: 130px;
    right: 210px;
  }
  ${breakpoints.xl} {
    top: 80px;
    right: 210px;
  }
`;
export const InfoBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
