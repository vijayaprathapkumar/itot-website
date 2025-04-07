/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ButtonStarted,
  ContentBox,
  DescriptionText,
  ImageBanner,
  MainBannerBox,
  TitleHead,
} from "./BannerItot.styled";
import Box from "@mui/material/Box";
import Link from "next/link";

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
        <TitleHead variant="h2">
          Smart Solutions. Seamless Connections. Boundless Future.
        </TitleHead>
        <DescriptionText variant="body1">
          We create smart, integrated solutions, connecting your business to the
          digital future.
        </DescriptionText>
        <Link href="/contactUs">
          <ButtonStarted variant="contained">Let’s Talk</ButtonStarted>
        </Link>
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
