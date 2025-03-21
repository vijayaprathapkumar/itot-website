import breakpoints from "@/themes/breakpoints";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";

// Top Bar Styles
export const TopBar = styled(Box)`
  background-color: #051634;
  padding: 15px 5%;
  display: flex;
  justify-content: space-between;
  color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translatex(-50px);
  transition: opacity .5s ease-out, transform .5s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }

  ${breakpoints.xs} {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  ${breakpoints.md} {
    flex-direction: row;
    gap: 20px;
  }
`;

export const TopBarBox = styled(Box)`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  ${breakpoints.xs} {
    flex-direction: column;
    gap: 10px;
  }

  ${breakpoints.md} {
    flex-direction: row;
    margin-top: 0px;
    gap: 20px;
  }
`;

export const TopBarBoxItem = styled(Box)`
  display: flex;
  gap: 12px;
  align-items: center;
  ${breakpoints.xs} {
    margin-left: -25px;
  }
  ${breakpoints.md} {
    margin-left: 0px;
  }
`;
export const TopBarMailItem = styled(Box)`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const TopBarAddressWarpper = styled(Box)`
  display: flex;
  gap: 12px;
  align-items: center;

  ${breakpoints.xs} {
    flex-direction: column;
    text-align: center;
  }

  ${breakpoints.md} {
    flex-direction: row;
    margin-top: 0px;
  }
`;

export const TopBarAddressItem = styled(Box)`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const FlagImage = styled(Image)`
  border-radius: 3px;
`

// NavBar Styles
export const NavBar = styled(Box)`
  display: flex;
  align-items: center;
  padding: 0px 5%;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid #e0e0e0;
  transition: background-color 0.3s ease;
  opacity: 0;
  transform: translatex(-50px);
  transition: opacity .5s ease-out, transform .5s ease-out;
  justify-content: space-between;
  .animate & {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    background-color: #f8f8f8;
  }

  ${breakpoints.xs} {
    height: 90px;
  }

  ${breakpoints.md} {
    height: auto;
  }
`;

export const BoxNavWarpper = styled(Box)`
  display: flex;
  ${breakpoints.xs} {
    display: none;
  }

  ${breakpoints.lg} {
    display: flex;
  }

  ${breakpoints.xl} {
    display: flex;
  }

  ${breakpoints["2xl"]} {
    display: flex;
  }
`;

export const LogoWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 20px;

  ${breakpoints.xs} {
    margin-left: -25px;
  }
  ${breakpoints.sm} {
    margin-left: -40px;
  }
  ${breakpoints.md} {
    margin-left: -30px;
  }
`;

export const HeadingName = styled(Link)`
  font-size: 30px;
  font-weight: 700;
  color: black;
  margin-left: -27px;
  letter-spacing: 2px;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 800;
`;

export const NavItem = styled(Box)`
  margin-left: 40px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  gap: 5px;
  align-items: center;
  transition: color 0.3s ease;
  font-family: "Poppins", sans-serif;
  &:hover {
    color: blue;
  }

  &:active {
    color: #1565c0;
  }

  ${breakpoints.lg} {
    font-size: 12px;
  }

  ${breakpoints.xl} {
    font-size: 18px;
  }
`;

export const MenuIcon = styled(Box)`
  position: absolute;
  right: 20px;
  font-size: 40px;

  ${breakpoints.xs} {
    display: block;
  }

  ${breakpoints.lg} {
    display: none;
  }
`;

export const CallBoxWrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: 40px;
  padding: 10px 15px;
  border-radius: 10px;
  gap: 8px;

  ${breakpoints.xs} {
    display: none;
  }

  ${breakpoints.lg} {
    display: flex;
  }
`;

export const CallIconWrapper = styled(Box)`
  width: 50px;
  height: 50px;
  background-color: blue;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Sidebar Styles
export const SideBarWrapper = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  z-index: 1100;
  animation: fadeIn 0.3s ease-in-out;
`;

export const SideBarIconWrapper = styled(Box)`
  width: 400px;
  height: 100vh;
  background: #051634;
  color: white;
  box-shadow: -4px 0px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 20px;
  animation: slideIn 0.3s ease-in-out;
`;

export const SideBarHeadingName = styled(Typography)`
  font-size: 30px;
  font-weight: 700;
  color: white;
  margin-left: -27px;
  letter-spacing: 2px;
`;

export const SideBarLogoWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: -24px;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: #ffffffcc;
`;

export const SideBarContent = styled(Typography)`
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: #ffffffcc;
`;

export const ContactWrapper = styled(Box)`
  margin-top: 30px;
`;

export const ContactHeading = styled(Typography)`
  font-size: 30px;
  font-weight: 700;
  color: white;
`;

export const ContactIconWrapper = styled(Box)`
  margin-top: 30px;
`;

// Search Bar Styles
export const SearchBarWrapper = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1000;
  animation: fadeIn 0.3s ease-in-out;
`;

export const SearchInputBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  border-radius: 8px;
  padding: 10px 15px;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);
  width: 50%;
  animation: scaleIn 0.3s ease-in-out;
`;

export const SearchIconWrapper = styled(Box)`
  display: flex;
  margin-left: 150px;

  ${breakpoints.xs} {
    display: none;
  }

  ${breakpoints.lg} {
    display: flex;
    margin-left: 50px;
  }

  ${breakpoints.xl} {
    display: flex;
    margin-left: 150px;
  }
`;
export const StyledLink = styled(Link)`
  color: white;
  font-size: 18px;
  text-decoration: none;
  font-weight: 400;
  margin-left: 5px;
  font-family: "Poppins", sans-serif;
  transition: 0.3s ease-in-out;
  &:hover {
    color: blue;
  }
 
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