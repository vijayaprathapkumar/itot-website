"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  HeadingStyled,
  ImagesStyled,
  HeadingTypo,
  TitleTypo,
  MainWrapper,
  PlanWrapper,
  BasicPalnTypo,
  AmountTypo,
  MonthTypo,
  ImageBgIcon,
  RupeeIcon,
  ImageIcon,
  BorderBox,
  ListBox,
  LiTypo,
  ButtonPlan,
  ImageBox,
  ImageCircle,
  DispalyBox,
} from "./Plans.styled";
import { Box } from "@mui/material";
import { FaLongArrowAltRight } from "react-icons/fa";
import { plansData } from "@/config/pricing/Pricing";

const Plans = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentSection = sectionRef.current;

    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(currentSection);

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);
  return (
    <MainWrapper ref={sectionRef} className={isVisible ? "animate" : ""}>
      <HeadingStyled>
        <ImagesStyled
          src={"/images/process/section.webp"}
          alt="no Images"
          width={28}
          height={12}
        />
        <HeadingTypo>PRICE PLANS</HeadingTypo>
      </HeadingStyled>
      <TitleTypo>Flexible Pricing Plans</TitleTypo>
      <DispalyBox>
        {plansData.map((plan) => (
          <PlanWrapper key={plan.id}>
            <ImageCircle
              src={plan.shape}
              alt="shape"
              height={330}
              width={150}
            />
            <BorderBox>
              <Box>
                <BasicPalnTypo variant="h6">{plan.name}</BasicPalnTypo>
                <AmountTypo variant="h4">
                  <RupeeIcon /> {plan.price}
                  <MonthTypo variant="body1"> /monthly</MonthTypo>
                </AmountTypo>
              </Box>
              <ImageBox>
                <ImageBgIcon
                  src={plan.iconBg}
                  alt="icon-bg"
                  height={100}
                  width={100}
                />
                <ImageIcon src={plan.icon} alt="icon" height={40} width={40} />
              </ImageBox>
            </BorderBox>
            <ListBox>
              <ul>
                {plan.features.map((feature, index) => (
                  <LiTypo key={index}>{feature}</LiTypo>
                ))}
              </ul>
            </ListBox>
            <ButtonPlan>
              Choose Plan{" "}
              <FaLongArrowAltRight
                style={{ marginLeft: "10px", fontSize: "20px" }}
              />
            </ButtonPlan>
          </PlanWrapper>
        ))}
      </DispalyBox>
    </MainWrapper>
  );
};

export default Plans;
