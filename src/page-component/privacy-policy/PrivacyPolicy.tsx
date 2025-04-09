"use client"
import { Box, Typography } from "@mui/material";
import React from "react";
import { ContainerBox, PolicyDescriptionText, PolicyHeadText, PolicyUpdatedText } from "./PrivacyPolicy.styled";

const PrivacyPolicy = () => {
  return (
    <ContainerBox>
      <Box>
        <PolicyHeadText variant="h3">Privacy Policy</PolicyHeadText>
      </Box>
      <Box>
        <PolicyDescriptionText variant="body1">
          This Privacy Policy (Data Protection Notice) sets out the basis which
          ITOT Singapore Pte Ltd (“we”, “us”, or “our”) may collect, use,
          disclose or otherwise process personal data of our customers in
          accordance with the Personal Data Protection Act (“PDPA”). This Notice
          applies to personal data in our possession or under our control,
          including personal data in the possession of organisations which we
          have engaged to collect, use, disclose or process personal data for
          our purposes.
        </PolicyDescriptionText>
      </Box>
      <Box>
        <PolicyUpdatedText variant="body1">Updated on 8-Apr-2025</PolicyUpdatedText>
      </Box>
    </ContainerBox>
  );
};

export default PrivacyPolicy;
