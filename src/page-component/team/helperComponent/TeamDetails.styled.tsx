import breakpoints from "@/themes/breakpoints";
import { Box, IconButton, Rating, styled, Typography } from "@mui/material";
import Image from "next/image";
import DoneIcon from "@mui/icons-material/Done";

export const MainContainer = styled(Box)`
  padding: 30px 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${breakpoints.xs} {
    flex-direction: column;
  }
  ${breakpoints.sm} {
    flex-direction: column;
  }
  ${breakpoints.md} {
    flex-direction: row;
  }
  ${breakpoints.xl} {
    flex-direction: row;
  }
`;

export const ProfileImage = styled(Image)`
  border-radius: 238px;
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateX(0);
  }
  object-fit: cover;
`;
export const ImageContainer = styled(Box)`
  margin: 80px 0px;
  position: relative;
  z-index: 3;
  margin-left: 90px;
  width: 450px;

  ${breakpoints.xs} {
    margin-left: 12px;
    margin-bottom: 0px;
    width: 200px;
  }
  ${breakpoints.md} {
    margin-left: 50px;
    margin-bottom: 0px;
    width: 200px;
  }
  ${breakpoints.lg} {
    margin-left: 90px;
    width: 450px;
  }
`;
export const PaintImage = styled(Image)`
  position: absolute;
  top: 2%;
  left: 35%;
  z-index: -1;
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    top: -8%;
    left: 50%;
  }
  ${breakpoints.md} {
    top: 2%;
    left: 65%;
  }
  ${breakpoints.lg} {
    top: -2%;
    left: 33%;
  }
  ${breakpoints.xl} {
    top: 2%;
    left: 35%;
  }
`;
export const SquareImage = styled(Image)`
  position: absolute;
  top: 8%;
  left: -10.5%;
  z-index: -1;
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    display: none;
  }
  ${breakpoints.md} {
    display: block;
  }
`;

export const SocialContainer = styled(Box)`
  display: flex;
  background-color: white;
  padding: 5px 5px;
  position: absolute;
  top: 356px;
  left: 94.5px;
  border-radius: 50px;
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
`;
interface StyledIconButtonProps {
  hovercolor?: string;
}
export const StyledIconButton = styled(IconButton)<StyledIconButtonProps>`
  color: black;
  &:hover {
    color: ${(props) => props.hovercolor || "black"};
  }
`;
export const ContentContainer = styled(Box)`
  margin-top: 75px;
  width: 820px;
  ${breakpoints.xs} {
    margin-top: 15px;
    width: 300px;
  }
  ${breakpoints.md} {
    margin-top: 50px;
    margin-left: 170px;
  }
  ${breakpoints.lg} {
    margin-top: 75px;
    margin-left: 0px;
  }
  ${breakpoints.xl} {
    margin-top: 75px;
  }
`;
export const CountrySpan = styled(Typography)`
  margin-left: 5px;
  margin-top: -6px;
  margin-bottom: 10px;
  font-family: "Rubik", Sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-transform: capitalize;
  color: #5a6287;
`;
export const NameHeading = styled(Typography)`
  font-weight: 600;
  font-size: 30px;
  font-family: "Rubik", Sans-serif;
  text-transform: capitalize;
  margin-bottom: 5px;

  ${breakpoints.xs} {
    font-size: 25px;
  }
  ${breakpoints.md} {
    font-size: 30px;
  }
`;
export const RoleName = styled(Typography)`
  font-weight: 400;
  font-size: 15px;
  text-transform: capitalize;
  font-family: "Rubik", Sans-serif;
  color: #5a6287;
  margin-bottom: 10px;
`;
export const SubPanel = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
  margin-bottom: 30px;
  font-weight: 400;
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateX(0);
  }
  ${breakpoints.xs} {
    flex-direction: column;
    width: 300px;
  }
  ${breakpoints.sm} {
    flex-direction: column;
    width: 600px;
  }
  ${breakpoints.md} {
    width: 500px;
  }
  ${breakpoints.lg} {
    flex-direction: row;
    width: 600px;
  }
`;

export const RatingBox = styled(Box)`
  display: flex;
`;
export const RatingIcon = styled(Rating)`
  margin-top: 10px;
`;
export const RatingValue = styled("span")`
  font-weight: 1000;
  margin: 13px 0 0 10px;
`;
export const FlagBox = styled(Box)`
  display: flex;
`;

export const DescriptionHeading = styled(Typography)`
  color: #5a6287;
  letter-spacing: 1px;
  margin-bottom: 30px;
  font-family: "Rubik", Sans-serif;
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateX(0);
  }
  ${breakpoints.xs} {
    width: 350px;
    font-size: 14px;
  }
  ${breakpoints.sm} {
    width: 720px;
    font-size: 16px;
  }
  ${breakpoints.md} {
    width: 420px;
    font-size: 16px;
  }
  ${breakpoints.lg} {
    width: 700px;
  }
  ${breakpoints.xl} {
    width: 800px;
  }
`;
export const DepartmentHeading = styled(Typography)`
  color: #5a6287;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 30px;
  font-family: "Rubik", Sans-serif;
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateX(0);
  }
  ${breakpoints.xs} {
    width: 300px;
    font-size: 14px;
  }
  ${breakpoints.sm} {
    width: 720px;
    font-size: 20px;
  }
  ${breakpoints.md} {
    width: 320px;
  }
  ${breakpoints.lg} {
    width: 600px;
  }
  ${breakpoints.xl} {
    width: 600px;
  }
`;
export const ResponsibilityContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: "Rubik", Sans-serif;
  gap: 20px;
  margin-bottom: 50px;
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateX(0);
  }
  ${breakpoints.xs} {
    flex-direction: column;
    width: 320px;
  }
  ${breakpoints.md} {
    flex-direction: column;
    width: 400px;
  }
  ${breakpoints.lg} {
    flex-direction: row;
    width: 750px;
  }
  ${breakpoints.xl} {
    flex-direction: row;
    width: 800px;
  }
`;

export const ResponsibilityItem = styled(Typography)`
  flex: 1 1 45%;
  min-width: 250px;
  color: #5a6287;
  font-weight: 400;
  font-size: 18px;
  font-family: "Rubik", Sans-serif;
  ${breakpoints.xs}{
    font-size: 14px;
  }
  ${breakpoints.md}{
    font-size: 18px;
  }
`;
export const CheckIcon = styled(DoneIcon)`
  color: blue;
  font-size: 20px;
  font-weight: 1000;
  ${breakpoints.xs}{
    font-size: 14px;
  }
  ${breakpoints.md}{
    font-size: 20px;
  }
`;
