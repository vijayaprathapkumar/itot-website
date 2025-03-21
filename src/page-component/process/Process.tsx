/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { processCards } from "@/config/process/Process";
import { Box, Card, CardContent, Grid, } from "@mui/material";
import {
  AnimatedTypography,
  ArrowImage,
  BadgeStyle,
  Container,
  HeadingStyled,
  HeadingTypo,
  ImageContainer,
  ImagesStyled,
  TitleTypo,
} from "./Process.styled";
import { useState, useRef, useEffect } from "react";

const Process = () => {
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
    <Container ref={sectionRef} className={isVisible ? "animate" : ""}>
      <HeadingStyled>
        <ImagesStyled
          src={"/images/process/section.webp"}
          alt="no Images"
          width={28}
          height={12}
        />
        <HeadingTypo>Work Process</HeadingTypo>
      </HeadingStyled>
      <TitleTypo>Our Development Process</TitleTypo>

      <Box sx={{ marginTop: "40px" }}>
        <Grid container spacing={4} justifyContent="center">
          {processCards.map((card) => (
            <Grid item xs={12} sm={6} lg={3} key={card.id}>
              <Card
                sx={{
                  borderRadius: 0,
                  boxShadow: 0,
                  textAlign: "center",
                  position: "relative",
                  p: 2,
                  width: "100%",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <ImageContainer>
                    <AnimatedTypography
                      variant="h6"
                      fontWeight="bold"
                      mt={1}
                    >
                      {card.title}
                    </AnimatedTypography>
                  </ImageContainer>

                  <BadgeStyle>{card.id}</BadgeStyle>
                </Box>
                <CardContent>
                  <AnimatedTypography
                    variant="body1"
                    mt={1}
                  >
                    {card.description}
                  </AnimatedTypography>
                  {/* <AnimatedsubTypography
                    variant="body1"
                    color="text.secondary"
                    mt={2}
                  >
                    In a free hour, when our power of choice is untrammelled and
                    when nothing prevents dolor sit amet, consectetur.
                  </AnimatedsubTypography> */}
                </CardContent>
              </Card>
              {card.arrImage && (
                <ArrowImage src={card.arrImage} alt="arrow" height={50} width={50} />
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Process;
