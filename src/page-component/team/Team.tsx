/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { CardContent, CardMedia } from "@mui/material";
import { Facebook, LinkedIn } from "@mui/icons-material";
import {
  HeadingBox,
  HeadingTeam,
  HeadingTypo,
  IconStyle,
  MainPanel,
  Name,
  Overlay,
  Role,
  SocialIconsBox,
  SubPara,
  TeamCard,
  TeamGrid,
} from "./Team.styled";

import { useRouter } from "next/navigation";
import { teamMembers } from "@/config/team/Team";
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  link: string;
}
const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

  const handleClick = (member: TeamMember) => {
    router.push(
      `/teamDetails/${member.name.toLowerCase().replace(/\s+/g, "-")}`
    );
  };

  return (
    <MainPanel ref={sectionRef} className={isVisible ? "animate" : ""}>
      <HeadingBox>
        <HeadingTypo>
          <HeadingTeam>The Creative Force Behind Genpixels</HeadingTeam>
        </HeadingTypo>
        <SubPara>
          At Genpixels, we believe that every exceptional solution is driven by
          a team of passionate and committed experts. Our team is the foundation
          of our success, reflecting a culture of innovation, teamwork, and
          excellence that sets us apart.
        </SubPara>
      </HeadingBox>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            onClick={() => handleClick(member)}
            style={{ cursor: "pointer" }}
          >
            <CardMedia
              component="img"
              height="390"
              image={member.image}
              alt={member.name}
            />
            <Overlay className="overlay" />
            <SocialIconsBox className="social-icons">
              <Facebook sx={IconStyle} />
              <LinkedIn sx={IconStyle} />
            </SocialIconsBox>
            <CardContent>
              <Name>{member.name}</Name>
              <Role>{member.role}</Role>
            </CardContent>
          </TeamCard>
        ))}
      </TeamGrid>
    </MainPanel>
  );
};

export default Team;
