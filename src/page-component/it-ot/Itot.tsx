"use client";

import { Box } from "@mui/material";
import React from "react";
import {
  MainHeadText,
  BodyText,
  MainBox,
  ItCircleImage,
  OtCircleImage,
  ConnectCircleImage,
  ImageBox,
  ServiceOtText,
  ServiceItText,
  AdaptiveBox,
  AdaptiveIconBox,
  AutheticationIconBox,
  EndpointBox,
  EndpointIconBox,
  IconAdaptive,
  IconAuthetication,
  IconEndpoint,
  IconIdentity,
  IconMobileDevice,
  IconPassword,
  IdentityBox,
  IdentityIconBox,
  MobileDeviceBox,
  MobileDeviceIconBox,
  MultiFactorBox,
  PasswordBox,
  PasswordIconBox,
  TypoSubtitle,
  ContainerBox,
  BmsBox,
  BmsIconBox,
  TypoOtSubtitle,
  IconBms,
  SystemIntegratedBox,
  SystemIntegratedIconBox,
  IconSystemIntegrated,
  HomeAutomationBox,
  HomeAutomationIconBox,
  IconHomeAutomation,
  IandPAnutomationBox,
  IandPAnutomationIconBox,
  IconIandPAnutomation,
  EneregyBox,
  EneregyIconBox,
  IconEneregy,
  AbbrevationTextIt,
  AbbrevationTextOt,
} from "./Itot.styled";

const Itot = () => {
  return (
    <Box>
      <MainBox>
        <MainHeadText variant="h3">
          See What ITOT Offers Your Business
        </MainHeadText>
        <BodyText variant="body1">
          Info-Tech provides a one-stop solution for all your HR and Accounting
          needs. Our HR Software & Accounting Software enhances productivity for
          businesses by streamlining their processes.
        </BodyText>
        <BodyText variant="body1">
          Experience seamless HR & Accounting software that integrates all
          essential features to accelerate your business operations. With
          ITOT&apos;s software, your entire operations can be automated.
        </BodyText>
      </MainBox>
      <ContainerBox>
        <Box>
          <AdaptiveBox>
            <TypoSubtitle variant="body1">
              Application Revitalization
            </TypoSubtitle>
            <AdaptiveIconBox>
              <IconAdaptive />
            </AdaptiveIconBox>
          </AdaptiveBox>
          <PasswordBox>
            <TypoSubtitle variant="body1">Modular Engineering</TypoSubtitle>
            <PasswordIconBox>
              <IconPassword />
            </PasswordIconBox>
          </PasswordBox>
          <IdentityBox>
            <TypoSubtitle variant="body1">UI/UX Design</TypoSubtitle>
            <IdentityIconBox>
              <IconIdentity
                src="/images/banner/ui-ux.png"
                alt="ui-ux"
                height={30}
                width={30}
              />
            </IdentityIconBox>
          </IdentityBox>
          <EndpointBox>
            <TypoSubtitle variant="body1">AI & Data Intelligence</TypoSubtitle>
            <EndpointIconBox>
              <IconEndpoint />
            </EndpointIconBox>
          </EndpointBox>
          <MultiFactorBox>
            <TypoSubtitle variant="body1">Cloud Modernization</TypoSubtitle>
            <AutheticationIconBox>
              <IconAuthetication />
            </AutheticationIconBox>
          </MultiFactorBox>
          <MobileDeviceBox>
            <TypoSubtitle variant="body1">CMS Engineering</TypoSubtitle>
            <MobileDeviceIconBox>
              <IconMobileDevice
                src="/images/banner/cms.png"
                alt="CMS"
                height={30}
                width={30}
              />
            </MobileDeviceIconBox>
          </MobileDeviceBox>
        </Box>
        <ImageBox>
          <Box>
            <ServiceItText variant="h6">
              IT
              <AbbrevationTextIt variant="body1">
                (Informational Technology)
              </AbbrevationTextIt>
            </ServiceItText>
            <ItCircleImage
              src={"/images/itot/blue.png"}
              alt="IT"
              height={100}
              width={100}
            />
          </Box>
          <Box>
            <ConnectCircleImage
              src={"/images/itot/white.png"}
              alt="Connect"
              height={100}
              width={100}
            />
          </Box>
          <Box>
            <ServiceOtText variant="h6">
              0T{" "}
              <AbbrevationTextOt variant="body1">
                (Operational Technology)
              </AbbrevationTextOt>
            </ServiceOtText>
            <OtCircleImage
              src={"/images/itot/yellow.png"}
              alt="OT"
              height={100}
              width={100}
            />
          </Box>
        </ImageBox>
        <Box>
          <BmsBox>
            <BmsIconBox>
              <IconBms />
            </BmsIconBox>
            <TypoOtSubtitle variant="body1">Integrated BMS</TypoOtSubtitle>
          </BmsBox>
          <SystemIntegratedBox>
            <SystemIntegratedIconBox>
              <IconSystemIntegrated />
            </SystemIntegratedIconBox>
            <TypoOtSubtitle variant="body1">System Integrated</TypoOtSubtitle>
          </SystemIntegratedBox>
          <HomeAutomationBox>
            <HomeAutomationIconBox>
              <IconHomeAutomation />
            </HomeAutomationIconBox>
            <TypoOtSubtitle variant="body1">
              Manufacturing Execution Systems (MES)
            </TypoOtSubtitle>
          </HomeAutomationBox>
          <IandPAnutomationBox>
            <IandPAnutomationIconBox>
              <IconIandPAnutomation />
            </IandPAnutomationIconBox>
            <TypoOtSubtitle variant="body1">
              Industrial and Process Automation
            </TypoOtSubtitle>
          </IandPAnutomationBox>
          <EneregyBox>
            <EneregyIconBox>
              <IconEneregy />
            </EneregyIconBox>
            <TypoOtSubtitle variant="body1">Energy Management</TypoOtSubtitle>
          </EneregyBox>
        </Box>
      </ContainerBox>
    </Box>
  );
};

export default Itot;
