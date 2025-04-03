/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  LayoutContainer,
  Sidebar,
  ServiceItem,
  ArrowBox,
  MainContent,
  SectionContainer,
  TitleTypography,
  MainImg,
  MainVideo,
  SubImg,
} from "./DigitalMarketing.styled";
import {
  digitalMarketing,
  digitalMarketingData,
} from "@/config/digitalMarketing/DigitalMarketing";

const DigitalMarketing = () => {
  const [selectedService, setSelectedService] = useState(digitalMarketing[0]);

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

  const handleServiceClick = (service: string) => {
    setSelectedService(service);
  };

  const currentServiceData = digitalMarketingData[selectedService];

  const [videoSrc, setVideoSrc] = useState(currentServiceData.video || "");

  useEffect(() => {
    setVideoSrc(currentServiceData.video || "");
  }, [selectedService]);

  return (
    <Box
      sx={{ padding: {xs: 5, md: 7}}}
      ref={sectionRef}
      className={isVisible ? "animate" : ""}
    >
      <LayoutContainer>
        {/* Sidebar */}
        <Sidebar>
          <Box mt={2}>
            {digitalMarketing.map((service, index) => (
              <ServiceItem
                key={index}
                onClick={() => handleServiceClick(service)}
                style={{
                  cursor: "pointer",
                  color: selectedService === service ? "white" : "#101c2a",
                  backgroundColor:
                    selectedService === service ? "rgb(55, 81, 126)" : "#f0f8ff",
                }}
              >
                <Typography variant="body1">{service}</Typography>
                <ArrowBox
                  className="arrow"
                  style={{
                    backgroundColor:
                      selectedService === service ? "white" : "transparent",
                    color: selectedService === service ? "rgb(55, 81, 126)" : "#101c2a",
                  }}
                >
                  <FaArrowRightLong />
                </ArrowBox>
              </ServiceItem>
            ))}
            {/* <Link href={"/plans"} style={{ textDecoration: "none" }}>
              <ServiceItem>
                <Typography variant="body1">View Plan</Typography>{" "}
                <ArrowBox className="arrow">
                  <FaArrowRightLong />
                </ArrowBox>
              </ServiceItem>
            </Link> */}
          </Box>
        </Sidebar>

        {/* Main Content */}
        <MainContent>
          <MainImg
            src={currentServiceData.image}
            alt={currentServiceData.title}
          />
          <Box mt={2}>
            <TitleTypography variant="h4" fontWeight="bold" mb={2}>
              {currentServiceData.title}
            </TitleTypography>
            <Typography variant="body1" color="textSecondary">
              {currentServiceData.description}
            </Typography>
          </Box>

          <SectionContainer>
            <Box>
              {videoSrc ? ( 
                <Box>
                  <MainVideo key={videoSrc} controls autoPlay loop>
                    <source src={videoSrc} type="video/mp4" />
                  </MainVideo>
                </Box>
              ) : currentServiceData.subImage ? (
                <SubImg
                  src={currentServiceData.subImage}
                  alt="Marketing Team"
                  width={520}
                  height={450}
                  style={{ objectFit: "contain" }}
                />
              ) : null}
            </Box>
          </SectionContainer>
        </MainContent>
      </LayoutContainer>
    </Box>
  );
};

export default DigitalMarketing;
