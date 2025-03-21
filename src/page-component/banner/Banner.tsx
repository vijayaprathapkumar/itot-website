/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  DashboardBox,
  DescriptionTypo,
  DotIcon,
  InfoBox,
  MainBannerBox,
  MainHeadTypo,
  MainSpinBox,
  RotateBox,
  RotatingContainer,
  StackBanner,
} from "./Banner.styled";
import { icons } from "@/config/banner/Banner";

const Banner = () => {
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
                <InfoBox>
                    <Box>
                        <DotIcon
                            src="/images/banner/image.png"
                            alt="dots"
                            height={60}
                            width={60}
                        />
                    </Box>
                    <Box>
                        <MainHeadTypo variant="h6">Technology</MainHeadTypo>
                    </Box>
                    <Box>
                        <DescriptionTypo variant="body1">
                            Bring together all of your disparate data source from multiple
                            applications, servers, instruments, and storage facilities into
                            one cohesive unit. Initiate focused marketing campaigns using your
                            preferred marketing tools. Relocate product information to the
                            warehouse that best aligns with your requirements.
                        </DescriptionTypo>
                    </Box>
                </InfoBox>
                <Box>
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
                                        sx={{
                                            transform: {
                                                xs: `rotate(${(index / icons.length) * 360
                                                    }deg) translateY(-120px)`,
                                                md: `rotate(${(index / icons.length) * 360
                                                    }deg) translateY(-170px)`,
                                            },
                                        }}
                                    />
                                );
                            })}
                        </RotatingContainer>
                        <DashboardBox>
                            <Box
                                component="img"
                                src="/images/banner/tech.jpg"
                                alt="Dashboard"
                                sx={{ width: { xs: 50, md: 100 }, height: {xs: 50, md: 100}, borderRadius: 50 }}
                            />
                        </DashboardBox>
                    </MainSpinBox>
                </Box>
            </StackBanner>
        </MainBannerBox>
    );
};

export default Banner;
