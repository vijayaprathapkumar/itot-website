import breakpoints from "@/themes/breakpoints";
import { Box, Card, styled, Typography } from "@mui/material";

export const MainPanel = styled(Box)`
  padding: 30px 5%;
`;

export const HeadingBox = styled(Box)`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeadingTypo = styled(Box)`
  ${breakpoints.xs} {
    margin-bottom: 50px;
  }
  ${breakpoints.md} {
    margin-bottom: 30px;
  }
  ${breakpoints.lg} {
    margin-bottom: 0px;
  }
  ${breakpoints.xl} {
    margin-bottom: 0px;
  }
`;

export const ProfessionalHeading = styled(Typography)`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  color: #3b71ca;
  margin-bottom: 5px;
  font-family: "Rubik", Sans-serif;
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateX(0);
  }
  ${breakpoints.xs} {
    font-size: 14px;
  }
  ${breakpoints.md} {
    font-size: 14px;
  }
  ${breakpoints.lg} {
    font-size: 16px;
  }
  ${breakpoints.xl} {
    font-size: 16px;
  }
`;

export const HeadingTeam = styled(Typography)`
position:relative;
z-index:-2;
  font-size: 35px;
  text-transform: capitalize;
  font-weight: 700;
  font-family: "Rubik", Sans-serif;
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    font-size: 20px;
  }
  ${breakpoints.md} {
    font-size: 30px;
  }
  ${breakpoints.lg} {
    font-size: 30px;
  }
  ${breakpoints.xl} {
    font-size: 35px;
  }
`;

export const SubPara = styled(Typography)`
  font-size: 20px;
  color: #6d6d6d;
  width: 800px;
  font-family: "Rubik", Sans-serif;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    font-size: 16px;
    width: 300px;
  }
  ${breakpoints.md} {
    font-size: 18px;
    width: 715px;
  }
  ${breakpoints.lg} {
    font-size: 20px;
    width: 1000px;
  }
  ${breakpoints.xl} {
    font-size: 20px;
    width: 1000px;
  }
`;

export const TeamGrid = styled(Box)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TeamCard = styled(Card)`
  width: 360px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  &:hover .overlay {
    opacity: 1;
  }

  &:hover .social-icons {
    opacity: 1;
    right: 10px;
  }
  ${breakpoints.xs} {
    width: 300px;
  }
  ${breakpoints.md} {
    width: 330px;
  }
  ${breakpoints.lg} {
    width: 360px;
  }
  ${breakpoints.xl} {
    width: 360px;
  }
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Overlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(59, 113, 202, 0.8);
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
`;

export const SocialIconsBox = styled(Box)`
  position: absolute;
  top: 30%;
  right: -50px;
  background-color: white;
  border-radius: 5px;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: right 0.3s ease-in-out, opacity 0.3s ease-in-out;
  opacity: 0;
`;

export const IconStyle = {
  color: "#3b71ca",
  fontSize: 24,
  cursor: "pointer",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.2)",
  },
};

export const Name = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`;

export const Role = styled(Typography)`
  font-size: 14px;
  color: gray;
  text-align: center;
  margin-bottom: 10px;
`;
