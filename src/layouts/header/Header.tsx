/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { FaInstagramSquare, FaLinkedin, FaPhone } from "react-icons/fa";
import { IoMail, IoCloseOutline, IoLocationOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import { BiPhoneCall } from "react-icons/bi";
import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import {
  TopBar,
  NavBar,
  LogoWrapper,
  HeadingName,
  NavItem,
  SideBarHeadingName,
  SideBarLogoWrapper,
  ContactWrapper,
  ContactHeading,
  ContactIconWrapper,
  SearchIconWrapper,
  NavLink,
  SideBarContent,
  SideBarWrapper,
  SearchBarWrapper,
  SearchInputBox,
  SideBarIconWrapper,
  TopBarBox,
  TopBarBoxItem,
  TopBarAddressWarpper,
  TopBarAddressItem,
  BoxNavWarpper,
  MenuIcon,
  FlagImage,
  TopBarMailItem,
  StyledLink,
} from "./Header.styled";
import { IoIosMenu, IoIosSearch, IoMdClose } from "react-icons/io";
import { HiOutlineMailOpen } from "react-icons/hi";
// import { FaSquareFacebook } from "react-icons/fa6";
import Link from "next/link";
import { menuItems } from "@/config/header/Header";
import React from "react";

// Top Bar Component
const TopBarComponent = () => {
  return (
    <TopBar>
      <TopBarBox>
        <TopBarBoxItem>
          <FaPhone size={20} color="blue" style={{ marginTop: 2 }} />
          <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>
            +91 8940030201
          </Typography>
        </TopBarBoxItem>
        <TopBarMailItem>
          <IoMail size={20} color="blue" style={{ marginTop: 2 }} />
          <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>
            info@genpixels.com
          </Typography>
        </TopBarMailItem>
      </TopBarBox>
      <TopBarAddressWarpper>
        <TopBarAddressItem>
          <FlagImage
            src={"/images/Header/india.png"}
            alt="India"
            height={15}
            width={22}
          />
          <Typography variant="body1">India</Typography>
          <FlagImage
            src={"/images/Header/singapore.webp"}
            alt="India"
            height={15}
            width={22}
          />
          <Typography variant="body1">Singapore</Typography>
        </TopBarAddressItem>
      </TopBarAddressWarpper>
    </TopBar>
  );
};

// NavBar Component
const NavBarComponent = ({
  handleSidebarToggle,
}: {
  handleSidebarToggle: () => void;
}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen);
  };
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);

  const handleServiceMouseEnter = () => {
    setShowServiceDropdown(true);
  };

  const handleServiceMouseLeave = () => {
    setShowServiceDropdown(false);
  };

  return (
    <>
      <NavBar onMouseLeave={handleServiceMouseLeave}>
        <LogoWrapper>
          <Image
            src="/images/logo/genpixels.png"
            alt="Logo"
            width={100}
            height={100}
          />
          <HeadingName href={"/"}>enpixels</HeadingName>
          <MenuIcon>
            <IoIosMenu onClick={toggleDrawer(true)} />
          </MenuIcon>
        </LogoWrapper>
        <BoxNavWarpper>
          {menuItems.map((item, index) => (
            <NavItem
              key={index}
              onMouseEnter={
                item.name === "Service" ? handleServiceMouseEnter : undefined
              }
            >
              <NavLink href={item.path || "#"} passHref>
                <Typography>{item.name}</Typography>
              </NavLink>

              {item.name === "Service" && showServiceDropdown && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "100%",
                    left: { lg: 620, xl: 670 },
                    backgroundColor: "white",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    zIndex: 1,
                  }}
                >
                  {item.subItems?.map((subItem, subIndex) => (
                    <NavLink key={subIndex} href={subItem.path} passHref>
                      <Typography
                        sx={{
                          padding: "10px 20px",
                          color: "black",
                          "&:hover": {
                            backgroundColor: "#f0f0f0",
                          },
                        }}
                      >
                        {subItem.name}
                      </Typography>
                    </NavLink>
                  ))}
                </Box>
              )}
            </NavItem>
          ))}
        </BoxNavWarpper>

        {/* Search and Call */}
        <Box display="flex" alignItems="center" gap={2}>
          <SearchIconWrapper display="flex" alignItems="center" gap={-2}>
            <IconButton onClick={handleSidebarToggle}>
              <PiDotsNineBold size={30} color="#051634" />
            </IconButton>
          </SearchIconWrapper>

          {/* <CallBoxWrapper>
            <CallIconWrapper>
              <BiPhoneCall size={30} color="white" />
            </CallIconWrapper>
            <Box display="flex" flexDirection="column">
              <Typography variant="body2" fontWeight="bold" color="blue">
                Make a call
              </Typography>
              <Typography
                variant="body1"
                fontWeight="bold"
                color="black"
                sx={{ marginTop: "2px" }}
              >
                 +91 8940030201
              </Typography>
            </Box>
          </CallBoxWrapper> */}
        </Box>
      </NavBar>
      <SearchBarComponent
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />
      <Drawer
        open={openDrawer}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiPaper-root": { backgroundColor: "#051634" },
        }}
      >
        <Box sx={{ width: 350 }} role="presentation">
          <List sx={{ marginLeft: "20px" }}>
            <LogoWrapper
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Image
                  src="/images/logo/genpixels.png"
                  alt="Logo"
                  width={90}
                  height={90}
                />
                <HeadingName
                  href={"/"}
                  sx={{ color: "white", marginLeft: "-11px" }}
                >
                  enpixels
                </HeadingName>
              </Box>
              <Box
                sx={{
                  cursor: "pointer",
                }}
                onClick={toggleDrawer(false)}
              >
                <IoMdClose color="white" size={30} />
              </Box>
            </LogoWrapper>
          </List>
          <Divider
            sx={{
              bgcolor: "white",
              borderColor: "white",
              "&.MuiDivider-root": {
                borderColor: "white",
              },
            }}
          />
          <List sx={{ padding: "30px 30px 30px 10px" }}>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onMouseEnter={() =>
                    item.name === "Service" && setShowServiceDropdown(true)
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    if (item.name === "Service") {
                      setShowServiceDropdown(true);
                    } else {
                      toggleDrawer(false)();
                    }
                  }}
                >
                  <Link
                    href={item.path}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <ListItemText>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          lineHeight: "28px",
                          fontWeight: "400",
                          transition: "all 0.4s ease",
                          width: "300px",
                          borderBottom: "1px solid #e3d9ce",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </ListItemText>
                  </Link>
                  {item.name === "Service" && showServiceDropdown && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        backgroundColor: "white",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        zIndex: 1,
                      }}
                    >
                      {item.subItems?.map((subItem, subIndex) => (
                        <NavLink key={subIndex} href={subItem.path} passHref>
                          <Typography
                            sx={{
                              padding: "10px 20px",
                              color: "black",
                              "&:hover": {
                                backgroundColor: "#f0f0f0",
                              },
                            }}
                            onClick={toggleDrawer(false)}
                          >
                            {subItem.name}
                          </Typography>
                        </NavLink>
                      ))}
                    </Box>
                  )}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

