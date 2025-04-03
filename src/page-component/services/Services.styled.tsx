import breakpoints from "@/themes/breakpoints";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const Container = styled(Box)`
  display: flex;
  gap: 40px;
  padding: 0 5%;
  flex-direction: row;

  ${breakpoints.xs} {
    flex-direction: column;
    padding: 20px 5%;
  }

  ${breakpoints.sm} {
    flex-direction: column;
    padding: 20px 3%;
  }

  ${breakpoints.md} {
    flex-direction: column;
    padding: 20px 5%;
  }

  ${breakpoints.lg} {
    flex-direction: row;
    padding: 20px 5%;
  }
`;

export const TitleTypography = styled(Typography)`
  ${breakpoints.xs} {
    font-size: 30px;
  }

  ${breakpoints.md} {
    font-size: 40px;
  }

  ${breakpoints.lg} {
    font-size: 30px;
  }
  ${breakpoints.xl} {
    font-size: 40px;
  }
`;

export const LeftSection = styled(Box)`
  position: relative;
  z-index: -1;
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateX(0);
  }
  flex: 1;
  ${breakpoints.xs} {
    opacity: 1;
    transform: translateX(0px);
    transition: opacity 1s ease-out, transform 1s ease-out;

    .animate & {
      opacity: 1;
      transform: translateX(0);
    }
  }
  ${breakpoints.lg} {
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 1s ease-out, transform 1s ease-out;

    .animate & {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const ImageWrapper = styled(Box)`
  position: relative;
  width: 100%;
  height: 470px;
  border-radius: 10px;
  overflow: hidden;
`;

export const PlayButton = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.3);
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 50%;
  cursor: pointer;
`;

export const RightSection = styled(Box)`
  flex: 1;
  background: #f3f7fb;
  padding: 20px;
  border-radius: 10px;
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateX(0);
  }
  ${breakpoints.xs} {
    opacity: 1;
    transform: translateX(0px);
    transition: opacity 1s ease-out, transform 1s ease-out;

    .animate & {
      opacity: 1;
      transform: translateX(0);
    }
    width: 100%;
  }
  ${breakpoints.lg} {
    opacity: 0;
    transform: translateX(50px);
    transition: opacity 1s ease-out, transform 1s ease-out;

    .animate & {
      opacity: 1;
      transform: translateX(0);
    }
    width: 100%;
  }
`;

export const RightSection2 = styled(Box)`
  flex: 1;
  margin-top: 80px;
  background: #f3f7fb;
  padding: 20px;
  border-radius: 10px;

  ${breakpoints.xs} {
    width: 100%;
  }
`;

export const ImageStyled = styled("img")`
  width: 100%;
  ${breakpoints.lg} {
    width: 200%;
  }
  ${breakpoints.xl} {
    width: 100%;
    margin-right: 300px;
  }
`;

export const ServiceItem = styled(Box)<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? "rgb(55, 81, 126)" : "#ffffff")};
  color: ${({ selected }) => (selected ? "white" : "#101c2a")};
  font-weight: 600;
  font-size: 18px;
  padding: 20px;
  line-height: 21px;
  border-radius: 4px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: color 0.4s ease-in-out, background-color 0.4s ease-in-out;
  opacity: 1;
  transform: translateX(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateX(0);
  }

  &:hover {
    background-color: rgb(55, 81, 126);
    color: white;
  }

  &:hover .arrow {
    background-color: white;
    color: rgb(55, 81, 126);
  }

  ${breakpoints.xs} {
    font-size: 16px;
    padding: 15px;
  }
  ${breakpoints.sm} {
    font-size: 16px;
    padding: 15px;
  }
  ${breakpoints.md} {
    font-size: 18px;
    padding: 20px;
  }
`;

export const OpeningHoursItem = styled(Box)`
  background-color: #ffffff;
  color: rgb(55, 81, 126);
  font-weight: 600;
  font-size: 18px;
  padding: 20px;
  margin-top: 20px;
  line-height: 21px;
  border-radius: 4px;
  margin-bottom: 8px;
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  transition: color 0.4s ease-in-out, background-color 0.4s ease-in-out;
  opacity: 1;
  transform: translateX(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  ${breakpoints.xs} {
    font-size: 16px;
    padding: 15px;
  }
  ${breakpoints.sm} {
    font-size: 16px;
    padding: 15px;
  }
  ${breakpoints.md} {
    font-size: 18px;
    padding: 20px;
  }
`;

export const ArrowBox = styled(Box)<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;
  background-color: ${({ selected }) => (selected ? "white" : "transparent")};
  color: ${({ selected }) => (selected ? "rgb(55, 81, 126)" : "#101c2a")};

  ${breakpoints.xs} {
    width: 30px;
    height: 30px;
  }
  ${breakpoints.sm} {
    width: 30px;
    height: 30px;
  }
  ${breakpoints.md} {
    width: 38px;
    height: 38px;
  }
`;

export const CheckCircleIconStyled = styled(CheckCircleIcon)`
  background: linear-gradient(90deg, #3c72fc -10.59%, #00060c 300.59%);
  color: white;
  border-radius: 100%;
  font-size: 20px;
`;

export const RightSideBox = styled(Box)`
  ${breakpoints.xs} {
    margin-bottom: 20px;
  }

  ${breakpoints.sm} {
    margin-bottom: 20px;
  }

  ${breakpoints.md} {
    margin-bottom: 20px; // Add margin-bottom for md
  }

  ${breakpoints.lg} {
    margin-bottom: 0; // Remove margin for larger screens
  }
`;
