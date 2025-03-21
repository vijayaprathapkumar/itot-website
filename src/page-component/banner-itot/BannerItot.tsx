/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  DescriptionTypo,
  GenBox,
  ImageDot,
  ImageDotBox,
  LinkingBorder,
  MainBannerBox,
  MainHeadTypo,
  RotateImage,
  StackBanner,
  SubDetailsBox,
  SubDetailsTypo,
  TypoDesc,
} from "./BannerItot.styled";

export const icons = [{ src: "/images/banner/hubspot.png", alt: "HubSpot" }];

const BannerItot = () => {
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
    <MainBannerBox ref={sectionRef} className={isVisible ? "animate" : ""}>
      <StackBanner>
        <Box>
          <ImageDotBox>
            <ImageDot
              src="/images/whoweare/about-two-dot.png"
              alt="shape"
              height={120}
              width={50}
            />
          </ImageDotBox>
          <GenBox>
            <RotateImage
              src="/images/logo/genpixels.png"
              alt="Dashboard"
              height={600}
              width={600}
            />
          </GenBox>
          <LinkingBorder></LinkingBorder>
          <SubDetailsBox>
            <Box>
              <SubDetailsTypo variant="h6">ITOT</SubDetailsTypo>
              <TypoDesc variant="body1">
                ITOT merges IT and OT in industrial settings to improve
                communication, efficiency, and decision-making. It enhances
                productivity, reduces downtime, and optimizes operational
                performance.
              </TypoDesc>
            </Box>
          </SubDetailsBox>
        </Box>
        {/* <Box>
          <MainSpinBox>
            <RotatingContainer>
              {icons.map((icon, index) => {
                return (
                  <RotateBox
                    key={index}
                    src={icon.src}
                    alt={icon.alt}
                    height={90}
                    width={90}
                  />
                );
              })}
            </RotatingContainer>
            <DashboardBox>
              <RotateImage
                src="/images/logo/genpixels.png"
                alt="Dashboard"
                height={600}
                width={600}

              />
            </DashboardBox>
          </MainSpinBox>
        </Box> */}
        <Box>
          <Box>
            <MainHeadTypo variant="h4">Mission</MainHeadTypo>
          </Box>
          <Box>
            <DescriptionTypo variant="body1">
              We aim to lead globally in tech and marketing by offering
              tailored, value-driven solutions that bridge business and
              technology.
            </DescriptionTypo>
          </Box>
          <Box>
            <MainHeadTypo variant="h4">Vision</MainHeadTypo>
          </Box>
          <Box>
            <DescriptionTypo variant="body1">
              Our Vision is to empower individuals and organizations with
              innovative digital marketing strategies and IT solutions that
              promote growth and build connection.
            </DescriptionTypo>
          </Box>
        </Box>
      </StackBanner>
    </MainBannerBox>
  );
};

export default BannerItot;
