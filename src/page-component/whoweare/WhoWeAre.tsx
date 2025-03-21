/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import {
  CircleCheckIcon,
  DescriptionTypo,
  EnsureBox,
  GridMain,
  GridTypo,
  ImageBig,
  ImageCircle,
  ImageDot,
  ImageFiveBox,
  ImageFourBox,
  ImageOneBox,
  ImageSixBox,
  ImageSrc,
  ImageSub,
  ImageThreeBox,
  ImageTwoBox,
  ListItemTypo,
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
    <Box sx={{ p: {xs: 3, lg:15} }} ref={sectionRef} className={isVisible ? "animate" : ""}>
      <ImageOneBox>
        <Image
          src="/images/whoweare/about-two-shape.png"
          alt="shape"
          priority
          height={500}
          width={500}
        />
      </ImageOneBox>
      <Container>
        <Grid container spacing={4} >
          <Grid item xs={12} md={6}>
            <Box sx={{marginTop:{md:"130px"}}}>
              <ImageTwoBox>
                <ImageDot
                  src="/images/whoweare/about-two-dot.png"
                  alt="shape"
                  height={120}
                  width={50}
                />
              </ImageTwoBox>
              <ImageThreeBox>
                <Image
                  src="/images/whoweare/about-circle-helper.png"
                  alt="shape"
                  height={50}
                  width={50}
                />
              </ImageThreeBox>
              <ImageFourBox>
                <ImageBig
                  src="/images/whoweare/about-two-image1.jpg"
                  alt="Image"
                  height={600}
                  width={450}
                />
              </ImageFourBox>
              <ImageFiveBox>
                <ImageSub
                  src="/images/whoweare/about-two-image2.png"
                  alt="Image"
                  height={380}
                  width={340}
                />
              </ImageFiveBox>
              <ImageSixBox>
                <ImageCircle
                  src="/images/whoweare/about-two-circle.png"
                  alt="shape"
                  height={500}
                  width={500}
                />
              </ImageSixBox>
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
                Genpixels is a software development and digital marketing
                company, delivering customized digital solutions for businesses
                worldwide. More than just a tech provider, Genpixels is a
                trusted partner dedicated to creating transformative digital
                experiences through innovation.
              </DescriptionTypo>
              <DescriptionTypo variant="body1">
                Our company was founded in 2021 by enthusiastic developers who
                wanted to pursue their passions for marketing and information
                technology while also creating a fun work environment.
              </DescriptionTypo>
              <DescriptionTypo variant="body1">
                Every company is distinct; hence we really think that there is
                no one-size-fits-all answer. Making informed decisions requires
                reliable data, which is why we are committed to offer customized
                software solutions that empower businesses to collect, organize,
                and analyze data effectively, gaining deeper insights into their
                operational landscape.
              </DescriptionTypo>
            </EnsureBox>
            <GridMain>
              <Grid mt={3}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CircleCheckIcon />
                    </ListItemIcon>
                    <ListItemTypo variant="body1">
                      Technology Consultancy
                    </ListItemTypo>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleCheckIcon />
                    </ListItemIcon>
                    <ListItemTypo variant="body1">
                       We Provide Best Services
                    </ListItemTypo>
                  </ListItem>
                </List>
              </Grid>
              <GridTypo>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CircleCheckIcon />
                    </ListItemIcon>
                    <ListItemTypo variant="body1">
                      Maintenance And Support
                    </ListItemTypo>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleCheckIcon />
                    </ListItemIcon>
                    <ListItemTypo variant="body1">
                      Requirements Gathering
                    </ListItemTypo>
                  </ListItem>
                </List>
              </GridTypo>
            </GridMain>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhoWeAre;
