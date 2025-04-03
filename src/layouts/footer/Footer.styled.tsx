import breakpoints from "@/themes/breakpoints";
import { Box, styled, Typography, Link } from "@mui/material";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Image from "next/image";

export const ContainerBox = styled(Box)`
  padding: 0 5%;
  background-color:  rgb(55, 81, 126);
  background-image: url(/images/footer/footer.png);
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: contain;
  position:reletive;
  z-index:0;

`;

export const SubPanel = styled(Box)`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  padding: 30px 0px;
  ${breakpoints.xs} {
    flex-direction: column;
  }
  ${breakpoints.md} {
    flex-direction: row;
    flex-wrap: wrap;
  }
  & > * {
    ${breakpoints.md} {
      flex: 1 1 calc(50% - 20px); /* Two columns for md */
    }

    ${breakpoints.lg} {
      flex: 1 1 calc(25% - 20px); /* Four columns for lg */
    }
  }
`;
export const ImageStyle = styled(Image)`
   margin-top:-10px;

  
  ${breakpoints.xs} {
    height: 80px;
    width: 80px;
  }
  ${breakpoints.lg} {
    height: 90px;
    width: 90px;
  }
  ${breakpoints.xl} {
    height: 100px;
    width: 100px;
  }
`;

export const LogoStyle = styled(Box)`
  display: flex;
  margin-left: 15px;
  font-family: "Poppins", sans-serif;
`;
export const LogoTypoStyle = styled(Typography)`
  color: white;
  padding-top: 20px;
  margin-left: -20px;
  font-size: 30px;
  ${breakpoints.xs} {
    font-size: 22px;
  }
  ${breakpoints.lg} {
    font-size: 25px;
  }
  ${breakpoints.xl} {
    font-size: 30px;
  }
`;
export const ParaStyle = styled(Typography)`
  color: white;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  width: 300px;
 font-family: "Poppins", sans-serif;
  ${breakpoints.xs} {
    font-size: 16px;
  }
  ${breakpoints.lg} {
    font-size: 18px;
  }
  
`;
export const CallIconWrapper = styled(Box)`
  width: 50px;
  height: 50px;
  background-color:  rgb(55, 81, 126);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${breakpoints.xs} {
    width: 35px;
    height: 35px;
  }
  ${breakpoints.lg} {
    width: 40px;
    height: 40px;
  }
  ${breakpoints.xl} {
    width: 50px;
    height: 50px;
  }
`;
export const CallTypoStyled = styled(Typography)`
  color: white;
  font-size: 18px;
  cursor: pointer;
    font-family: "Poppins", sans-serif;

  ${breakpoints.xs} {
  font-size: 16px;
  }
  ${breakpoints.lg} {
    font-size: 18px;
  }
  ${breakpoints.xl} {
    font-size: 18px;
  }
`;

export const NumberTypoStyled = styled(Typography)`
  color: white;
  fontsize: 18px;
  &:hover {
    color:  rgb(55, 81, 126);
    transition: 0.3s ease-in-out;
  }
      font-family: "Poppins", sans-serif;
  ${breakpoints.xs} {
    font-size: 16px;
  }
  ${breakpoints.lg} {
    font-size: 18px;
  }
  ${breakpoints.xl} {
    font-size: 18px;
  }
`;

export const HeadingStyle = styled(Typography)`
  font-size: 22px;
  color: white;
font-family: "Poppins", sans-serif;
  ${breakpoints.xs} {
    font-size: 18px;
  }
  ${breakpoints.lg} {
    font-size: 22px;
  }
  ${breakpoints.xl} {
    font-size: 22px;
  }
`;
export const ArrowIconStyle = styled(MdKeyboardDoubleArrowRight)`
  font-size: 18px;
  color:  #fff;
  position: relative;
  top: 3px;
  ${breakpoints.xs} {
    font-size: 16px;
  }
  ${breakpoints.lg} {
    font-size: 18px;
  }
  ${breakpoints.xl} {
    font-size: 18px;
  }
`;
export const UnitList = styled("ul")`
  margin-top: 10px;
`;

export const ListStyled = styled("li")`
  list-style-type: none;
  padding: 12px 0;
`;
export const StyledLink = styled(Link)`
  color: white;
  font-size: 18px;
  text-decoration: none;
  font-weight: 400;
  margin-left: 5px;
  font-family: "Poppins", sans-serif;
  transition: 0.3s ease-in-out;
 
  ${breakpoints.xs} {
    font-size: 16px;
  }
  ${breakpoints.lg} {
    font-size: 18px;
  }
  ${breakpoints.xl} {
    font-size: 18px;
     
  }
`;

export const ContentTypo = styled(Typography)`
  margin-top: 40px;
  color: white;
  font-size: 18px;
  width: 300px;
  font-family: "Poppins", sans-serif;
  ${breakpoints.xs} {
    font-size: 16px;
  }
  ${breakpoints.lg} {
    font-size: 18px;
  }
  ${breakpoints.xl} {
    font-size: 18px;
  }
`;

export const IconMainUl = styled("ul")`
  display: flex;
  gap: 15px;
  margin-top: 40px;
`;

export const IconLists = styled("li")`
  list-style-type: none;
  color: white;
  height: 40px;
  border: 1px solid #efefef;
  padding: 12px 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color:  rgb(55, 81, 126);
  }
`;

export const FooterStep = styled(Box)`
  background-color: #ffffff0d;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 20px 25px;
  align-items: center;
  color: white;
  margin-top: 80px;
  border-radius: 15px 15px 0 0;
  ${breakpoints.xs} {
    flex-direction: column;
    justify-content: center;
  }
  ${breakpoints.md} {
    flex-direction: row;
    justify-content: space-around;
  }
  ${breakpoints.lg} {
    justify-content: space-between;
  }

`;

export const CopyrightTypo = styled(Typography)`
  font-size: 18px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  ${breakpoints.xs} {
    font-size: 16px;
    text-align: center;
  }
  ${breakpoints.lg} {
    font-size: 18px;
  }
      ${breakpoints.xl} {
    font-size: 18px;
  }
`;

export const LinkBox = styled(Link)`
  color: white;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  font-weight:400;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    color:  rgb(55, 81, 126);
  }
  ${breakpoints.xs} {
    font-size: 16px;
    text-align: center;
  }
  ${breakpoints.lg} {
    font-size: 18px;
  }
      ${breakpoints.xl} {
    font-size: 18px;
  }
`;

export const YAxisPlusAnimateBox = styled(Box)`
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
`
export const XAxisPlusAnimateBox = styled(Box)`
  opacity: 0;
  transform: translatex(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
`
export const YAxisMinusAnimateBox = styled(Box)`
  opacity: 0;
  transform: translatey(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
`
export const XAxisMinusAnimateBox = styled(Box)`
  opacity: 0;
  transform: translatex(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translatex(0);
  }
`
