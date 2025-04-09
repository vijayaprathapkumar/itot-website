/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Box, Typography } from "@mui/material";
import {
  Container,
  LeftSection,
  RightSection,
  ServiceItem,
  ArrowBox,
  RightSection2,
  OpeningHoursItem,
  CheckCircleIconStyled,
  RightSideBox,
  TitleTypography,
} from "./Services.styled";
import { serviceContent } from "@/config/services/Services";
import { FiClock } from "react-icons/fi";
import Itot from "../it-ot/Itot";

const services = [
  "Application Revitalization",
  "Cloud Modernization & DevOps",
  "UI/UX Design",
  "AI & Data Intelligence Solutions",
  "Modular Engineering",
  "CMS Engineering",
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<string>(
    "Application Revitalization"
  );
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

  const handleServiceClick = (service: string) => {
    setSelectedService(service);
  };

  const content = serviceContent[selectedService];

  return (
    <Box>
      <Itot />
      <Container ref={sectionRef} className={isVisible ? "animate" : ""}>
        <LeftSection>
          {selectedService === "Cloud Modernization & DevOps" ? (
            <>
              <TitleTypography variant="h4" fontWeight="bold" mt={2}>
                {content.title}
              </TitleTypography>
              <Typography variant="h6" fontWeight="bold" mt={2}>
                {content.subTitle}
              </Typography>
              <Typography variant="body1" mt={2}>
                {content.description}
              </Typography>

              <Typography variant="h5" fontWeight="bold" mt={2}>
                Our Services
              </Typography>
              <Box mt={1}>
                {content.approach?.map((item, index) => (
                  <Box
                    sx={{ display: "flex", alignItems: "center" }}
                    mt={1}
                    key={index}
                  >
                    <Typography variant="body1">🔹 {item}</Typography>
                  </Box>
                ))}
              </Box>

              <Typography variant="h5" fontWeight="bold" mt={2}>
                Why Choose Us?
              </Typography>
              <Box mt={1}>
                {content.whyChooseUs?.map((item, index) => (
                  <Box
                    sx={{ display: "flex", alignItems: "center" }}
                    mt={1}
                    key={index}
                  >
                    <Typography variant="body1">✔ {item}</Typography>
                  </Box>
                ))}
              </Box>

              <Typography variant="h5" fontWeight="bold" mt={2}>
                Let’s Build a Future-Ready Cloud Strategy!
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }} mt={1}>
                <Typography variant="body1">
                  📞 Get a Free Consultation
                </Typography>
              </Box>
            </>
          ) : selectedService === "UI/UX Design" ? (
            <>
              <TitleTypography variant="h4" fontWeight="bold" mt={2}>
                {content.title}
              </TitleTypography>
              <Typography variant="h6" fontWeight="bold" mt={2}>
                {content.subTitle}
              </Typography>
              <Typography variant="body1" mt={2}>
                {content.description}
              </Typography>

              <Typography variant="h5" fontWeight="bold" mt={2}>
                Our UI/UX Design Process
              </Typography>
              <Box mt={1}>
                {content.process?.map((step, index) => (
                  <Box key={index} mt={2}>
                    <Typography variant="h6" fontWeight="bold">
                      ✅ {step.title}
                    </Typography>
                    <Typography variant="body1">{step.description}</Typography>
                    <Box mt={1}>
                      {step.details.map((detail, idx) => (
                        <Box sx={{ display: "flex" }} mt={1} key={idx}>
                          <Typography variant="body1">✔ {detail}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>

              <Typography variant="h5" fontWeight="bold" mt={2}>
                Why Choose Us?
              </Typography>
              <Box mt={1}>
                {content.whyChooseUs?.map((item, index) => (
                  <Box sx={{ display: "flex" }} mt={1} key={index}>
                    <Typography variant="body1">✔ {item}</Typography>
                  </Box>
                ))}
              </Box>

              <Typography variant="h5" fontWeight="bold" mt={2}>
                {content.callToAction}
              </Typography>
            </>
          ) : selectedService === "AI & Data Intelligence Solutions" ? (
            <>
              <TitleTypography variant="h4" fontWeight="bold" mt={2}>
                {content.title}
              </TitleTypography>
              <Typography variant="h6" fontWeight="bold" mt={2}>
                {content.subTitle}
              </Typography>
              <Typography variant="body1" mt={2}>
                {content.description}
              </Typography>

              <Typography variant="h5" fontWeight="bold" mt={2}>
                Our Core Services
              </Typography>
              <Box mt={1}>
                {content.coreServices?.map((service, index) => (
                  <Box key={index} mt={2}>
                    <Typography variant="h6" fontWeight="bold">
                      ✅ {service.title}
                    </Typography>
                    <Typography variant="body1">
                      {service.description}
                    </Typography>
                    <Box mt={1}>
                      {service.capabilities.map((capability, idx) => (
                        <Box sx={{ display: "flex" }} mt={1} key={idx}>
                          <Typography variant="body1">
                            🔹 {capability}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>

              <Typography variant="h5" fontWeight="bold" mt={2}>
                Why Choose Us?
              </Typography>
              <Box mt={1}>
                {content.whyChooseUs?.map((item, index) => (
                  <Box sx={{ display: "flex" }} mt={1} key={index}>
                    <Typography variant="body1">✔ {item}</Typography>
                  </Box>
                ))}
              </Box>

              <Typography variant="h5" fontWeight="bold" mt={2}>
                {content.callToAction}
              </Typography>
            </>
          ) : selectedService === "Modular Engineering" ? (
            <>
              <TitleTypography variant="h4" fontWeight="bold" mt={2}>
                {content.title}
              </TitleTypography>
              <Typography variant="h6" fontWeight="bold" mt={2}>
                {content.subTitle}
              </Typography>
              <Typography variant="body1" mt={2}>
                {content.description}
              </Typography>

              <Typography variant="h5" fontWeight="bold" mt={2}>
                Why Choose Our Modular Engineering Approach?
              </Typography>
              <Box mt={1}>
                {content.whyChooseApproach?.map((item, index) => (
                  <Box key={index} mt={2}>
                    <Typography variant="h6" fontWeight="bold">
                      ✅ {item.title}
                    </Typography>
                    <Typography variant="body1">{item.description}</Typography>
                    <Box mt={1}>
                      {item.details.map((detail, idx) => (
                        <Box sx={{ display: "flex" }} mt={1} key={idx}>
                          <Typography variant="body1">✔ {detail}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>

              <Typography variant="h5" fontWeight="bold" mt={2}>
                Future-Proof Your Software with Modular Engineering
              </Typography>
              <Typography variant="body1" mt={2}>
                {content.futureProofDescription}
              </Typography>

              <Typography variant="h5" fontWeight="bold" mt={2}>
                {content.callToAction}
              </Typography>
            </>
          ) : selectedService === "CMS Engineering" ? (
            <>
              <TitleTypography variant="h4" fontWeight="bold" mt={2}>
                {content.title}
              </TitleTypography>
              <Typography variant="h6" fontWeight="bold" mt={2}>
                {content.subTitle}
              </Typography>
              <Typography variant="body1" mt={2}>
                {content.description}
              </Typography>

              <Typography variant="h5" fontWeight="bold" mt={2}>
                Why Choose Our CMS Engineering Services?
              </Typography>
              <Box mt={1}>
                {content.whyChooseServices?.map((item, index) => (
                  <Box key={index} mt={2}>
                    <Typography variant="h6" fontWeight="bold">
                      ✅ {item.title}
                    </Typography>
                    <Typography variant="body1">{item.description}</Typography>
                    <Box mt={1}>
                      {item.details.map((detail, idx) => (
                        <Box sx={{ display: "flex" }} mt={1} key={idx}>
                          <Typography variant="body1">✔ {detail}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>

              <Typography variant="h5" fontWeight="bold" mt={2}>
                Transform Your Content Strategy with Intelligent CMS Engineering
              </Typography>
              <Typography variant="body1" mt={2}>
                {content.transformDescription}
              </Typography>

              <Typography variant="h5" fontWeight="bold" mt={2}>
                {content.callToAction}
              </Typography>
            </>
          ) : (
            <>
              <TitleTypography variant="h4" fontWeight="bold" mt={2}>
                {content.title}
              </TitleTypography>

              <Typography variant="h6" fontWeight="bold" mt={2}>
                {content.subTitle}
              </Typography>

              <Typography variant="body1" mt={2}>
                {content.description}
              </Typography>

              {content.whyModernize && (
                <>
                  <Typography variant="h6" fontWeight="bold" mt={2}>
                    Why Modernize Your Application?
                  </Typography>
                  <Box mt={1}>
                    {content.whyModernize.map((item, index) => (
                      <Box sx={{ display: "flex" }} mt={1} key={index}>
                        <Typography variant="body1">✅ {item}</Typography>
                      </Box>
                    ))}
                  </Box>
                </>
              )}

              {content.approach && (
                <>
                  <Typography variant="h6" fontWeight="bold" mt={2}>
                    Our {selectedService} Approach
                  </Typography>
                  <Box mt={1}>
                    {content.approach.map((item, index) => (
                      <Box sx={{ display: "flex" }} mt={1} key={index}>
                        <Typography variant="body1">🔹 {item}</Typography>
                      </Box>
                    ))}
                  </Box>
                </>
              )}

              {content.industriesWeServe && (
                <>
                  <Typography variant="h6" fontWeight="bold" mt={2}>
                    Industries We Serve
                  </Typography>
                  <Box mt={1}>
                    <Typography variant="body1">
                      📌 E-commerce | 📌 Healthcare | 📌 Finance | 📌 EdTech |
                      📌 Logistics | 📌 Enterprise Applications
                    </Typography>
                  </Box>
                </>
              )}

              {content.whyChooseUs && (
                <>
                  <Typography variant="h6" fontWeight="bold" mt={2}>
                    Why Choose Us?
                  </Typography>
                  <Box mt={1}>
                    {content.whyChooseUs.map((item, index) => (
                      <Box sx={{ display: "flex" }} mt={1} key={index}>
                        <Typography variant="body1">✔ {item}</Typography>
                      </Box>
                    ))}
                  </Box>
                </>
              )}

              <Typography variant="h6" fontWeight="bold" mt={2}>
                Revitalize Your Application Today!
              </Typography>
              <Box sx={{ display: "flex" }} mt={1}>
                <Typography variant="body1">
                  {content.callToAction ||
                    "Let’s transform your outdated application into a fast, secure, and modern digital experience."}
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }} mt={1}>
                <Typography variant="body1">
                  📞 Get a Free Consultation
                </Typography>
              </Box>
            </>
          )}

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "column", lg: "row" },
            }}
            mt={3}
          >
            {/* Benefits Section */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" fontWeight="bold">
                Benefits With Our Service
              </Typography>

              <Box display={"flex"} gap={1} mt={2}>
                <CheckCircleIconStyled />
                <Typography variant="body1">Technology Consultancy</Typography>
              </Box>
              <Box display={"flex"} gap={1} mt={2}>
                <CheckCircleIconStyled />
                <Typography variant="body1">Maintenance And Support</Typography>
              </Box>
              <Box display={"flex"} gap={1} mt={2}>
                <CheckCircleIconStyled />
                <Typography variant="body1">
                  We Provide best services
                </Typography>
              </Box>
              <Box display={"flex"} gap={1} mt={2}>
                <CheckCircleIconStyled />
                <Typography variant="body1">Requirements Gathering</Typography>
              </Box>
              <Box display={"flex"} gap={1} mt={2}>
                <CheckCircleIconStyled />
                <Typography variant="body1">Business Growth</Typography>
              </Box>
            </Box>

            {/* Image Section */}
          </Box>
        </LeftSection>

        <RightSideBox>
          <RightSection>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              All Services
            </Typography>
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                onClick={() => handleServiceClick(service)}
                className="animate"
                selected={selectedService === service}
              >
                <Typography variant="body1">{service}</Typography>
                <ArrowBox
                  className="arrow"
                  selected={selectedService === service}
                >
                  <FaArrowRightLong />
                </ArrowBox>
              </ServiceItem>
            ))}
          </RightSection>

          <RightSection2>
            {" "}
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Opening Hours
            </Typography>
            <OpeningHoursItem>
              <FiClock />
              <Typography variant="body1">
                Mon - Fri: 10.00 AM - 7.00 PM
              </Typography>
            </OpeningHoursItem>
            <OpeningHoursItem>
              <FiClock />
              <Typography variant="body1">Sat - Sun: Closed</Typography>
            </OpeningHoursItem>
            <OpeningHoursItem>
              <FiClock />
              <Typography variant="body1">Emergency: 24 hours</Typography>
            </OpeningHoursItem>
          </RightSection2>
        </RightSideBox>
      </Container>
    </Box>
  );
};

export default Services;
