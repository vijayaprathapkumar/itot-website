/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useRef, useState } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import { caseStudies } from "@/config/caseStudy/CaseStudy";
import {
  CaptionStyled,
  CaseStudyCard,
  Container,
  HeadingWarrper,
  Overlay,
  SectionTitle,
  SwiperBoxWarpper,
  ViewAllButton,
} from "./CaseStudy.styled";
import Link from "next/link";
import { ImageSrc } from "../whoweare/WhoWeAre.styled";

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
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
      <HeadingWarrper>
        <Box>
          <ImageSrc
            src="/images/case/section-title.png"
            alt="section"
            height={15}
            width={33}
          />
          <CaptionStyled variant="caption" sx={{ color: "#0d47a1" }}>
            FROM OUR CASE STUDIES
          </CaptionStyled>
          <SectionTitle>We Delivered Best Solution</SectionTitle>
        </Box>
        <Box mt={4}>
          <ViewAllButton
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "View Less" : "View All Case"}
          </ViewAllButton>
        </Box>
      </HeadingWarrper>

      <SwiperBoxWarpper>
        {showAll ? (
          <Grid container spacing={3}>
            {caseStudies.map((study, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <CaseStudyCard
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Image
                    src={study.img}
                    alt={study.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <Overlay>
                    <Typography variant="caption" sx={{ color: "#64b5f6" }}>
                      {study.category}
                    </Typography>
                    <Typography variant="h6" fontWeight="bold">
                      {study.title}
                    </Typography>
                    {hoveredIndex === index && (
                      <Link href={study.path}>
                        <Button
                          variant="contained"
                          sx={{
                            position: "absolute",
                            bottom: 20,
                            right: 20,
                            background:
                              "linear-gradient(90deg, #3c72fc -10.59%, #00060c 300.59%)",
                          }}
                          color="primary"
                        >
                          <ArrowForwardIcon />
                        </Button>
                      </Link>
                    )}
                  </Overlay>
                </CaseStudyCard>
              </Grid>
            ))}
          </Grid>
        ) : (
          // Swiper when "View All" is NOT clicked
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4 },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            style={{ paddingBottom: "50px" }}
          >
            {caseStudies.map((study, index) => (
              <SwiperSlide key={index}>
                <CaseStudyCard
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Image
                    src={study.img}
                    alt={study.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <Overlay>
                    <Typography variant="caption" sx={{ color: "#64b5f6" }}>
                      {study.category}
                    </Typography>
                    <Typography variant="h6" fontWeight="bold">
                      {study.title}
                    </Typography>
                    {(index === activeIndex || index === hoveredIndex) && (
                      <Link href={study.path}>
                        <Button
                          variant="contained"
                          sx={{
                            position: "absolute",
                            bottom: 20,
                            right: 20,
                            background:
                              "linear-gradient(90deg, #3c72fc -10.59%, #00060c 300.59%)",
                          }}
                          color="primary"
                        >
                          {" "}
                          <ArrowForwardIcon />
                        </Button>
                      </Link>
                    )}
                  </Overlay>
                </CaseStudyCard>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </SwiperBoxWarpper>
    </Container>
  );
};
export default CaseStudies;
