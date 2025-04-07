/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import {
  DescriptionBodyText,
  DescriptionTypo,
  EnsureBox,
  ImageBig,
  ImageFiveBox,
  ImageFourBox,
  ImageSrc,
  ImageSub,
  MainBox,
  SubHedTypo,
  SuccessHedTypo,
  WhoWeAreBox,
  WhoWeAreTypo,
} from "./WhoWeAre.styled";

const WhoWeAre = () => {
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
    <MainBox
      sx={{ p: { xs: 3, lg: 10 } }}
      ref={sectionRef}
      className={isVisible ? "animate" : ""}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ marginTop: { md: "390px" } }}>
              <ImageFourBox>
                <ImageBig
                  src="/images/whoweare/image1.avif"
                  alt="Image"
                  height={600}
                  width={450}
                />
              </ImageFourBox>
              <ImageFiveBox>
                <ImageSub
                  src="/images/whoweare/image2.jpg"
                  alt="Image"
                  height={380}
                  width={340}
                />
              </ImageFiveBox>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <EnsureBox>
              <WhoWeAreBox>
                <ImageSrc
                  src="/images/whoweare/section-title.png"
                  alt="section"
                  height={15}
                  width={33}
                />
                <WhoWeAreTypo variant="h6">OUR STORY</WhoWeAreTypo>
              </WhoWeAreBox>
              <SuccessHedTypo variant="h4">
                Reliable IT Solutions and Digital Services
              </SuccessHedTypo>
              <DescriptionTypo variant="body1">
                ITOT empowers SMEs with tailored digital solutions, enhancing
                efficiency, scalability, and innovation in the digital age. By
                bridging technology and operations, we streamline processes,
                optimize resources, and unlock new opportunities for sustainable
                growth. Our expertise ensures businesses stay competitive,
                agile, and future-ready.
                <br />
                <br />
                We understand that in today&apos;s rapidly evolving landscape,
                businesses need integrated solutions to thrive. Our expertise
                lies in bridging the gap between digital and physical
                operations, enabling seamless data flow and optimized
                performance. We deliver comprehensive solutions tailored to meet
                the unique challenges of each client, driving efficiency,
                innovation, and sustainable growth.
                <br />
                <br />
                Our approach is rooted in a deep understanding of the synergy
                between IT and OT. Our OT expertise focuses on digitalizing your
                physical operations, driving efficiency and sustainability. We
                provide OT digitalization projects, energy management solutions,
                building management systems (BMS), manufacturing execution
                systems (MES), system integration, automation, and digital
                transformation consultancy.
                <br />
                <br />
                We are committed to building long-term partnerships with our
                clients, providing reliable and innovative solutions that drive
                lasting value. Our team of experienced professionals combines
                technical expertise with a passion for excellence, ensuring that
                every project is delivered to the highest standards.
              </DescriptionTypo>
              <Box>
                <SubHedTypo variant="h6">Our Mission</SubHedTypo>
                <DescriptionBodyText variant="body1">
                  To empower businesses through the strategic convergence of IT
                  and OT, driving efficiency, innovation, and sustainable
                  growth.
                </DescriptionBodyText>
              </Box>
              <Box>
                <SubHedTypo variant="h6">Our Vision</SubHedTypo>
                <DescriptionBodyText variant="body1">
                  To be a leading force in Southeast Asia, for integrated
                  technology solutions & innovations as well as transforming
                  businesses for the digital future.
                </DescriptionBodyText>
              </Box>
            </EnsureBox>
          </Grid>
        </Grid>
      </Container>
    </MainBox>
  );
};

export default WhoWeAre;
