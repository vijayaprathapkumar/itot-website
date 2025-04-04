/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Box, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import {
  ButtonStyled,
  CallerIcon,
  ContactFormBox,
  ContactInfoBox,
  ContactMainBox,
  ContactPara,
  ContactTitle,
  EmailPara,
  HeadingSpan,
  HeadingStyled,
  InputRow,
  LocationHeading,
  LocationPara,
  MessageIcon,
  Parastyled,
  SecondSubPanel,
  SubPanelBox,
  TextAreaStyle,
} from "./ContactUs.styled";

export const ContactUs = (props: {
  handleChange: any;
  handleSubmit: any;
  formData: any;
}) => {
  const { handleChange, handleSubmit, formData } = props;
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
    <ContactMainBox ref={sectionRef} className={isVisible ? "animate" : ""}>
      <SubPanelBox>
        <HeadingStyled>
          Contact <HeadingSpan>With Us</HeadingSpan>
        </HeadingStyled>
        <Parastyled>
          Unleash your digital potential with ITOT - Start your transformation
          journey today!
        </Parastyled>

        <ContactInfoBox>
          <MessageIcon />
          <Box>
            <Box>
              <a
                href="mailto:sales@itot.sg"
                style={{ textDecoration: "none", color: "inherit" }}
                target="_blank"
              >
                <ContactPara sx={{ fontFamily: "Poppins, sans-serif" }}>
                  info@itot.sg,
                </ContactPara>
              </a>
            </Box>
            <Box>
              <a
                href="mailto:contacts@itot.sg"
                style={{ textDecoration: "none", color: "inherit" }}
                target="_blank"
              >
                <ContactPara sx={{ fontFamily: "Poppins, sans-serif" }}>
                  contacts@itot.sg,
                </ContactPara>
              </a>
            </Box>
            <Box>
              <a
                href="mailto:sales@itot.sg;"
                style={{ textDecoration: "none", color: "inherit" }}
                target="_blank"
              >
                <ContactPara sx={{ fontFamily: "Poppins, sans-serif" }}>
                  sales@itot.sg
                </ContactPara>
              </a>
            </Box>
          </Box>
        </ContactInfoBox>
        <ContactInfoBox>
          <CallerIcon />
          <ContactPara>+91 8940030201</ContactPara>
        </ContactInfoBox>

        <Box display="flex" gap={4} sx={{ marginTop: "50px" }}>
          <Box>
            <ContactInfoBox>
              <LocationHeading>Office Location</LocationHeading>
              <ArrowDownwardOutlinedIcon sx={{ marginTop: "-15px" }} />
            </ContactInfoBox>
            <LocationPara>23,Fernvale Road, Singapore, 797638</LocationPara>
          </Box>
          {/* <Box>
            <ContactInfoBox>
              <LocationHeading>Office Location</LocationHeading>
              <ArrowDownwardOutlinedIcon sx={{ marginTop: "-15px" }} />
            </ContactInfoBox>
            <LocationPara>Lakshmi Mills, Coimbatore</LocationPara>
          </Box> */}
        </Box>
      </SubPanelBox>

      <SecondSubPanel>
        <ContactTitle>Contact Us</ContactTitle>
        <EmailPara>
          Your email address will not be published. Required fields are marked *
        </EmailPara>
        <form onSubmit={handleSubmit}>
          <ContactFormBox>
            <InputRow>
              <TextField
                fullWidth
                label="Your Name*"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Email Address*"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </InputRow>
            <TextAreaStyle
              label="Enter Your Message here"
              fullWidth
              variant="outlined"
              multiline
              rows={10}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <ButtonStyled type="submit">Send Message</ButtonStyled>
          </ContactFormBox>
        </form>
      </SecondSubPanel>
    </ContactMainBox>
  );
};

export default ContactUs;