// SideBar Component
const SideBarComponent = ({
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      {showSidebar && (
        <SideBarWrapper onClick={() => setShowSidebar(false)}>
          <SideBarIconWrapper onClick={(e) => e.stopPropagation()}>
            <IconButton
              onClick={() => setShowSidebar(false)}
              sx={{ alignSelf: "flex-end", marginBottom: "20px" }}
            >
              <IoCloseOutline size={28} color="white" />
            </IconButton>

            <Box
              sx={{
                overflowY: "auto",
                maxHeight: "100vh",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <SideBarLogoWrapper>
                <Image
                  src="/images/logo/genpixels.png"
                  alt="Logo"
                  width={100}
                  height={100}
                />
                <SideBarHeadingName>enpixels</SideBarHeadingName>
              </SideBarLogoWrapper>
              <SideBarContent variant="body1">
                Genpixels is a software development and digital marketing
                company, delivering customized digital solutions for businesses
                worldwide.
              </SideBarContent>
              <Box sx={{ marginTop: "20px" }}>
                <hr style={{ border: "1px solid white", width: "100%" }} />
              </Box>
              <ContactWrapper>
                <ContactHeading variant="h5">Get In Touch</ContactHeading>

                <ContactIconWrapper>
                  <Box display="flex">
                    <BiPhoneCall size={45} color="blue" />
                    <Box display="flex" flexDirection="column" marginLeft={1}>
                      <Typography
                        variant="body1"
                        fontWeight="400"
                        fontSize={"18px"}
                        lineHeight={"28px"}
                        color="white"
                      >
                        Make a call
                      </Typography>
                      <Typography
                        variant="body1"
                        fontSize={"18px"}
                        fontWeight={600}
                        lineHeight={"30px"}
                      >
                        +91 8940030201
                      </Typography>
                    </Box>
                  </Box>
                </ContactIconWrapper>

                <ContactIconWrapper>
                  <Box display="flex">
                    <HiOutlineMailOpen size={45} color="blue" />
                    <Box display="flex" flexDirection="column" marginLeft={1}>
                      <Typography
                        variant="body1"
                        fontWeight="400"
                        fontSize={"18px"}
                        lineHeight={"28px"}
                        color="white"
                      >
                        Quick Email
                      </Typography>
                      <Typography
                        variant="body1"
                        fontSize={"18px"}
                        fontWeight={600}
                        lineHeight={"30px"}
                      >
                        info@genpixels.com
                      </Typography>
                    </Box>
                  </Box>
                </ContactIconWrapper>

                <ContactIconWrapper>
                  <Box display="flex">
                    <IoLocationOutline
                      color="blue"
                      style={{ fontSize: "100px" }}
                    />
                    <Box display="flex" flexDirection="column" marginLeft={1}>
                      <Typography
                        variant="body1"
                        fontWeight="400"
                        fontSize={"18px"}
                        lineHeight={"28px"}
                        color="white"
                      >
                        Address
                      </Typography>
                      <Typography
                        variant="body1"
                        fontSize={"14px"}
                        fontWeight={600}
                      >
                        B block - 3F - 3rd floor Sri Ram Towers, 1D, 642Avinashi
                        Road, Lakshmi Mills, Coimbatore, 641037
                      </Typography>
                    </Box>
                  </Box>
                </ContactIconWrapper>
                <Box sx={{ marginTop: "20px" }}>
                  <hr style={{ border: "1px solid white", width: "100%" }} />
                </Box>

                <Box margin={5} display={"flex"} gap={2}>
                  {/* <FaSquareFacebook
                    size={40}
                    enableBackground={"#051634"}
                    color="white"
                    cursor={"pointer"}
                  /> */}
                  <StyledLink
                    href="https://www.linkedin.com/company/genpixels-tech-pvt-ltd"
                    target="_blank"
                  >
                    <FaLinkedin size={40} cursor={"pointer"} />
                  </StyledLink>
                  <StyledLink
                    href="https://www.instagram.com/gen_pixels?igsh=aXQ3bjF6bWJsMjF6&utm_source=qr"
                    target="_blank"
                  >
                    <FaInstagramSquare size={40} cursor={"pointer"} />
                  </StyledLink>
                </Box>
              </ContactWrapper>
            </Box>
          </SideBarIconWrapper>
        </SideBarWrapper>
      )}
    </>
  );
};

const SearchBarComponent = ({
  showSearch,
  setShowSearch,
}: {
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      {showSearch && (
        <SearchBarWrapper>
          <IconButton
            onClick={() => setShowSearch(false)}
            sx={{
              position: "absolute",
              top: 20,
              right: 30,
              color: "white",
              fontSize: "24px",
            }}
          >
            <IoCloseOutline size={28} color="white" />
          </IconButton>
          <SearchInputBox>
            <IoIosSearch size={22} color="black" />
            <TextField
              fullWidth
              variant="standard"
              placeholder="Search..."
              InputProps={{ disableUnderline: true }}
              sx={{ fontSize: "18px" }}
            />
          </SearchInputBox>
        </SearchBarWrapper>
      )}
    </>
  );
};

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleSidebarToggle = useCallback(
    () => setShowSidebar((prev) => !prev),
    []
  );
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box ref={sectionRef} className={isVisible ? "animate" : ""}>
      {/* Top Bar */}
      <TopBarComponent />

      {/* Navigation */}
      <NavBarComponent handleSidebarToggle={handleSidebarToggle} />

      {/* Sidebar */}
      <SideBarComponent
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
    </Box>
  );
};

export default Header;
