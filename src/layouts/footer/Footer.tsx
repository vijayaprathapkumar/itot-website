/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  ArrowIconStyle,
  CallIconWrapper,
  CallTypoStyled,
  ContainerBox,
  ContentTypo,
  CopyrightTypo,
  FooterStep,
  HeadingStyle,
  IconLists,
  IconMainUl,
  ImageStyle,
  LinkBox,
  ListStyled,
  LogoStyle,
  NumberTypoStyled,
  StyledLink,
  SubPanel,
  UnitList,
  XAxisMinusAnimateBox,
  XAxisPlusAnimateBox,
  YAxisMinusAnimateBox,
  YAxisPlusAnimateBox,
} from "./Footer.styled";
import { Box, Link } from "@mui/material";
import { BiPhoneCall } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
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
    <>
      <ContainerBox ref={sectionRef} className={isVisible ? "animate" : ""}>
        <SubPanel>
          <YAxisPlusAnimateBox>
            <LogoStyle>
              <ImageStyle
                src="/images/logo/logo.png"
                alt="No logo"
                height={80}
                width={80}
              />
            </LogoStyle>
            <Box sx={{ display: "flex", marginTop: "15px" }}>
              <CallIconWrapper>
                <BiPhoneCall size={30} color="white" />
              </CallIconWrapper>
              <Box sx={{ marginLeft: "10px" }}>
                <CallTypoStyled>Make a call</CallTypoStyled>
                <NumberTypoStyled> +65 96212064</NumberTypoStyled>
              </Box>
            </Box>
            <Box sx={{ display: "flex", marginTop: "15px" }}>
              <CallIconWrapper>
                <IoLocationOutline color="#fff" style={{ fontSize: "35px" }} />
              </CallIconWrapper>
              <Box sx={{ marginLeft: "10px" }}>
                <CallTypoStyled>Address</CallTypoStyled>
                <NumberTypoStyled> ITOT Solutions Pte Ltd</NumberTypoStyled>
                <NumberTypoStyled>
                  {" "}
                  23,Fernvale Road <br /> #04-15 <br /> Singapore
                </NumberTypoStyled>
              </Box>
            </Box>
          </YAxisPlusAnimateBox>
          <XAxisPlusAnimateBox>
            <HeadingStyle>Quick Link</HeadingStyle>
            <UnitList>
              <ListStyled>
                <ArrowIconStyle />
                <StyledLink href="/contactUs">Contact Us</StyledLink>
              </ListStyled>
              <ListStyled>
                <ArrowIconStyle />
                <StyledLink href="/aboutUs">About Us</StyledLink>
              </ListStyled>
            </UnitList>
          </XAxisPlusAnimateBox>
          <YAxisMinusAnimateBox>
            <HeadingStyle>Our Services</HeadingStyle>
            <UnitList>
              <ListStyled>
                <ArrowIconStyle />
                <StyledLink href="/it-management">IT Services</StyledLink>
              </ListStyled>
              <ListStyled>
                <ArrowIconStyle />
                <StyledLink href="/ot-services">OT Services</StyledLink>
              </ListStyled>
              <ListStyled>
                <ArrowIconStyle />
                <StyledLink href="/digitalMarketing">
                  Digital Marketing Services
                </StyledLink>
              </ListStyled>
            </UnitList>
          </YAxisMinusAnimateBox>

          <XAxisMinusAnimateBox>
            <HeadingStyle>Follow Us</HeadingStyle>
            <ContentTypo>
              The latest news, articles, sent to your inbox weekly.
            </ContentTypo>
            <Box>
              <IconMainUl>
                <StyledLink>
                  {/* <IconLists>
                    <FaFacebookF />
                  </IconLists> */}
                </StyledLink>
                <StyledLink
                  href="https://www.linkedin.com/company/genpixels-tech-pvt-ltd"
                  target="_blank"
                >
                  <IconLists>
                    <FaLinkedinIn />
                  </IconLists>
                </StyledLink>
                <StyledLink
                  href="https://www.instagram.com/gen_pixels?igsh=aXQ3bjF6bWJsMjF6&utm_source=qr"
                  target="_blank"
                >
                  <IconLists>
                    <FaInstagram />
                  </IconLists>
                </StyledLink>
              </IconMainUl>
            </Box>
          </XAxisMinusAnimateBox>
        </SubPanel>
        <FooterStep>
          <CopyrightTypo>
            Copyright {new Date().getFullYear()} - All Rights Reserved By -{" "}
            <Link sx={{ color: "rgb(35, 51, 80)", cursor: "pointer", textDecoration:"none" }} href="#">
              ITOT Solutions Pte Ltd
            </Link>
          </CopyrightTypo>
          <Box>
            <LinkBox href="/privacyPolicy">Privacy Policy</LinkBox>
          </Box>
        </FooterStep>
      </ContainerBox>
    </>
  );
};

export default Footer;
