import breakpoints from "@/themes/breakpoints";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)`
  padding: 150px 5%;
  background: #fff;
  position: relative;
`;

export const SectionTitle = styled(Typography)`
  font-weight: 700;
  margin-top: 10px;
  line-height: 48px;
  opacity: 0;
  transform: translatex(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
  ${breakpoints.xs} {
    font-size: 35px;
  }

  ${breakpoints.lg} {
    font-size: 40px;
  }
`;

export const CaseStudyCard = styled(Box)`
  width: 300px;
  height: 340px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 30px;
  cursor: pointer;
  ${breakpoints.xs} {
    width: 320px;
  }
  ${breakpoints.lg} {
    width: 280px;
  }
  ${breakpoints.xl} {
    width: 300px;
  }
`;

export const Overlay = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: linear-gradient(0deg, #0f0d1d 0%, rgba(15, 13, 29, 0) 125%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ViewAllButton = styled(Button)`
  background: linear-gradient(90deg, rgb(55, 81, 126) -10.59%, #00060c 300.59%);
  color: white;
  padding: 15px 25px;
  text-transform: none;
  opacity: 0;
  transform: translatex(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;
  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
  &:hover {
    background: #000;
  }
`;

export const CaptionStyled = styled(Typography)`
  text-transform: uppercase;
  font-weight: 700;
  color: #3c72fc;
  font-size: 16px;
  line-height: 28px;
  margin-left: 10px;
  opacity: 0;
  transform: translateY(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeadingWarrper = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SwiperBoxWarpper = styled(Box)`
  ${breakpoints.xs} {
    margin-left: 0px;
  }
  ${breakpoints.md} {
    margin-left: 29px;
  }
  ${breakpoints.xl} {
    margin-left: 89px;
  }
`;
