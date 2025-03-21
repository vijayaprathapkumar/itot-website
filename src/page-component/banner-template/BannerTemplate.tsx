/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  AdaptiveBox,
  AdaptiveIconBox,
  AutheticationIconBox,
  BannerButton,
  BannerTemMain,
  DescTypo,
  EndpointBox,
  EndpointIconBox,
  HorizontalLine,
  IconAdaptive,
  IconAuthetication,
  IconEndpoint,
  IconIdentity,
  IconMobileDevice,
  IconPassword,
  IdentityBox,
  IdentityIconBox,
  LastSideDetails,
  MainContainter,
  MobileDeviceBox,
  MobileDeviceIconBox,
  MultiFactorBox,
  PasswordBox,
  PasswordIconBox,
  SecurityTypo,
  TypoSubtitle,
} from "./BannerTemplate.styled";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

const BannerTemplate = () => {
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
    <MainContainter ref={sectionRef} className={isVisible ? "animate" : ""}>
      <LastSideDetails>
        <AdaptiveBox>
          <AdaptiveIconBox>
            <IconAdaptive />
          </AdaptiveIconBox>
          <TypoSubtitle variant="body1">
            Application Revitalization
          </TypoSubtitle>
        </AdaptiveBox>
        <PasswordBox>
          <PasswordIconBox>
            <IconPassword />
          </PasswordIconBox>
          <TypoSubtitle variant="body1">Modular Engineering</TypoSubtitle>
        </PasswordBox>
        <IdentityBox>
          <IdentityIconBox>
            <IconIdentity src="/images/banner/ui-ux.png" alt="ui-ux" height={30} width={30}/>
          </IdentityIconBox>
          <TypoSubtitle variant="body1">UI/UX Design</TypoSubtitle>
        </IdentityBox>
      </LastSideDetails>
      <BannerTemMain sx={{ width: "40%" }}>
        <SecurityTypo variant="h3">IT Management</SecurityTypo>
        <DescTypo variant="body1">
          IT Management oversees an organization&apos;s technology infrastructure, including hardware, software, networks, and cybersecurity, ensuring efficient operations and security. It also involves strategic planning, troubleshooting, and implementing new technologies to support business goals.
        </DescTypo>
        <Box>
          <HorizontalLine />
        </Box>
        <Link href="/it-management">
          <BannerButton>
            Learn More{" "}
            <FaLongArrowAltRight
              style={{ marginLeft: "10px", fontSize: "20px" }}
            />
          </BannerButton>
        </Link>
      </BannerTemMain>
      <LastSideDetails>
        <EndpointBox>
          <EndpointIconBox>
            <IconEndpoint />
          </EndpointIconBox>
          <TypoSubtitle variant="body1">AI & Data Intelligence</TypoSubtitle>
        </EndpointBox>
        <MultiFactorBox>
          <AutheticationIconBox>
            <IconAuthetication />
          </AutheticationIconBox>
          <TypoSubtitle variant="body1">Cloud Modernization</TypoSubtitle>
        </MultiFactorBox>
        <MobileDeviceBox>
          <MobileDeviceIconBox>
            <IconMobileDevice src="/images/banner/cms.png" alt="CMS" height={30} width={30}/>
          </MobileDeviceIconBox>
          <TypoSubtitle variant="body1">CMS Engineering</TypoSubtitle>
        </MobileDeviceBox>
      </LastSideDetails>
    </MainContainter>
  );
};

export default BannerTemplate;
