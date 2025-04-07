import breakpoints from "@/themes/breakpoints";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export const LayoutContainer = styled(Box)`
  display: grid;
  ${breakpoints.xs} {
    grid-template-columns: 1fr;
    padding: 0px;
  }
  ${breakpoints.sm} {
    grid-template-columns: 1fr;
    padding: 20px;
  }
  ${breakpoints.md} {
    grid-template-columns: 1fr 2fr;
    padding: 32px;
    gap: 25px;
  }
  ${breakpoints.lg} {
    grid-template-columns: 3fr 9fr;
    gap: 24px;
    padding: 32px;
  }
`;

export const Sidebar = styled(Box)`
  ${breakpoints.xs} {
    min-height: auto;
    position: static;
    margin-bottom: 20px;
  }
  ${breakpoints.sm} {
    min-height: auto;
    position: static;
    margin-bottom: 20px;
  }
  ${breakpoints.md} {
    min-height: 100vh;
    width: 120%;
    position: sticky;
    top: 0;
  }
`;

export const MainContent = styled(Box)`
  padding-right: 10px;
  margin-left: 70px;
  opacity: 0;
  transform: translateY(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
    position:relative;
    z-index:-1;

  ${breakpoints.xs} {
    padding-right: 0;
    margin-left: 0px;
  }
  ${breakpoints.lg} {
    padding-right: 20px;
    margin-left: 70px;
  }
`;

export const ServiceItem = styled(Box)`
  background-color: #f1fbfe;
  color: #101c2a;
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

  opacity: 0;
  transform: translatex(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
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

export const ArrowBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;

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

export const SectionContainer = styled(Box)`
  display: flex;
  gap: 4px;
  padding-top: 40px;
  justify-content: center;

  ${breakpoints.xs} {
    flex-direction: column;
    padding-top: 20px;
  }
  ${breakpoints.sm} {
    flex-direction: column;
    padding-top: 20px;
  }
  ${breakpoints.md} {
    flex-direction: row;
    padding-top: 0px;
    padding-bottom: 10px;
  }
  ${breakpoints.lg} {
    padding-top: 20px;
    padding-bottom: 0px;
  }
`;

export const ContentBox = styled(Box)`
  ${breakpoints.xs} {
    margin-top: 20px;
  }
  ${breakpoints.sm} {
    margin-top: 20px;
  }
  ${breakpoints.md} {
    margin-top: 0;
  }
`;

export const BulletPoint = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  margin-top: 8px;
  color: #333;

  ${breakpoints.xs} {
    font-size: 16px;
  }
  ${breakpoints.sm} {
    font-size: 16px;
  }
  ${breakpoints.md} {
    font-size: 18px;
  }
`;

export const TitleTypography = styled(Typography)`
  opacity: 0;
  transform: translateX(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateX(0);
  }
  ${breakpoints.xs} {
    font-size: 24px;
  }
  ${breakpoints.sm} {
    font-size: 24px;
  }
  ${breakpoints.md} {
    font-size: 30px;
  }
`;
export const MainImg = styled("img")`
  width: 100%;
  height: 40%;
  ${breakpoints.xs} {
    height: 30%;
  }
  ${breakpoints.sm} {
    height: 50%;
  }
`;

export const MainVideo = styled("video")`
  width: 600px;
  ${breakpoints.xs} {
    width: 300px;
  }
  ${breakpoints.sm} {
    width: 600px;
  }
`;

export const SubImg = styled(Image)`
  width: 450px;
  height: 520px;
  ${breakpoints.xs} {
    width: 320px;
    height: 220px;
  }
  ${breakpoints.sm} {
    width: 450px;
    height: 520px;
  }
`;
