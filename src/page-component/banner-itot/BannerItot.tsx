/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  ButtonStarted,
  ContentBox,
  DescriptionText,
  ImageBanner,
  MainBannerBox,
  TitleHead,
} from "./BannerItot.styled";
import Image from "next/image";

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
      <ContentBox>
        <TitleHead variant="h2">Better Solutions For Your Business</TitleHead>
        <DescriptionText variant="body1">
          We are team of talented designers making websites with Bootstrap
        </DescriptionText>
        <ButtonStarted variant="contained">Get Started</ButtonStarted>
      </ContentBox>
      <Box>
        <ImageBanner
          src="/images/banner/hero-img.png"
          alt="banner"
          height={300}
          width={300}
        />
      </Box>
    </MainBannerBox>
  );
};

export default BannerItot;
