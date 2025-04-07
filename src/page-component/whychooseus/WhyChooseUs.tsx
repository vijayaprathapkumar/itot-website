/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Box, Grid, Modal } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  BackgroundBox,
  ButtonAnimate,
  CallSupportIcon,
  IconBox,
  IframeVideo,
  ImageChooseUs,
  ImageChooseUsBackground,
  ImageChooseUsBackgroundsub,
  ImageSrc,
  MainBoxWrapper,
  MainIconBox,
  MainWrapper,
  PlayButton,
  PlayButtonIcon,
  ServiceIcon,
  ShapeImage,
  SuccessHedTypo,
  TitleDescription,
  TitleHead,
  WhyChooseUsAreBox,
  WhyChooseUsAreTypo,
} from "./WhyChooseUs.styled";
import { IoMdClose } from "react-icons/io";

const WhyChooseUs = () => {
  const [isOpen, setOpen] = useState(false);
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
    <MainWrapper ref={sectionRef} className={isVisible ? "animate" : ""}>
      <PlayButton>
        <ButtonAnimate
          onClick={() => setOpen(true)}
          sx={{
            width: { xs: 60, md: 100, lg: 100, xl: 80 },
            height: { xs: 60, md: 100, lg: 100, xl: 80 },
            borderRadius: "50%",
            backgroundColor: "#3c72fc",
            color: "white",
            "&:hover": { backgroundColor: "primary.dark" },
          }}
        >
          <PlayButtonIcon />
        </ButtonAnimate>
      </PlayButton>
      <MainBoxWrapper>
        <ShapeImage
          src={"/images/banner/choose-shape-left.png"}
          alt="shape"
          height={100}
          width={100}
        />
        <Grid>
          <WhyChooseUsAreBox>
            <ImageSrc
              src="/images/whoweare/section-title.png"
              alt="section"
              height={15}
              width={33}
            />
            <WhyChooseUsAreTypo variant="h6">WHY CHOOSE US</WhyChooseUsAreTypo>
          </WhyChooseUsAreBox>
          <SuccessHedTypo variant="h4">
            Ensuring Your Success Through Reliable IT Solutions
          </SuccessHedTypo>
          <MainIconBox>
            <Box display="flex">
              <IconBox>
                <ServiceIcon />
              </IconBox>
              <Box ml={2}>
                <TitleHead variant="h6">Expertise:</TitleHead>
                <TitleDescription variant="body2">
                  With years of experience in both IT and OT, our team possesses
                  the technical knowledge and practical skills to deliver
                  effective solutions that address the unique needs of each
                  client.
                </TitleDescription>
              </Box>
            </Box>

            <Box display="flex">
              <IconBox>
                <CallSupportIcon />
              </IconBox>
              <Box ml={2}>
                <TitleHead variant="h6">Innovation:</TitleHead>
                <TitleDescription variant="body2">
                  We are committed to staying at the forefront of technology
                  trends, continuously exploring new ideas and approaches to
                  enhance our services and provide cutting-edge solutions.
                </TitleDescription>
              </Box>
            </Box>
            <Box display="flex">
              <IconBox>
                <ServiceIcon />
              </IconBox>
              <Box ml={2}>
                <TitleHead variant="h6">Reliability: </TitleHead>
                <TitleDescription variant="body2">
                  We pride ourselves on our reliability and consistency,
                  ensuring that every project is completed to the highest
                  standards and within the agreed timeframe.
                </TitleDescription>
              </Box>
            </Box>
            <Box display="flex">
              <IconBox>
                <ServiceIcon />
              </IconBox>
              <Box ml={2}>
                <TitleHead variant="h6">Client-Centric Approach: </TitleHead>
                <TitleDescription variant="body2">
                  Our focus is always on our clients' success. We work closely
                  with each client to understand their specific requirements and
                  tailor solutions that deliver measurable results.
                </TitleDescription>
              </Box>
            </Box>
            <Box display="flex">
              <IconBox>
                <ServiceIcon />
              </IconBox>
              <Box ml={2}>
                <TitleHead variant="h6">Sustainability: </TitleHead>
                <TitleDescription variant="body2">
                  We believe in the importance of sustainable growth and strive
                  to help our clients achieve their environmental goals through
                  efficient and eco-friendly solutions.
                </TitleDescription>
              </Box>
            </Box>
          </MainIconBox>
        </Grid>
        <Box>
          <BackgroundBox>
            <ImageChooseUsBackground
              src="/images/whychooseus/choose-shape-right.png"
              alt="Choose Us"
            />
          </BackgroundBox>
          <BackgroundBox>
            <ImageChooseUsBackgroundsub
              src="/images/whychooseus/choose-shape-right2.png"
              alt="Choose Us"
            />
          </BackgroundBox>
          <ImageChooseUs
            src="/images/whychooseus/choose-image1.png"
            alt="Choose Us"
            width={500}
            height={400}
          />
        </Box>
      </MainBoxWrapper>

      <Modal open={isOpen} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            p: 2,
            borderRadius: 2,
            zIndex: 9999,
          }}
        >
          <IoMdClose
            style={{
              float: "right",
              fontSize: "30px",
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={() => setOpen(false)}
          />
          <IframeVideo
            width="800"
            height="515"
            src="https://www.youtube.com/embed/iVqz_4M5mA0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></IframeVideo>
        </Box>
      </Modal>
    </MainWrapper>
  );
};

export default WhyChooseUs;
