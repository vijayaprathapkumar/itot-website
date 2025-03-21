/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { usePathname } from "next/navigation";
import { Box, Typography } from "@mui/material";
import { teamDetails } from "@/config/team/Team";
import { Facebook, LinkedIn } from "@mui/icons-material";
import {
  CheckIcon,
  ContentContainer,
  DepartmentHeading,
  DescriptionHeading,
  ImageContainer,
  MainContainer,
  NameHeading,
  PaintImage,
  ProfileImage,
  ResponsibilityContainer,
  ResponsibilityItem,
  RoleName,
  SocialContainer,
  SquareImage,
  StyledIconButton,
  SubPanel,
} from "./TeamDetails.styled";
import { useEffect, useRef, useState } from "react";

const TeamDetails = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const memberName = decodeURIComponent(
    pathname.split("/").pop() || ""
  ).replace(/-/g, " ");

  const content = teamDetails.find(
    (member) => member.name.toLowerCase() === memberName.toLowerCase()
  );

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

  if (!content) {
    return <Typography>No team member found</Typography>;
  }

  return (
    <MainContainer ref={sectionRef} className={isVisible ? "animate" : ""}>
      <ImageContainer>
        <ProfileImage
          src={content.image}
          alt={content.name}
          height={400}
          width={300}
        />
        <PaintImage
          src={content.image1}
          alt={content.name}
          height={156}
          width={220}
        />
        <SquareImage
          src={content.image2}
          alt={content.name}
          height={139}
          width={122}
        />
        <SocialContainer>
          <StyledIconButton hovercolor="#0d5bcc">
            <Facebook />
          </StyledIconButton>
          <StyledIconButton hovercolor="#005582">
            <LinkedIn />
          </StyledIconButton>
        </SocialContainer>
      </ImageContainer>
      <ContentContainer>
        <SubPanel>
          <Box>
            <NameHeading>{content.name}</NameHeading>
            <RoleName>{content.role}</RoleName>
          </Box>
        </SubPanel>
        <DescriptionHeading
          dangerouslySetInnerHTML={{ __html: content.Description }}
        />
        <DepartmentHeading>Expertise & Focus Areas</DepartmentHeading>
        <Box>
          <ResponsibilityContainer>
            {content.responsibility.map((item, index) => (
              <ResponsibilityItem key={index}>
                <CheckIcon /> {item}
              </ResponsibilityItem>
            ))}
          </ResponsibilityContainer>
        </Box>
      </ContentContainer>
    </MainContainer>
  );
};

export default TeamDetails;
